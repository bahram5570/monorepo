import cookies from 'js-cookie';

export const getCookie2 = (name: string) => {
  return cookies.get(name);
};
