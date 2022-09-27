import { useContext } from 'react'
import { CyclesContext } from '../contexts/CyclesContext'

export function useCycles() {
  const context = useContext(CyclesContext)

  return context
}
