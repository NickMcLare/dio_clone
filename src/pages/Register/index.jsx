import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { api } from '../../services/api';
import {
    Column,
    Container,
    Highlight,
    LoginText,
    SubtitleLogin,
    TermsText,
    Title,
    TitleLogin,
    Wrapper,
} from './styles'

const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
     email: yup.string().email('E-mail não é válido').required('Campo obrigatório!'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório!')
}).required()

const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData) => {
        try {
            const name = formData.name.trim();
            const email = formData.email.trim();
            const password = formData.password.trim();

            const {data} = await api.get('/users', {
                params: { email }
            })

            if (data.length) {
                alert('Já existe uma conta cadastrada com esse e-mail.')
                return
            }
            await api.post('/users', {
                name,
                email,
                password
            })

            alert('Conta criada com sucesso!')
            navigate('/login')
        } catch {
            alert('Não foi possível concluir o cadastro. Tente novamente.')
        }
    }

    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change.</SubtitleLogin>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" type="text" leftIcon={<MdPerson/>}/>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock/>}/>
                            <Button tittle="Criar minha conta" $variant="secondary" type="submit"/>
                        </form>

                        <TermsText>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </TermsText>
                        <LoginText>
                            Já tenho conta. <Highlight onClick={() => navigate('/login')}>Fazer login</Highlight>
                        </LoginText>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Register }