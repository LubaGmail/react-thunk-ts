import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,    
    onAuthStateChanged,
    NextOrObserver,
    User
} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    setDoc,
    collection,
    writeBatch,
    query,
    DocumentData,
} from 'firebase/firestore';
import { Category } from "../../store/categories/categories.types";

const firebaseConfig = {
    apiKey: "AIzaSyA_aLrzSqrunPW4Xq4rGvWFJpNMxXuV7gw",
    authDomain: "clothing-db-63b47.firebaseapp.com",
    projectId: "clothing-db-63b47",
    storageBucket: "clothing-db-63b47.appspot.com",
    messagingSenderId: "953513898950",
    appId: "1:953513898950:web:e153e88bdef7bb51f6b8c7"
};

try
{
    initializeApp(firebaseConfig);
} catch(error: any | unknown) {
    throw new Error(error.toString());
}

// clothing-db-63b47
export const db = getFirestore();

export type ObjectToAdd = {
    title: string
}

export const addCollection = async <T extends ObjectToAdd>(
    collectionKey: string,
    objectToAdd: T[]): Promise<void> => {
    
        // start transaction
        const batch = writeBatch(db);
        const collectionRef = collection(db, collectionKey);
        
        objectToAdd.forEach((object) => {
            // called from: addCollection('categories', SHOP_DATA)
            const docRef = doc(collectionRef, object.title.toLowerCase());
            batch.set(docRef, object);
        });

        await batch.commit();
        console.log('done');
}

/* 
    (5) [{…}, {…}, {…}, {…}, {…}]
        [0]
            items: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            title: "Hats"
*/
export const getCategories = async (): Promise<any> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    
    // throw new Error('Error fetching categories');
    const data = querySnapshot.docs.map((doc) => doc.data());

    return data;
}

export const getAllProducts = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    let items = querySnapshot.docs.map((doc) => doc.data().items);
    
    // throw new Error('Error fetching products');
    console.log('items', items)
    return items;
}

// doc based on user.uid and user.accessToken
export const createUserDocumentFromAuth = async (userAuth: any, additionalInformation = {}) => {
    if (!userAuth) return;

    // createUserWithEmailAndPassword(auth, email, pass)
    // signInWithPopup(auth, googleProvider)
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    const exists = userSnapshot.exists()

    if (!exists) {
        // Both Athentication record and users document is created in Firestore
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,    
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error: any | unknown) {
            throw new Error('error creating the user', error.message);
        }
    }
    return userDocRef;
}

// const res = await createAuthUserWithEmailAndPassword(email, pass, confirmPass)
export const createAuthUserWithEmailAndPassword = async (email: string, pass: string, confirmPass: string) => {
    // validate fields
    if (pass !== confirmPass) {
       throw new Error('signup-form.handleSubmit - password and confirmPassword must be equal.')
    }
    if ( pass.length < 6) {
        throw new Error('signup-form.handleSubmit - password must be at least 6 long.')
    }

    //  auth is a singleton through the life of the app
    const userCredentialImpl = await createUserWithEmailAndPassword(auth, email, pass)
    return userCredentialImpl
}

export const signInAuthUserWithEmailAndPassword = async (email: string, pass: string) => {
    if (!email || !pass) {
        throw new Error('signin-form.handleSubmit - email and password not entered.')
    }

    //  auth is a singleton through the life of the app
    const userCredentialImpl = await signInWithEmailAndPassword(auth, email, pass)
    return userCredentialImpl
}

// instance of provider; you can have have multiple providers
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

// returns Promise<UserCredential>
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const signOutUser = async () => await signOut(auth);

// give me a callback as soon as the function is instantiated
export const onAuthStateChangedListener = (callback:NextOrObserver<User>) => onAuthStateChanged(auth, callback)

// application wide
export const auth = getAuth()

