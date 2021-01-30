import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.mainBg};
      border: 3px solid rgba(118,255,3,.5);
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        color: #ECFBF0;
        border: 3px solid #097F11;
      }

      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        color: #F8F8F8;
        border: 3px solid #9C0614;
      }
    }

    &:focus {
      opacity: 1;
    } 
  }

  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;