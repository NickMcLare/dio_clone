import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '../../services/api';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

const schema = yup
  .object({
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório!'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório!'),
}).required()

const Login = () => {

    const navigate = useNavigate();
    
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });


    const onSubmit = async formData => {
        try{
            const email = formData.email.trim();
            const password = formData.password.trim();

            const { data } = await api.get('/users', {
                params: { email }
            })

            const user = data?.[0];
            const passwordIsValid = user && String(user.password).trim() === password;

            if(passwordIsValid && user.id){
                navigate('/feed')
                return 

            } else {
                alert('Email ou senha inválido.')

            }
        }catch{
            alert('Houve um erro. Tente novamente.')
        }
    }


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                   A plataforma para você aprender com experts, dominar as principais tecnologias
                   e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail/>}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button tittle="Entrar" $variant="secondary"  type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText onClick={() => navigate('/cadastro')}>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }