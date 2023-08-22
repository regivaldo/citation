import { styled } from 'styled-components'

interface Props {
  seconds: number
}

const Formatted = styled.div``

export default function DateFormatted({ seconds }: Props) {
  const date = new Date(seconds * 1000)

  return <Formatted>{date.toLocaleString()}</Formatted>
}
