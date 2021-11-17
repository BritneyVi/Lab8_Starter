// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//numbers

test('Checking a valid phone number', () => {
    expect(functions.isPhoneNumber('714-606-2833')).toBe(true);
});

test('Checking a valid phone number', () => {
    expect(functions.isPhoneNumber('626-847-8736')).toBe(true);
});

test('Checking a not valid phone number', () => {
    expect(functions.isPhoneNumber('8783728273828382282')).toBe(false);
});

test('Checking a not valid phone number', () => {
    expect(functions.isPhoneNumber('thesearenotnumbers')).toBe(false);
});

//emails

test('Checking a valid email', () => {
    expect(functions.isEmail('bvi@ucsd.edu')).toBe(true);
});

test('Checking a valid email', () => {
    expect(functions.isEmail('realemail@gmail.com')).toBe(true);
});

test('Checking a not valid email', () => {
    expect(functions.isEmail('notanemail.com')).toBe(false);
});

test('Checking a not valid email', () => {
    expect(functions.isEmail('nope@yahoo')).toBe(false);
});

//passwords

test('Checking a valid password', () => {
    expect(functions.isStrongPassword('ValidWords')).toBe(true);
});

test('Checking a valid password', () => {
    expect(functions.isStrongPassword('Numbers_2')).toBe(true);
});

test('Checking a not valid password', () => {
    expect(functions.isStrongPassword('~~NotThisTho~~')).toBe(false);
});

test('Checking a not valid password', () => {
    expect(functions.isStrongPassword('___Letter1st__')).toBe(false);
});

//date? please haha 

test('Checking a valid date', () => {
    expect(functions.isDate('6/16/2000')).toBe(true);
});

test('Checking a valid date', () => {
    expect(functions.isDate('12/25/2021')).toBe(true);
});

test('Checking a not valid date', () => {
    expect(functions.isDate('98239/4/2213432')).toBe(false);
});

test('Checking a not valid date', () => {
    expect(functions.isDate('uwu / 45 / 96')).toBe(false);
});

//hex 
test('Checking a valid hex', () => {
    expect(functions.isHexColor('#B1A211')).toBe(true);
});

test('Checking a valid hex', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Checking a not valid hex', () => {
    expect(functions.isHexColor('ZZ9313')).toBe(false);
});

test('Checking a not valid hex', () => {
    expect(functions.isHexColor('8237467832')).toBe(false);
});