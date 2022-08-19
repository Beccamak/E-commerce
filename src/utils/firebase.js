import { initializeApp } from "firebase/app";
import  {getAuth, createUserWithEmailAndPassword, 
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
onAuthStateChanged,
signOut
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBV681Tf9mLbzP35_3Ls7R5TkhzvyNbKEs",
    authDomain: "shop-here-2da64.firebaseapp.com",
  projectId: "shop-here-2da64",
  storageBucket: "shop-here-2da64.appspot.com",
  messagingSenderId: "537584482317",
  appId: "1:537584482317:web:e0f58936396ebdd6bdbd44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


//Giving the database a name
export const database = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters(
    {
        prompt: 'select_account'
    }
)

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    console.log("userAuth", userAuth);
    const userDocRef = doc(database, 'users', userAuth.uid);
    console.log("userDocoRef",userDocRef);  
    const userSnapshot = await getDoc(userDocRef);
    console.log("usesnapshot", userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {firstName, lastName, email} = userAuth;
        const createdAt = new Date();
    
    try {
        await setDoc(userDocRef, {firstName, lastName, email,  createdAt, ...additionalInformation});
    } catch (error) {
        console.log(error.message);
    }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    console.log("createAuthuser ", email, password);
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password)
}

export const signInWithGooglePopup = async () => {
    return signInWithPopup(auth, googleProvider);
}

export const onAuthStateChangedListener = async (callback) => {
    onAuthStateChanged(auth, callback);
}

export const signOutUser = async () => {
    signOut(auth);
}



export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    
}