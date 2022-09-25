import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { HandPalm, Play } from 'phosphor-react'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import { HomeContainer } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Tooltip } from '../../components/Tooltip'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 1 minuto')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  function decrementMinutesAmount() {
    if (getValues().minutesAmount > 0 && getValues().minutesAmount - 5 > 0) {
      setValue('minutesAmount', getValues().minutesAmount - 5)
    } else {
      setValue('minutesAmount', 0)
    }
  }

  function incrementMinutesAmount() {
    if (getValues().minutesAmount < 60 && getValues().minutesAmount + 5 < 60) {
      setValue('minutesAmount', getValues().minutesAmount + 5)
    } else {
      setValue('minutesAmount', 60)
    }
  }

  function taskErrorMessage() {
    return errors.task ? errors.task.message : ''
  }

  function minutesAmountErrorMessage() {
    if (errors.minutesAmount) {
      return errors.minutesAmount.message === 'Expected number, received nan'
        ? 'O ciclo precisa ser um número'
        : errors.minutesAmount.message
    } else {
      return ''
    }
  }

  function handleErrorMessage() {
    if (taskErrorMessage() !== '') {
      return taskErrorMessage()
    } else if (minutesAmountErrorMessage() !== '') {
      return minutesAmountErrorMessage()
    } else {
      return 'Comece a tarefa'
    }
  }

  const task = watch('task')

  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm
            decrementMinutesAmount={decrementMinutesAmount}
            incrementMinutesAmount={incrementMinutesAmount}
          />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <button
            onMouseDown={interruptCurrentCycle}
            type="button"
            className="submit interrupt"
          >
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <>
            <Tooltip
              content={handleErrorMessage()}
              type="submit"
              className="submit play"
              disabled={isSubmitDisabled}
            >
              <Play size={24} />
              Começar
            </Tooltip>
          </>
        )}
      </form>
    </HomeContainer>
  )
}
