import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ICitation from '../models/ICitation'
import { app } from './FirebaseService'

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

  callback(citations)
}

export default getAll
