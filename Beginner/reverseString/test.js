const reverseStringForLoop = require('./index-START')

test('reverseStringForLoop is a function', () => {
  expect(typeof reverseStringForLoop).toEqual('function');
});

test('reverses a string of text', () => {
  expect(reverseStringForLoop('aeiou')).toEqual('uoiea');
});

test('reverses a string containing numbers', () => {
  expect(reverseStringForLoop('123456789')).toEqual('987654321');
});

test('reverses a string containing mixed case characters', () => {
  expect(reverseStringForLoop('AsDfGhJkL')).toEqual('LkJhGfDsA');
});



