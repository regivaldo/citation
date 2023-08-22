import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore'
import ICitation from '../models/ICitation'
import { app } from './FirebaseService'
import { v4 as uuidv4 } from 'uuid'

const order = (citations: ICitation[]) => {
  return citations.sort(
    (a, b) =>
      new Date(a.date?.seconds * 1000).getTime() -
      new Date(b.date?.seconds * 1000).getTime(),
  )
}

const getAll = async (
  callback: React.Dispatch<React.SetStateAction<ICitation[] | undefined>>,
): Promise<void> => {
  let citations

  const db = getFirestore(app)
  const citationCol = collection(db, 'citation')
  const citationSnapshot = await getDocs(citationCol)

  citations = citationSnapshot.docs.map((doc) => {
    const item: ICitation = doc.data() as ICitation
    item.id = doc.id
    return item
  })

  callback(order(citations))
}

const post = async (text: string, name: string): Promise<void> => {
  const db = getFirestore(app)
  const citation = doc(db, 'citation', uuidv4())
  const content = {
    signature: name,
    text: text,
    date: new Date(),
  }

  await setDoc(citation, content)
}

export { getAll, post }
