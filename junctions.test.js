
const { returnTwo, greeting, add } = require('./functions')

test("this should return the integer 2", () => {
  expect(returnTwo()).toEqual(2)
})

test("this should return a greeting with a name variable", () => {
  expect(greeting('James')).toEqual("Hello, James.")
  expect(greeting('Jill')).toEqual("Hello, Jill.")

})

test("This should return the sum of two numbers", () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(5, 9)).toEqual(14);
})

