type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
           
// type ShoutyGreeting = "HELLO, WORLD"
 
type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">
