// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC6CtIlRko2CFf0owSvUlZMeVtkVDMy2BU',
  authDomain: 'the-gd-fste-ce113.firebaseapp.com',
  projectId: 'the-gd-fste-ce113',
  storageBucket: 'the-gd-fste-ce113.appspot.com',
  messagingSenderId: '485167566903',
  appId: '1:485167566903:web:9e5dfacd7e34741cf96fb2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Auth functions
export const createUserWithEmailAndPassword = async (email, password) => {
  return await auth.createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
};

export const signInWithGoogle = async () => {
  return await auth.signInWithPopup(googleProvider);
};

export const signOutUser = async () => {
  return await auth.signOut();
};

// Firestore functions for members
export const createMember = async (userUID, memberData) => {
  return await db
    .collection('members')
    .doc(userUID)
    .set({
      ...memberData,
      createdAt: new Date(),
      uid: userUID,
    });
};

export const getMember = async userUID => {
  const doc = await db.collection('members').doc(userUID).get();
  return doc.exists ? doc.data() : null;
};

export const updateMember = async (userUID, updates) => {
  return await db
    .collection('members')
    .doc(userUID)
    .update({
      ...updates,
      updatedAt: new Date(),
    });
};
