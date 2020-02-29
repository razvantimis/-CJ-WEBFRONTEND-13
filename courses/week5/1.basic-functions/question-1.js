
// Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1()
{
  return {
      bar: "hello"
  };
}
console.log(foo1())
console.log(foo2())
function foo2()
{
  return
  {
      bar: "hello"
  };
}