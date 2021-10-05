interface Home {
    readonly resident: { name: string; age: number };
  }
   
  function visitForBirthday(home: Home) {
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
  }
   
