import React from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/Form/Input';
import {StyledWrapper} from 'assets/global/styled';
import {StyledSignature, StyledSignatureForm, StyledSignaturePreview} from './styled';

const App = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    console.log('data', data);
  };

  return (
    <StyledSignature>
      <StyledWrapper>
      <StyledSignatureForm>
      <Input
        type="text"
        placeholder="Nome"
        ref={register({ required: true })}
      />
      </StyledSignatureForm>
      <StyledSignaturePreview>
        <p>Preview</p>
      </StyledSignaturePreview>
      </StyledWrapper>
    </StyledSignature>
  );
};

export default App;
