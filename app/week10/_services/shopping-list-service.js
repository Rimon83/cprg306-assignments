import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

// get  items by id
export const getItems = async (userId) => {
  const items = [];
  const docRef = query(collection(db, "users", userId, "items"));
  const docSnap = await getDocs(docRef);
  if (!docSnap.empty) {
    docSnap.forEach((doc) => {
      const itemData = { id: doc.id, ...doc.data() };
      // or
      // const itemData = doc.data();
      // itemData.id = doc.id;
      items.push(itemData);
    });
    return items;
  } else {
    return null;
  }
};

// get one item
export const getOneItem = async (userId, itemId) => {
  const docRef = doc(db, "users", userId, "items", itemId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const itemData = { id: docSnap.id, ...docSnap.data() };
    return itemData;
  } else {
    return null;
  }
};

// Add new item
export const addItem = async (userId, item) => {
  if (!item.name || !item.quantity || !item.category) {
    throw new Error(
      "The event object is missing required fields (name, date, or location)."
    );
  }
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    console.log("the item added successfully");
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
};

//delete item
export const deleteItem = async (itemId, userId) => {
  try {
    const itemRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemRef);
    console.log("item is deleted successfully ");
  } catch (error) {
    console.log("there is problem to delete the item", error);
  }
};

// update item
export const updateItem = async (userId, itemId, item) => {
  try {
    const itemRef = doc(db, "users", userId, "items", itemId);
    await updateDoc(itemRef, {
      name: item.name,
      quantity: item.quantity,
      category: item.category,
    });
    console.log("item is updated successfully ");
  } catch (error) {
    console.error("There is a problem updating the item:", error);
  }
};
