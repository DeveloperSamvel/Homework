// գիտեմ, որ կոդը լավը չի։ Բայց էսա
const arr = [52, 11, 9, 34, 56, 130, 45, 67];

const splice = (arr, start = 0, deleteCount = 0, ...items) => {
  let newArr = [];
  let deletedItems = [];
  let length = arr.length - deleteCount + items.length;
  let indexSelectedElement = 0;

  if (start < -arr.length) {
    start = 0;
  } else if (start < 0 && start >= -arr.length) {
    start += arr.length;
  }

  if (deleteCount > arr.length) {
    deleteCount = arr.length;
  } else if (deleteCount < 0) {
    deleteCount = 0;
  }

  for (let i = 0; i < length; i++) {
    if (
      i >= start &&
      deleteCount - items.length !== 0 &&
      indexSelectedElement !== i + deleteCount - items.length
    ) {
      indexSelectedElement = i + deleteCount - items.length;
    }

    if (i >= start && i <= start + deleteCount - 1) {
      deletedItems[i - start] = arr[i];
    }

    if (i >= start && i <= start + items.length - 1) {
      newArr[i] = items[i - start];
    } else {
      newArr[i] = arr[indexSelectedElement];
    }
    indexSelectedElement++;
  }

  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    arr[i] = element;
  }

  if (length !== 0) {
    arr.length = newArr.length;
  }

  return deletedItems;
};

let start = 1;
let deleteCount = 1;
let item1 = 43;
let item2 = 58;
let item3 = 61;

console.log(splice(arr, start, deleteCount, item1, item2, item3));
