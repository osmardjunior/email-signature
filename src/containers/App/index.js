import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ClipboardJS from 'clipboard';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledSignature,
  StyledSignatureHeader,
  StyledSignatureContainer,
  StyledSignatureFields,
  StyledSignatureActions,
  StyledSignaturePreview,
  StyledSignatureImage,
  StyledSignatureInfo,
  StyledSignatureName,
  StyledSignatureRole,
  StyledSignatureEmail,
  StyledSignaturePhone,
  StyledNotice
} from './styled';
import colors from 'assets/global/colors';
import fonts from 'assets/global/fonts';
import iconAteliware from 'assets/images/ateliware-icon.svg';

const App = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [copied, setCopied] = useState(false);
  const { register, watch } = useForm();
  const preview = useRef(null);
  const copyHTML = useRef(null);

  const phoneNumberMasked = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const clearRange = () => {
    setTimeout(() => {
      window.getSelection().removeAllRanges();
      setCopied(false);
    }, 5000);
  };

  const copyText = () => {
    window.getSelection().removeAllRanges();

    const container = preview.current;
    const range = document.createRange();

    range.selectNode(container);
    window.getSelection().addRange(range);
    document.execCommand('Copy');

    setCopied(true);
    clearRange();
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(copyHTML.current, {
      text: () => {
        return preview.current.outerHTML;
      }
    });

    clipboard.on('success', () => {
      setCopied(true);
      clearRange();
    });

    clipboard.on('error', (err) => {
      console.log(err);
      setCopied(false);
      clearRange();
    });
  }, [copyHTML]);

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

          <StyledNotice copied={copied}>Copiado!</StyledNotice>
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
                event.target.value = phoneNumberMasked(
                  event.target.value
                );
                setPhone(watch('phone'));
              }}
              placeholder="Insira seu telefone (e.g.: 41 99999-9999)"
              ref={register({ required: false })}
            />
          </StyledSignatureFields>
          <StyledSignatureFields>
            <StyledSignatureActions>
              <Button
                type="button"
                onClick={() => {
                  copyText();
                }}
              >
                Copiar assinatura
              </Button>
              <Button type="button" ref={copyHTML}>
                Copiar em HTML
              </Button>
            </StyledSignatureActions>
          </StyledSignatureFields>
        </StyledSignatureContainer>
        <StyledSignaturePreview ref={preview}>
          <StyledSignatureImage>
            <a
              href="https://ateliware.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/ateliware/email-signature/master/src/assets/images/ateliware-logo.svg"
                width="200"
                height="auto"
                alt="Ateliware"
              />
            </a>
          </StyledSignatureImage>
          <StyledSignatureInfo>
            <StyledSignatureName
              style={{
                margin: '0',
                fontFamily: fonts.primary,
                color: colors.red400
              }}
            >
              {name || 'Peterson F. dos Santos'}
            </StyledSignatureName>

            <StyledSignatureRole
              style={{
                margin: '2px 0',
                fontFamily: fonts.primary,
                fontSize: '15px',
                fontWeight: '700',
                color: colors.black
              }}
            >
              {role || 'Co-founder & CEO'}
            </StyledSignatureRole>

            <StyledSignatureEmail
              style={{
                margin: '2px 0',
                fontFamily: fonts.secondary,
                fontSize: '15px',
                color: colors.gray400
              }}
            >
              {email || 'peterson.santos@ateliware.com'}
            </StyledSignatureEmail>

            <StyledSignaturePhone
              style={{
                margin: '2px 0',
                fontFamily: fonts.secondary,
                fontSize: '15px',
                color: colors.gray400
              }}
            >
              +55 41 3010-2275
            </StyledSignaturePhone>

            {phone !== '' && (
              <StyledSignaturePhone
                style={{
                  margin: '2px 0',
                  fontFamily: fonts.secondary,
                  fontSize: '15px',
                  color: colors.gray400
                }}
              >
                +55 {phone || '41 99999-9999'}
              </StyledSignaturePhone>
            )}
          </StyledSignatureInfo>
        </StyledSignaturePreview>
      </StyledWrapper>
    </StyledSignature>
  );
};

export default App;
