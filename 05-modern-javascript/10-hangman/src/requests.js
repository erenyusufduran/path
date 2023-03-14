export const getPuzzle = async (length) => {
  const response = await fetch(
    `https://random-word-api.herokuapp.com/word?length=${length}`,
    {}
  );
  if (response.status === 200) {
    const data = await response.json();
    return data[0];
  } else {
    throw new Error("Unable to get puzzle.");
  }
};
