type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

function swim()
{
  console.log('this animal can swim');
}
function fly()
{
  console.log('this animal can fly');
}


