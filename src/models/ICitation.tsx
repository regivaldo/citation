import { Timestamp } from 'firebase/firestore'

export default interface ICitation {
  id: string
  signature: string
  text: string
  date: Timestamp
}
