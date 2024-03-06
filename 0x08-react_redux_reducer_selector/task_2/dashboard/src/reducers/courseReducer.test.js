import courseReducer from './courseReducer';
import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from '../actions/courseActionTypes'

describe('test courseReducer', () => {
    it('default state returns an empty arrray', () => {
        const state = courseReducer(undefined, {});
        expect(state).toEqual([]);
    });

    it('checks if FETCH_COURSE_SUCCESS returns the data passed', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                {
                    id: 1,
                    name: "ES6",
                    credit: 60
                },
                {
                    id: 2,
                    name: "Webpack",
                    credit: 20
                },
                {
                    id: 3,
                    name: "React",
                    credit: 40
                }
            ]
        };

        const expectedData = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        const state = courseReducer(undefined, action);
        expect(state).toEqual(expectedData);
    });

    it('checks if SELECT_COURSE returns the data with the right item updated', () => {
        const initialState = [
            {
                id: 1,
                name: 'ES6',
                isSelected: false,
                credit: 60,
            },
            {
                id: 2,
                name: 'Webpack',
                isSelected: false,
                credit: 20,
            },
            {
                id: 3,
                name: 'React',
                isSelected: false,
                credit: 40,
            },
        ];

        const action = {
            type: SELECT_COURSE,
            index: 2
        };

        const expectedData = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: true,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        const state = courseReducer(initialState, action);
        expect(state).toEqual(expectedData);
    });

    it('checks if UNSELECT_COURSE returns the data with the right item updated', () => {
        const initialState = [
            {
                id: 1,
                name: 'ES6',
                isSelected: false,
                credit: 60,
            },
            {
                id: 2,
                name: 'Webpack',
                isSelected: false,
                credit: 20,
            },
            {
                id: 3,
                name: 'React',
                isSelected: false,
                credit: 40,
            },
        ];

        const action = {
            type: UNSELECT_COURSE,
            index: 2
        };

        const expectedData = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        const state = courseReducer(initialState, action);
        expect(state).toEqual(expectedData);
    });
});
