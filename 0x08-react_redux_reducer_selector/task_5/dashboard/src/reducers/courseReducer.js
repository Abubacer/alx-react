import { Map } from 'immutable';
import {
    SELECT_COURSE,
    UNSELECT_COURSE,
    FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';
import coursesNormalizer from '../utils/coursesNormalizer';

const initialState = Map({
    courses: Map(),
});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return state.merge(Map(coursesNormalizer(action.data)));

        case SELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSelected'], true);

        case UNSELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSelected'], false);

        default:
            return state;
    }
};

export default courseReducer; 
