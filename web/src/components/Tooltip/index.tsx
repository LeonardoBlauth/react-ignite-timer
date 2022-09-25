import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { StyledArrow, StyledContent } from './styles'

interface ContentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string
  children?: ReactNode
}

export function Tooltip({ content, children, ...props }: ContentProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger {...props}>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <StyledContent>
            {content}
            <StyledArrow />
          </StyledContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
