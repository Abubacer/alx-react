import { fromJS } from 'immutable';

// returns the value of the object at the defined path
export default function accessImmutableObject (object, array) {
  const immutableMap = fromJS(object);
  return immutableMap.getIn(array, undefined);
}
