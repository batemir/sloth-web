import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
};

export default function initFirebase() {
    if (!firebase.app.length) {
        firebase.initializeApp(config);
    }
};