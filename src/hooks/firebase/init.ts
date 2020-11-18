import { useEffect } from 'react';
import firebase from 'firebase/app';

import 'firebase/auth';

import { firebaseConfig } from 'config/firebaseConfig';

export const useFirebase = () => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);
};
