// import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// // Your Firebase config
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// // Fetch all users (for admin dashboard)
// export const fetchAllUsers = async () => {
//   const snapshot = await getDocs(collection(db, "users"));
//   return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// };

// // Verify staff login by name + code
// export const verifyStaffCodeLogin = async (name, code) => {
//   const q = query(collection(db, "users"), where("name", "==", name), where("code", "==", code));
//   const snapshot = await getDocs(q);
//   return snapshot.docs.length > 0 ? snapshot.docs[0].data() : null;
// };

// // Standard email/password login
// export const loginWithEmail = async (email, password) => {
//   const userCredential = await signInWithEmailAndPassword(auth, email, password);
//   const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
//   return userDoc.data();
// };
