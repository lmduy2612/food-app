import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCQ5Cak9gAV8X-B9QvBLt88pgjKgi8BolE',
  authDomain: 'sample-965ef.firebaseapp.com',
  databaseURL: 'https://sample-965ef-default-rtdb.firebaseio.com',
  projectId: 'sample-965ef',
  storageBucket: 'sample-965ef.appspot.com',
  messagingSenderId: '795851043176',
  appId: '1:795851043176:web:c7e001078da23d898c66dd',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};
