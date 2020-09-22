import React from 'react';
import {useForm} from 'react-hook-form';
import Input from 'components/Form/Input';

const App = () => {

  const {handleSubmit, register, errors} = useForm();

  const onSubmit = data => {
    console.log('data', data);
  }

  return (
    <React.Fragment>
      <Input type="text" placeholder="Nome" ref={register({required: true})} />
    </React.Fragment>
  );
};

export default App;
