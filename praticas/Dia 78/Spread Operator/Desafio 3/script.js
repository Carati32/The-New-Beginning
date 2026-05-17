function somarTodos(...nums) {
  return  nums.reduce((acc, number) => acc += number, 0)
}

console.log(somarTodos(5, 5, 5, 5))