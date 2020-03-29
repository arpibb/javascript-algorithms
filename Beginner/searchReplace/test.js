const searchReplace = require('./index-START')

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('replaces the word old with young', () => {
  expect(searchReplace('This is an old woman','old','young')).toEqual('This is an young woman');
});

test('replaces the word woman with man', () => {
  expect(searchReplace('This is an old woman','woman','man')).toEqual('This is an old man');
});

test('replaces the uppercase word This to That', () => {
  expect(searchReplace('This is an old woman','This','that')).toEqual('That is an old woman');
});