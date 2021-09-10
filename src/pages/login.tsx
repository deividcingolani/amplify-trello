import { Container } from '@material-ui/core';
import React, { ReactElement } from 'react';
import FormContainer from '../components/auth/FormContainer';
import SignInForm from '../components/auth/SignInForm';

export default function Login(): ReactElement {
  return (
    <div style={{ background: '#f9fafc' }}>
      <Container maxWidth='xs'>
        <FormContainer form={<SignInForm />} type='signin' />
      </Container>
    </div>
  );
}
1;
