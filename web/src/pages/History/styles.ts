import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  height: 95%;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media (max-width: 768px) {
    padding: 3.5rem 1rem;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }

  @media (max-width: 909px) {
    table {
      display: none;
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  variant: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.variant]]};
  }
`

export const Card = styled.div`
  padding: 1.5rem 2rem;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};

  header {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }

    small {
      margin-top: 0.25rem;
      color: ${(props) => props.theme['gray-300']};
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1.5rem;
  }

  & + div {
    margin-top: 0.5rem;
  }

  @media (min-width: 910px) {
    display: none;
  }

  @media (max-width: 500px) {
    div {
      justify-content: flex-end;
      small {
        display: none;
      }
    }
  }
`

export const NoData = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  font-size: 1.25rem;
  text-align: center;
`
