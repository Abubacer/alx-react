import { List } from 'immutable';
// accepts an array as parameter and converts it into an immutable List
export function getListObject(array) {
  return List(array);
}
// appends the (element) string to the list and return the list
export function addElementToList(list, element) {
  return list.push(element);
}
