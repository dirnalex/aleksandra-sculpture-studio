export const generateArrayFillingWith = ({size, generateFunc}) => Array(size).fill(null).map(() => generateFunc());