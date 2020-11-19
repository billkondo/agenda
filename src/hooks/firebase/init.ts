import { useEffect } from 'react';
import firebase from 'firebase/app';

import 'firebase/auth';

import { firebaseConfig } from 'config/firebaseConfig';

let initialized = false;

export const useFirebase = () => {
  useEffect(() => {
    if (!initialized) {
      firebase.initializeApp(firebaseConfig);
      initialized = true;
    }
  }, []);
};
