function squarePromise (promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((data) => {
        if ((typeof(data) === "number") || (typeof(data) === "string" && !isNaN(+data))) {
          resolve(data * data);
        }
        else {
          reject(`Cannot convert '${data}' to a number!`);
        }
      })
      .catch(err => reject(err))
  })
}

const prom1 = new Promise((res) => res(6));
const prom2 = new Promise((res) => res("4"));
const prom3 = new Promise((res) => res("adw"));
const prom4 = new Promise((res, rej) => rej(true));

const squareProm = squarePromise(prom3);

squareProm
  .then((value) => {
    console.log(value);
  }).catch((err) => {
    console.log(err);
  });