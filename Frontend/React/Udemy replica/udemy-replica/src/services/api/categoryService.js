import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  writeBatch,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { COLLECTIONS } from '../../config/constants'
import { slugify } from '../../utils/slug'

/**
 * @returns {Promise<Array<object>>}
 */
export async function listCategories() {
  if (!db) return []
  const q = query(collection(db, COLLECTIONS.categories), orderBy('order', 'asc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {{ name: string }} input
 */
export async function createCategory(input) {
  if (!db) throw new Error('Firestore unavailable.')
  const slug = slugify(input.name)
  const snap = await getDocs(collection(db, COLLECTIONS.categories))
  const order = snap.size
  return addDoc(collection(db, COLLECTIONS.categories), {
    name: input.name,
    slug,
    order,
    createdAt: serverTimestamp(),
  })
}

/**
 * @param {string} id
 * @param {object} patch
 */
export async function updateCategory(id, patch) {
  if (!db) throw new Error('Firestore unavailable.')
  await updateDoc(doc(db, COLLECTIONS.categories, id), patch)
}

/**
 * @param {string[]} orderedIds
 */
export async function reorderCategories(orderedIds) {
  if (!db) throw new Error('Firestore unavailable.')
  const batch = writeBatch(db)
  orderedIds.forEach((id, index) => {
    batch.update(doc(db, COLLECTIONS.categories, id), { order: index })
  })
  await batch.commit()
}

/**
 * @param {string} id
 */
export async function deleteCategory(id) {
  if (!db) throw new Error('Firestore unavailable.')
  await deleteDoc(doc(db, COLLECTIONS.categories, id))
}
