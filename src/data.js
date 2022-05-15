import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, deleteDoc, setDoc} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyBlfDG4vCYYmBK8IAvnxezakTHWnquDOO4",
    authDomain: "simple-blog-db643.firebaseapp.com",
    projectId: "simple-blog-db643",
    storageBucket: "simple-blog-db643.appspot.com",
    messagingSenderId: "891417902713",
    appId: "1:891417902713:web:68481cd05eddb0675b5ea8",
    measurementId: "G-CHNDZP5Z7L"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem('userId', result.user.uid);
    sessionStorage.setItem('userToken', result._tokenResponse.idToken);
    sessionStorage.setItem('userEmail', result.user.email);
}
export const register = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem('userId', result.user.uid);
    sessionStorage.setItem('userToken', result._tokenResponse.idToken);
    sessionStorage.setItem('userEmail', result.user.email);
}
export const logout = async () => {
    await signOut(auth);

    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userEmail');
}
export const readAllPosts = async () => {
    const snapShot = await getDocs(collection(db, "posts"));
    return snapShot;
}
export const addNewPost = async (title, details, imageLink) => {
    const postsCollection = collection(db, 'posts')
    const data = {
        title,
        details,
        imageLink,
        creatorId: sessionStorage.getItem('userId')
      };
    return await addDoc(postsCollection, data);
}
export const getItem = async (id) => {
    const document = await doc(db,'posts', id);
    const snapshot = await getDoc(document); 
    if (snapshot.exists()) {
        return snapshot.data();
    }
    else{
        throw new Error('Document not found!');
    }
}
export const del = async (id) => {
    const document = await doc(db,'posts', id);
    return await deleteDoc(document);
}
export const updatePost = async (title, details, imageLink, id) => {
    const document = await doc(db,'posts/' + id);
    const data = {
        title,
        details,
        imageLink
      };
    return await setDoc(document, data);
}