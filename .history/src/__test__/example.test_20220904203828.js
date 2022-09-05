const sumPositiveNumbers = (number1, number2) => {
  if (number1 < 0 || number2 < 0) {
    throw new Error("One of the numers is negative");
  }
  return number1 + number2;
};

describe("when the arguments passed are positive numbers", () => {
  test("should return the right answer", () => {
    expect(sumPositiveNumbers(4, 5)).toBe(9);
  });
});

describe("when on of the arguments is a negative number", () => {
  test("should throw an error", () => {
    let error;
    try {
      sumPositiveNumbers(-1, 5);
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
    expect(error.message).toBe("One of the numers is negative");
  });
});
