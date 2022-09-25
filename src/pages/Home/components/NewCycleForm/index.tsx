import { Minus, Plus } from 'phosphor-react'
import { ReactNode, useContext } from 'react'
import { FieldError, useFormContext } from 'react-hook-form'
import { Tooltip } from '../../../../components/Tooltip'

import { CyclesContext } from '../../../../contexts/CyclesContext'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
interface NewCycleFormProps {
  decrementMinutesAmount: () => void
  incrementMinutesAmount: () => void
}

export function NewCycleForm({
  decrementMinutesAmount,
  incrementMinutesAmount,
}: NewCycleFormProps) {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  function handleDecrementMinutesAmount() {
    decrementMinutesAmount()
  }

  function handleIncrementMinutesAmount() {
    incrementMinutesAmount()
  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome ao seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <div>
        <button
          type="button"
          disabled={!!activeCycle}
          onMouseDown={handleDecrementMinutesAmount}
        >
          <Minus size={15} />
        </button>
        <MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="00"
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <button
          type="button"
          disabled={!!activeCycle}
          onMouseDown={handleIncrementMinutesAmount}
        >
          <Plus size={15} />
        </button>
      </div>
      <span>minutos.</span>
    </FormContainer>
  )
}
