const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceAccount.json');

const FIREBASE_STORAGE_BUCKET = 'fir-recipes-7a9d7.appspot.com';

const firebase_params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientX509CertUrl: serviceAccount.client_x509_cert_url,
};

const apiFirebaseOptions = {
  ...functions.config().firebase,
  // credential: admin.credential.applicationDefault(),
  credential: admin.credential.cert(serviceAccount),
  projectId: 'fir-recipes-7a9d7',
};
admin.initializeApp(apiFirebaseOptions);

const firestrore = admin.firestore();
const settings = { timestampsInSnapshots: true };

firestrore.settings(settings);

const storageBucket = admin.storage().bucket(FIREBASE_STORAGE_BUCKET);
const auth = admin.auth();

module.exports = { functions, auth, firestrore, storageBucket, admin };
