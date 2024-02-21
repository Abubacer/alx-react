import { is } from 'immutable';

// returns true if the Maps are equal
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

/* Example:
const map1 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);
const map2 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);

// Should return true
areMapsEqual(map1, map2);
*/
