export const API_ENDPOINT = 'https://driftquiz-backend.duhbhavesh.repl.co';

export const isValidPassword = (password: string): boolean => {
   const passowrdRegex = new RegExp('[0-9]+');
   return password.length > 6 && passowrdRegex.test(password);
};
