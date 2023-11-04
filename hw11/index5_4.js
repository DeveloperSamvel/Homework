let a = 5;
setTimeout(() => {
    console.log(a);
    a = 10;
}, 0);
let p = new Promise((resolve, reject) => {
    console.log(a);
    a = 25;
    resolve();
});
p.then(res => {
    console.log('final result ', res)
});
console.log(a);

/**
    a
    setTimeout@ spasuma
    new Promise @ ashxatacnuma console anum 5; a - i arjeq@ talisa 25; resolve - anum,
    p.then @ spasuma
    console a anum 25 14 toghum
    qani vor resolve arel aranc argumentneri then @ undefined stanum, console anum final result undefined
    ev amenaverjum setTimeout ashxatacnuma ev console anum 25 a-i arjeqn el 10 sarqum



    5
    25
    final result undefined
    25
*/