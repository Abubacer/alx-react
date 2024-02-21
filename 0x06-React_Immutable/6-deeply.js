import { Map } from 'immutable';

// merges two Immutable Maps deeply and returns a List containing the values of the two pages
export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}

/* Example:
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      }
    }
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      }
    }
  },
};

mergeDeeplyElements(page1, page2).toJS();

// It should return:
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      },
      2: {
        uid: 134,
      }
    }
  },
};
*/
