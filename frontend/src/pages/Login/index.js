import React from "react";

import QRCode from "qrcode.react";

import logo1 from "../../assets/discord-logo-1.png";
import logo2 from "../../assets/discord-logo-2.png";
import StyledAnimation from "../../components/StyledAnimation";
import {
  Container,
  StyledImg,
  FormContainer,
  Form,
  Title,
  SubTitle,
  DivInputs,
  DivQRCode,
  ImageCode,
  Input,
  Label,
  Button,
  InputWrapper,
  StyledLink,
  DivCreateAccount,
  Span,
  VerticalSeparator,
} from "./styles";

import { useHistory } from "react-router-dom";
function Login(props) {
  const history = useHistory();
  const { user, setUser } = props;
  function handleName(e) {
    setUser(e.target.value);
  }
  function handleLogin(e) {
    e.preventDefault();
    // console.log("anima");
    history.push("/home");
  }

  return (
    <Container>
      <StyledAnimation />
      <StyledImg src={logo2} alt="logo" />
      <FormContainer>
        <Form onSubmit={handleLogin}>
          <DivInputs>
            <Title>Boas-vindas de volta!</Title>
            <SubTitle>Estamos muito animados em te ver novamente!</SubTitle>
            <InputWrapper>
              <Label>E-mail ou número de telefone</Label>
              <Input type="text" value={user.userName} onChange={handleName} />
            </InputWrapper>
            <InputWrapper>
              <Label>Senha</Label>
              <Input type="password" />
              <StyledLink>Esqueceu a senha?</StyledLink>
            </InputWrapper>
            <Button type="submit">Entrar</Button>
            <DivCreateAccount>
              <Span>Precisando de uma conta?</Span>
              <StyledLink>Registre-se</StyledLink>
            </DivCreateAccount>
          </DivInputs>
          <VerticalSeparator />
          <DivQRCode>
            <ImageCode>
              <QRCode value="http://192.168.0.106:3000" size={176} />
              <img src={logo1} alt="logo discord" />
            </ImageCode>
            <Title>Entrar com Código QR!</Title>
            <SubTitle>
              Escaneie isto com o <strong>app móvel do Discord</strong> para
              fazer login imediatamente.
            </SubTitle>
          </DivQRCode>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Login;
