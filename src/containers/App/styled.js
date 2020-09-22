import styled from 'styled-components';
import { StyledWrapper } from 'assets/global/styled';

export const StyledSignature = styled.section`
  display: block;
  width: 100%;

  ${StyledWrapper} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const StyledSignatureForm = styled.form`
  display: block;
  width: 45%;
`;

export const StyledSignaturePreview = styled.div`
  display: block;
  width: 45%;
`;
