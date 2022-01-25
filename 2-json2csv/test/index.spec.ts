import json2csv from '../src';

describe('Test change json', () => {
  test('convert base to csv', () => {
    const csvData = json2csv('[{"name":"Marcon"},{"name":"Willian"}]');

    expect(csvData).toBe('name\nMarcon\nWillian');
  });

  test('convert irregular object to csv', () => {
    const csvData = json2csv(
      '[{"name":"Marcon", "email": "oi@marcon.run"},{"name":"Willian", "age": 23}]'
    );

    expect(csvData).toBe('name,email,age\nMarcon,oi@marcon.run,\nWillian,,23');
  });

  test('get error when is invalid json', () => {
    const wrongJson = '[{"name":"Marcon"}{"name":"Willian"}]';
    expect(() => {
      json2csv(wrongJson);
    }).toThrowError();
  });

  test('get error when not is a json of array', () => {
    const wrongJson = '{"name":"Marcon"}';
    expect(() => {
      json2csv(wrongJson);
    }).toThrowError();
  });
});
