function isFish(pet: any | any): pet is any {
    return (pet as any).swim !== undefined;
  }
  
  console.log(isFish("dog"));