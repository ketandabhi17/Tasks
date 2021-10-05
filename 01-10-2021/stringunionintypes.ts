// const person = makeWatchedObject({
//     firstName: "Saoirse",
//     lastName: "Ronan",
//     age: 26,
//   });
   
//   person.on("firstNameChanged", (newValue) => {
//     console.log(`firstName was changed to ${newValue}!`);
//   });

//   type PropEventSource<Type> = {
//     on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
// };