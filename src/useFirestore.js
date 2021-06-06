import { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export default function useFirestore(config) {
  const [firestore, setFirestore] = useState(null);
  useEffect(() => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
      firebase.auth();
      setFirestore(firebase.firestore());
    }
    return () => {
      setFirestore(null);
    };
  }, [config]);
  return firestore;
}
