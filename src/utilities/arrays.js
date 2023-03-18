export const findClosestValueIndex = (arr, num) => {
  let closestIndex = 0;
  let closestDiff = Math.abs(num - arr[closestIndex]);

  for (let i = 0; i < arr.length; i++) {
    const currDiff = Math.abs(num - arr[i]);
    if (currDiff < closestDiff) {
      closestIndex = i;
      closestDiff = currDiff;
    }
  }

  return [closestIndex, closestDiff];
};
