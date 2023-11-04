console.log(1)
setTimeout(() => {
    console.log(2)
}, 20)
Promise.resolve()
    .then(() => {
        console.log(3)
        return 1
    })
    .catch(e => console.log(e, 4))
    .finally(res => console.log(res, 5))
    .then((res) => console.log(res))
console.log(6)

    /**
        console a anum 1
        heto setTimeout - function spasuma, minchev Promise lini
        Promisum then a ashxatum console anum 3 
        qani vor resolve - a arac catch@ chi ashxatum ancnum enq finally
        finally method@ resolve linelu paragayum misht return a anum undefined dra hamar
        console anum undefined, 5
        naxord then@ return anum 1 => 1

        1
        6
        3
        undefined, 5
        1
        2
    */