export const getRandom = (arr: number[], count: number, unique: boolean) => {
  const uniqueObjHelper: any = {};
  const randomedArr: number[] = [];

  do {
    const randIndex = randomInteger(0, arr.length - 1);

    if (unique && uniqueObjHelper[arr[randIndex]] != null) {
      break;
    }

    randomedArr.push(arr[randIndex]);
    uniqueObjHelper[arr[randIndex]] = true;
  } while (randomedArr.length != count);

  return randomedArr;
};

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
