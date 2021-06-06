import useFirestore from './useFirestore';
import useFirestoreQuery from './useFirestoreQuery';

export default function useFirestoreGetOne(config, collection, id) {
  const firestore = useFirestore(config);
  return useFirestoreQuery(firestore?.collection(collection).doc(id));
}
