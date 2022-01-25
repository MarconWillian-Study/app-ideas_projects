import { convertJson2Object } from './convertJson2Object';

function json2csv(json: string) {
  const objet = convertJson2Object(json);

  if (!objet) {
    throw new Error('Object json is invalid');
  }

  if (!Array.isArray(objet)) {
    throw new Error('Object not is a array');
  }

  const labels = [] as string[];

  objet.forEach(item => {
    Object.keys(item).forEach(key => {
      if (!labels.includes(key)) {
        labels.push(key);
      }
    });
  });

  const lines = [] as string[];

  objet.forEach(item => {
    const line = [] as string[];
    labels.forEach(key => {
      if (item[key]) {
        line.push(String(item[key]));
      } else {
        line.push('');
      }
    });
    lines.push(line.join(','));
  });

  return [labels.join(','), ...lines].join('\n');
}

export { json2csv };
export default json2csv;
