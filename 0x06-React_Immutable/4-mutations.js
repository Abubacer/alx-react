import { Map } from 'immutable';

export const map = Map({
     1: 'Liam',
     2: 'Noah',
     3: 'Elijah',
     4: 'Oliver',
     5: 'Jacob',
     6: 'Lucas',
});
// Apply multiple mutations to the initial map
export const map2 = map.withMutations((mapElement) => {
    mapElement.update(2, 'Benjamin').update(4, 'Oliver');
});
