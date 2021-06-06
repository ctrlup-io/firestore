import useFirestore from './useFirestore';
import useFirestoreQuery from './useFirestoreQuery';

export default function useFirestoreGetList(config, collection) {
  const firestore = useFirestore(config);
  return useFirestoreQuery(firestore?.collection(collection));
}
