import React from 'react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

// check if the function getFullYear returns the correct year
test('getFullYear returns correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
})

// check if getFooterCopy returns the correct str when the arg is true or false
test('getFooter returns correct str if false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
})

test('getFooter returns correct str if true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
})

// check that getLatestNotification returns correct str
test('getLatestNotification returns correct html str', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
})
