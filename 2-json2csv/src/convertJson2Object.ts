export interface IObjectResponse {
  [key: string]: string | number | boolean;
}

function convertJson2Object(json: string): IObjectResponse[] | null {
  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
}

export { convertJson2Object };
