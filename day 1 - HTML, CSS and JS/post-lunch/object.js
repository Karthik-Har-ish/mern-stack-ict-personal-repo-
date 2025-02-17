let person = {
    fname:"John",
    lname:"Doe",
    rollNo:100,
    address:{
        street:"Alenghat Lane",
        town:"Cheroor",
        city:"Thrissur",
        state:"Kerala"
    }
};

console.log(`We have ${person.fname} ${person.lname} with roll number ${person.rollNo} who lives in ${person.address.city}`);