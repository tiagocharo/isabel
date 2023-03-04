import moment from 'moment'
import { DisplayTime } from '../..'
import { Container } from './style'

const INITIAL_DATE = moment('08/25/2022')
const BIRTH_DATE = '01/06/2023'

export function Time() {
  const today = moment()
  const diffWeeks = moment.duration(today.diff(INITIAL_DATE)).asWeeks()

  return (
    <Container>
      <DisplayTime
        title='Semana de gestação'
        time={`${Math.floor(diffWeeks)} semanas`}
      />

      <DisplayTime title='Previsão de nascimento' time={BIRTH_DATE} />
    </Container>
  )
}
