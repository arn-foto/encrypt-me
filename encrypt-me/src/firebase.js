import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCLgDuLYgbp_JGzXA4O7YfrR8qXpbECDtc",
	authDomain: "encrypt-me-643c6.firebaseapp.com",
	projectId: "encrypt-me-643c6",
	storageBucket: "encrypt-me-643c6.appspot.com",
	messagingSenderId: "942353904257",
	appId: "1:942353904257:web:1ba53b204851c0cd469380",
	measurementId: "G-FJCREP5LC5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
