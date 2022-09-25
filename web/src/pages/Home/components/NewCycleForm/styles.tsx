import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  div {
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    margin: 0 0.25rem;
  }

  button {
    background: transparent;
    border: 0;

    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme['gray-500']};

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['green-500']};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  padding: 0 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 1.5rem;
  margin: 0 0.25rem;
  text-align: center;
`
