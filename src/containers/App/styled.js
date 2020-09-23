import styled from 'styled-components';
import { StyledWrapper } from 'assets/global/styled';
import colors from 'assets/global/colors';
import fonts from 'assets/global/fonts';

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

export const StyledSignatureInfo = styled.div`

p {
  margin: 2px 0;
}`;

export const StyledSignatureName = styled.h3`
  margin: 0;
  font-family: ${fonts.primary};
  color: ${colors.red400};
`;

export const StyledSignatureRole = styled.p`
  font-family: ${fonts.secondary};
  font-size: 15px;
  font-weight: 700;
`;

export const StyledSignatureEmail = styled.p`
  font-family: ${fonts.secondary};
  font-size: 15px;
`;

export const StyledSignaturePhone = styled.p`
  font-family: ${fonts.secondary};
  font-size: 15px;
`;
