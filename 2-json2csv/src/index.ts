import { convertJson2Object, IObjectResponse } from './convertJson2Object';

function json2csv(json: string) {
  const objet = convertJson2Object(json);

  if (!objet) {
    throw new Error('Object json is invalid');
  }

  if (!Array.isArray(objet)) {
    throw new Error('Object not is a array');
  }

  const labels = Object.keys(objet[1]);

  const values = objet.reduce((accumulator, item) => {
    const valuesLine = Object.values(item).join(',');
    accumulator.push(valuesLine);
    return accumulator;
  }, [] as string[]);

  return [Object.values(labels).join(','), ...values].join('\n');
}

export { json2csv };
export default json2csv;
