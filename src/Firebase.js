import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6g0_qRUqyouUX1Ku7rq8egCXd94Qb8p0",
    authDomain: "projeto-ventura.firebaseapp.com",
    databaseURL: "https://projeto-ventura.firebaseio.com",
    projectId: "projeto-ventura",
    storageBucket: "projeto-ventura.appspot.com",
    messagingSenderId: "72297018439",
    appId: "1:72297018439:web:b1501d7a2a9bdc6def6d62",
    measurementId: "G-7JPK1C387C"
};
// Initialize Firebase
const firebaseConf = firebase.initializeApp(firebaseConfig);

export default firebaseConf;
