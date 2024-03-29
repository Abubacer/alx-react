import { fromJS } from 'immutable';

// accepts object as a parameter and converts it into an immutable Map
export default function getImmutableObject(object) {
  return fromJS(object);
}

/* Usage example:
const object = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const immutableMap = getImmutableObject(object);
console.log(immutableMap);
*/
