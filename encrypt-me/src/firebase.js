import firebase from "firebase/app";

import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCLgDuLYgbp_JGzXA4O7YfrR8qXpbECDtc",
	authDomain: "encrypt-me-643c6.firebaseapp.com",
	databaseURL: "https://encrypt-me-643c6-default-rtdb.firebaseio.com",
	projectId: "encrypt-me-643c6",
	storageBucket: "encrypt-me-643c6.appspot.com",
	messagingSenderId: "942353904257",
	appId: "1:942353904257:web:1ba53b204851c0cd469380",
	measurementId: "G-FJCREP5LC5",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db, firebase };

export default firebase;
