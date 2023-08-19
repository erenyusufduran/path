async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  const [res, _res] = await Promise.all([promise1, promise2]);
  return res + _res;
}