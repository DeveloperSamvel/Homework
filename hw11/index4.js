// kisata
function mapPromise(promise, fn_transformer) {
    return new Promise((resolve, reject) => {
      promise
        .then((value) => {
          resolve(fn_transformer(value));
        })
        .catch((err) => {
          reject(err);
        })
    });
}
  
  
const myPromise = new Promise((resolve, reject) => {
    reject("err")
});
const timesTwo = (val) => {
    if (val === 3) {
        throw new Error("val !== 3");
    }
    
    return val * 2;
};

mapPromise(myPromise, timesTwo)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  
const myPromise2 = new Promise((resolve, reject) => {
    resolve(2)
});
mapPromise(myPromise, timesTwo)
    .then(result => console.log(result))
    .catch(err => console.log(err))