Promise.resolve()
  .then(() => console.log(1))
  .catch(() => console.log(3))
  .then(() => { console.log(2); throw new Error(); })
  .then(() => console.log(4))
  .then(() => console.log(4))
Promise.resolve()
  .then(() => console.log(11))
  .then(() => { console.log(12); throw new Error(); })
  .catch(() => console.log(13))
  .catch(() => console.log(14))

/**
  Promise.resolve() method@ kod@ ashxatacnuma miayn then@ dranic hetevutyun catch - @ chi ashxatacnelu,
  qani der error chi chi arajacel

  console anum 1
  isk then i mej throw ic heto then@ kangneluya u ashxatacneluya catch@

  1
  11
  12
  2
  13
 */