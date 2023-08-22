import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from './FirebaseService'
import IPeople from '../models/IPeople'

const order = (citations: IPeople[]) => {
  return citations.sort((a, b) => {
    if (a.firstname < b.firstname) {
      return -1
    }
    if (a.firstname > b.firstname) {
      return 1
    }
    return 0
  })
}

const getPeoples = async (
  callback: React.Dispatch<React.SetStateAction<IPeople[] | undefined>>,
): Promise<void> => {
  let peoples

  const db = getFirestore(app)
  const peoplesCol = collection(db, 'peoples')
  const peoplesSnapshot = await getDocs(peoplesCol)

  peoples = peoplesSnapshot.docs.map((doc) => {
    const item: IPeople = doc.data() as IPeople
    item.id = doc.id
    return item
  })

  callback(order(peoples))
}

export default getPeoples
