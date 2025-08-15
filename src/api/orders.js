import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

export async function createOrder(order) {
  const data = {
    ...order,
    status: 'pending',
    createdAt: serverTimestamp(),
  }
  const docRef = await addDoc(collection(db, 'orders'), data)
  return docRef
}



