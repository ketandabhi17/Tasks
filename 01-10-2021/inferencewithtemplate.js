var person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});
person.on("firstNameChanged", function (newName) {
    // (parameter) newName: string
    console.log("new name is " + newName.toUpperCase());
});
person.on("ageChanged", function (newAge) {
    // (parameter) newAge: number
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
});
