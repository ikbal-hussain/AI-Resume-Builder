import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpa0QbwLNvCt8E00TwKEn2ruEqA86_2sk",
    authDomain: "sign-in-up-page-9f3cd.firebaseapp.com",
    projectId: "sign-in-up-page-9f3cd",
    storageBucket: "sign-in-up-page-9f3cd.appspot.com",
    messagingSenderId: "453411524806",
    appId: "1:453411524806:web:ca60963ef3e263cbac87c7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);