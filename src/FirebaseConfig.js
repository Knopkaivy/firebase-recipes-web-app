import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import { getFirestore } from 'firebase/firestore';

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
const config = {
  apiKey: 'AIzaSyAdZ1pi_yBgz1-o5jCb0ySH2-cCnLxeD_E',
  authDomain: 'fir-recipes-7a9d7.firebaseapp.com',
  projectId: 'fir-recipes-7a9d7',
  storageBucket: 'fir-recipes-7a9d7.appspot.com',
  messagingSenderId: '248926925826',
  appId: '1:248926925826:web:df46bbb6cab7b4a675e31b',
  measurementId: 'G-0DB7YVDDQ6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
