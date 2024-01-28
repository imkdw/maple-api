export const queryArrayToString = (queries: { [key: string]: string | Date }) => {
  const queryArray = Object.entries(queries);
  const result = queryArray.map((query) => query.join("=")).join("&");

  return result;
};
