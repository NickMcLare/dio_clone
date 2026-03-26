import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 120px auto 0;
    margin-left: 280px;
    margin-top: 150px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Column = styled.div`
    flex: 1;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 46px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
    white-space: nowrap;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const TermsText = styled.p`
    margin-top: 24px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
`

export const Highlight = styled.span`
    color: #23DD7A;
    font-weight: 700;
    cursor: pointer;
`

export const LoginText = styled.p`
    margin-top: 14px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
`