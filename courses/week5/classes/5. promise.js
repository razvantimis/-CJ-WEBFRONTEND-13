async function getNumber() {
  return 1;
}

async function start() {
  const n1 = await getNumber();
  console.log(n1)
}
start();


