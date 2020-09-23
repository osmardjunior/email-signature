import React from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledSignature,
  StyledSignatureHeader,
  StyledSignatureForm,
  StyledSignatureFormGroup,
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
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    console.log('data', data);
  };

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
        <StyledSignatureForm>
          <StyledSignatureFormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Insira seu nome"
              ref={register({ required: true })}
            />
          </StyledSignatureFormGroup>
          <StyledSignatureFormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Insira seu e-mail"
              ref={register({ required: true })}
            />
          </StyledSignatureFormGroup>
          <StyledSignatureFormGroup>
            <Input
              type="text"
              name="role"
              placeholder="Insira seu cargo"
              ref={register({ required: true })}
            />
          </StyledSignatureFormGroup>
          <StyledSignatureFormGroup>
            <Input
              type="tel"
              name="tel"
              placeholder="Insira seu telefone"
              ref={register({ required: true })}
            />
          </StyledSignatureFormGroup>
          <StyledSignatureFormGroup>
            <Button type="button">Copiar assinatura</Button>
          </StyledSignatureFormGroup>
        </StyledSignatureForm>
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
            <StyledSignatureName>
              Celso Fabri Junior
            </StyledSignatureName>
            <StyledSignatureRole>
              Front-End Software Engineer
            </StyledSignatureRole>
            <StyledSignatureEmail>
              celso.fabri@ateliware.com
            </StyledSignatureEmail>
            <StyledSignaturePhone>
              +55 41 3010-2275
            </StyledSignaturePhone>
            <StyledSignaturePhone>
              +55 41 99122-2951
            </StyledSignaturePhone>
          </StyledSignatureInfo>
        </StyledSignaturePreview>
      </StyledWrapper>
    </StyledSignature>
  );
};

export default App;
