export const concatMultipleStrings = (input: Array<string>): string => {
  let output: string = ''
  input.forEach(item => {
    output = `${item}, ${output}`
  })
  return output.slice(0, -2)
}

export const generateRandomGuid = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};
