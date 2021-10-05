function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function swim() {
    console.log('this animal can swim');
}
function fly() {
    console.log('this animal can fly');
}
{
    console.log('this animal can fly');
}
