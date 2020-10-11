import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDi4o07CwbAZGJWdbwoQp_qORLt2M1Elmc",
  authDomain: "learning-630e2.firebaseapp.com",
  databaseURL: "https://learning-630e2.firebaseio.com",
  projectId: "learning-630e2",
  storageBucket: "learning-630e2.appspot.com",
  messagingSenderId: "618823156470",
  appId: "1:618823156470:web:e4c94b3ca43a063a4e22d7"
};
const fire = firebase.initializeApp(config);
export default fire;
