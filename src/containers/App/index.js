import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledSignature,
  StyledSignatureHeader,
  StyledSignatureContainer,
  StyledSignatureFields,
  StyledSignaturePreview,
  StyledSignatureImage,
  StyledSignatureInfo,
  StyledSignatureName,
  StyledSignatureRole,
  StyledSignatureEmail,
  StyledSignaturePhone
} from './styled';
import iconAteliware from 'assets/images/ateliware-icon.svg';
import logoAteliware from 'assets/images/ateliware-logo.svg';

const App = () => {
  const [name, setName] = useState('Peterson F. dos Santos');
  const [role, setRole] = useState('Co-founder & CEO');
  const [email, setEmail] = useState('peterson.santos@ateliware.com');
  const [phone, setPhone] = useState('41 99999-9999');
  const { register, watch } = useForm();

  const phoneNumberMasked = (value) => {

   return (value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1'))
  }

  return (
    <StyledSignature>
      <StyledSignatureHeader>
        <StyledWrapper>
          <h1>
            <a
              href="https://ateliware.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iconAteliware}
                width="60"
                height="auto"
                alt="Ateliware"
              />
            </a>
          </h1>
        </StyledWrapper>
      </StyledSignatureHeader>
      <StyledWrapper>
        <StyledSignatureContainer>
          <StyledSignatureFields>
            <Input
              type="text"
              name="name"
              onChange={() => {
                setName(watch('name'));
              }}
              placeholder="Insira seu nome"
              ref={register({ required: false })}
            />
          </StyledSignatureFields>
          <StyledSignatureFields>
            <Input
              type="text"
              name="role"
              onChange={() => {
                setRole(watch('role'));
              }}
              placeholder="Insira seu cargo"
              ref={register({ required: false })}
            />
          </StyledSignatureFields>
          <StyledSignatureFields>
            <Input
              type="email"
              name="email"
              onChange={() => {
                setEmail(watch('email'));
              }}
              placeholder="Insira seu e-mail"
              ref={register({ required: false })}
            />
          </StyledSignatureFields>

          <StyledSignatureFields>
            <Input
              type="tel"
              name="phone"
              onChange={(event) => {
                event.target.value = phoneNumberMasked(event.target.value);
                setPhone(watch('phone'));
              }}
              placeholder="Insira seu telefone"
              ref={register({ required: false })}
            />
          </StyledSignatureFields>
          <StyledSignatureFields>
            <Button type="button">Copiar assinatura</Button>
          </StyledSignatureFields>
        </StyledSignatureContainer>
        <StyledSignaturePreview>
          <StyledSignatureImage>
            <a
              href="https://ateliware.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logoAteliware}
                width="200"
                height="auto"
                alt="Ateliware"
              />
            </a>
          </StyledSignatureImage>
          <StyledSignatureInfo>
            <StyledSignatureName>{name}</StyledSignatureName>

            <StyledSignatureRole>{role}</StyledSignatureRole>

            <StyledSignatureEmail>{email}</StyledSignatureEmail>

            <StyledSignaturePhone>
              +55 41 3010-2275
            </StyledSignaturePhone>

            <StyledSignaturePhone>+55 {phone}</StyledSignaturePhone>
          </StyledSignatureInfo>
        </StyledSignaturePreview>
      </StyledWrapper>
    </StyledSignature>
  );
};

export default App;
