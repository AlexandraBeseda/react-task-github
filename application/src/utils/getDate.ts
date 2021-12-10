export const getDate = () => {
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
