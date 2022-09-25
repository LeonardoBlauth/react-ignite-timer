import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { Tooltip } from '../Tooltip'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        <Tooltip content="Timer">
          <NavLink to="/">
            <Timer size={24} />
          </NavLink>
        </Tooltip>

        <Tooltip content="Histórico">
          <NavLink to="/history">
            <Scroll size={24} />
          </NavLink>
        </Tooltip>
      </nav>
    </HeaderContainer>
  )
}
