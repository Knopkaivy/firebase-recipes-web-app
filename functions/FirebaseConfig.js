const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceAccount.json');

const FIREBASE_STORAGE_BUCKET = 'fir-recipes-7a9d7.appspot.com';

const apiFirebaseOptions = {
  ...functions.config().firebase,
  credential: admin.credential.applicationDefault(),
  projectId: 'fir-recipes-7a9d7',
};
admin.initializeApp(apiFirebaseOptions);

const firestrore = admin.firestore();
const settings = { timestampsInSnapshots: true };

firestrore.settings(settings);

const storageBucket = admin.storage().bucket(FIREBASE_STORAGE_BUCKET);
const auth = admin.auth();

module.exports = { functions, auth, firestrore, storageBucket, admin };
