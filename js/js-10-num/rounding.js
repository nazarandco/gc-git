const multiRound = (float) => {
  const floats = [];

  floats.push(Math.floor(float * 100) / 100);
  floats.push(Math.round(float * 100) / 100);
  floats.push(Math.ceil(float * 100) / 100);
  floats.push(Math.trunc(float * 100) / 100);
  floats.push(+float.toFixed(2));

  return floats;
};
