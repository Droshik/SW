import type { IPerson, IPersonsList, ISpecie } from './schema';

export const fetchJSON_get = async (link: string): Promise<any> => {
  return fetch(link).then((response) => {
    return response.json();
  });
};

export const getPersonsList = async (page = 1): Promise<IPersonsList> => {
  return fetch(`https://swapi.py4e.com/api/people/?page=${page}`).then((response) => {
    return response.json();
  });
};

export const getSinglePersone = async (id: number): Promise<IPerson> => {
  return fetch(`https://swapi.py4e.com/api/people/${id}`).then((response) => {
    return response.json();
  });
};

export const getSpecieInfo = async (link: string): Promise<ISpecie> => {
  return fetchJSON_get(link);
};
