// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA1eY1pFhoJFfk0Kyg9rGhnFc17A1BU0qY",
	authDomain: "faithsnorteysrsvp.firebaseapp.com",
	databaseURL:
		"https://faithsnorteysrsvp-default-rtdb.firebaseio.com",
	projectId: "faithsnorteysrsvp",
	storageBucket: "faithsnorteysrsvp.appspot.com",
	messagingSenderId: "443423571413",
	appId: "1:443423571413:web:7fb61eba6ff71917d7515c",
	measurementId: "G-6G88WKXG34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import {
	getDatabase,
	ref,
	set,
	child,
	get,
	set,
	update,
	remove,
} from "firebase/database";

const db = getDatabase();

let addBtn = document.getElementById("addBtn")

let fullName = document.getElementById("name");
let guestNumber = document.getElementById("guest-number");

function AddData() {
	set(ref(db, "Names/"), {
		attendeename: fullName.value,
		guestNumber: guestNumber.value,
	})
		.then(() => {
			alert("Data Added Successfully");
		})
		.catch(() => {
			alert("Unsuccessful");
			console.log(error);
		});
}


addBtn.addEventListener("click", AddData)
