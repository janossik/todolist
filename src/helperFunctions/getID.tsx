const getID = (): string => {
  return `${Math.round(Math.random() * 10000000).toString(32)}${Math.round(
    Math.random() * 10000000
  )}`;
};

export default getID;
