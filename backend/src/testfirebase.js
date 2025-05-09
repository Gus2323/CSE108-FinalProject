// testFirestore.js
import { db } from "./firebase";  // this pulls from firebase.js
import { collection, addDoc, getDocs } from "firebase/firestore";

async function helloFirestore() {
    // 1. Add a document
    const docRef = await addDoc(collection(db, "testCollection"), {
        message: "Hello, Firestore!",
        timestamp: new Date()
    });
    console.log("Document written with ID:", docRef.id);

    // 2. Read all documents in that collection
    const querySnapshot = await getDocs(collection(db, "testCollection"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
    });
}

helloFirestore();