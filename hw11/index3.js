function getData2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve(data.toUpperCase());
            }
            else {
                reject(data);
            }
        }, 500);
    })
}

getData2("arb")
  .then((value) => {
    console.log(value);
  }).catch((err) => {
    console.log(err);
  });