import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';



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