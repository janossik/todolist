const isTwoNumber = (n: number): string => {
  if (n > 9) {
    return `${n}`;
  }
  return `0${n}`;
};

const getFullDate = () => {
  const now = new Date();
  return `${isTwoNumber(now.getDate())}.${isTwoNumber(
    now.getMonth()
  )}.${isTwoNumber(now.getUTCFullYear())}`;
};

export default getFullDate;
