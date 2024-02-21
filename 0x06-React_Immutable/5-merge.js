import { List, Map } from 'immutable';

// returns a List containing the values of the two pages
export function concatElements(page1, page2) {
    return List(page1).concat(List(page2));
}

// returns a List containing the values of the two pages
export function mergeElements(page1, page2) {
    return Map(page1).merge(Map(page2));
}
