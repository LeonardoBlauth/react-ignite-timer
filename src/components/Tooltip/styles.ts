import styled from 'styled-components'
import * as Tooltip from '@radix-ui/react-tooltip'

export const StyledContent = styled(Tooltip.Content)`
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  font-size: 0.938rem;
  line-height: 1;
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['gray-900']};
`

export const StyledArrow = styled(Tooltip.Arrow)`
  fill: ${(props) => props.theme['gray-900']};
  margin-bottom: 0.125rem;
`
