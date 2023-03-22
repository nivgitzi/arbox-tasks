export const findClosestValueIndex = (arr, num) => {
  const availableIndex = arr.findIndex((value) => value !== null);

  if (availableIndex === -1) {
    return null;
  }

  let closestIndex = availableIndex;
  let closestDiff = Math.abs(num - arr[closestIndex]);

  for (let i = availableIndex; i < arr.length; i++) {
    if (arr[i] !== null) {
      const currDiff = Math.abs(num - arr[i]);
      if (currDiff < closestDiff) {
        closestIndex = i;
        closestDiff = currDiff;
      }
    }
  }

  return [closestIndex, closestDiff];
};
