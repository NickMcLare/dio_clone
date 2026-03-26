/*
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
*/

/*import { Button } from '../../components/Button'*/
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Container, Column, Title, TitleHighlight } from './styles'
const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={65} nome="Nicholas Santana" image="https://avatars.githubusercontent.com/u/138341306?s=400&u=1ffd2e54bc577105c88ee8392595cbba4104f293&v=4"/>
                <UserInfo percentual={80} nome="Nicholas Santana" image="https://avatars.githubusercontent.com/u/138341306?s=400&u=1ffd2e54bc577105c88ee8392595cbba4104f293&v=4"/>
                <UserInfo percentual={25} nome="Nicholas Santana" image="https://avatars.githubusercontent.com/u/138341306?s=400&u=1ffd2e54bc577105c88ee8392595cbba4104f293&v=4"/>
                <UserInfo percentual={79} nome="Nicholas Santana" image="https://avatars.githubusercontent.com/u/138341306?s=400&u=1ffd2e54bc577105c88ee8392595cbba4104f293&v=4"/>
                <UserInfo percentual={55} nome="Nicholas Santana" image="https://avatars.githubusercontent.com/u/138341306?s=400&u=1ffd2e54bc577105c88ee8392595cbba4104f293&v=4"/>
            </Column>
        </Container>
    </>)
}

export { Feed }