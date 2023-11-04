Promise.resolve()
    .then(data => {
        throw new Error('Api Error');
        return 1;
    })
    .then(data => console.log('ok'))
    .catch(error => {
        console.log(error.message);
        return "2";
    })
    .then(data => {
        console.log(data);
    })

/**
 * Skzbic mtnuma .then(data => {
        throw new Error('Api Error');
        return 1;
    }) return chi anum, qani vor  throw new Error kod@ kangncnuma 
    .then(data => console.log('ok')) chi anum, qani vor naxord then error kar
    ashxatacnuma catch@ console.log a anum 'Api Error' string@
    hajord then um console.log a anum 2

    'Api Error'
    '2'
 */