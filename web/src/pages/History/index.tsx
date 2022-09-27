import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { CyclesContext } from '../../contexts/CyclesContext'

import { Card, HistoryContainer, HistoryList, NoData, Status } from './styles'
import { Scroll } from 'phosphor-react'

export function History() {
  const { cycles } = useContext(CyclesContext)

  function FormatDate(date: Date) {
    const newDate = new Date(date)

    return formatDistanceToNow(newDate, {
      addSuffix: true,
      locale: ptBR,
    })
  }

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        {cycles.length ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Início</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {cycles.map((cycle) => {
                  return (
                    <tr key={cycle.id}>
                      <td>{cycle.task}</td>
                      <td>
                        {cycle.minutesAmount}{' '}
                        {cycle.minutesAmount > 1 ? 'minutos' : 'minuto'}
                      </td>
                      <td>{FormatDate(cycle.startDate)}</td>
                      <td>
                        {cycle.finishedDate && (
                          <Status variant="green">Concluído</Status>
                        )}
                        {cycle.interruptedDate && (
                          <Status variant="red">Interrompido</Status>
                        )}
                        {!cycle.finishedDate && !cycle.interruptedDate && (
                          <Status variant="yellow">Em Andamento</Status>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {cycles.map((cycle) => {
              return (
                <Card key={cycle.id}>
                  <header>
                    <span>{cycle.task}</span>
                    <small>
                      {cycle.minutesAmount}{' '}
                      {cycle.minutesAmount > 1 ? 'minutos' : 'minuto'}
                    </small>
                  </header>
                  <div>
                    <span>
                      {cycle.finishedDate && (
                        <Status variant="green">Concluído</Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status variant="red">Interrompido</Status>
                      )}
                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status variant="yellow">Em Andamento</Status>
                      )}
                    </span>
                    <small>{FormatDate(cycle.startDate)}</small>
                  </div>
                </Card>
              )
            })}
          </>
        ) : (
          <NoData>
            <Scroll size={80} />
            <span>Você ainda não tem ciclos registrados</span>
          </NoData>
        )}
      </HistoryList>
    </HistoryContainer>
  )
}
