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

export const StyledSignatureHeader = styled.header`
  display: block;
`;

export const StyledSignatureForm = styled.form`
  display: block;
  width: 45%;
`;

export const StyledSignatureFormGroup = styled.div`
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }
`;

export const StyledSignaturePreview = styled.div`
  display: block;
  width: 45%;
`;

export const StyledSignatureImage = styled.div``;

export const StyledSignatureInfo = styled.div``;

export const StyledSignatureName = styled.div``;

export const StyledSignatureRole = styled.div``;

export const StyledSignatureEmail = styled.div``;

export const StyledSignaturePhone = styled.div``;
