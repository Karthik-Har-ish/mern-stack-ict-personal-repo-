//arrays
// UNSHIFT - ADD ELEMENT TO FIRST


let fruits = ["apple","orange","grapes",23];
fruits.push("papaya");
fruits.unshift("grapes");
console.log(fruits);

// array of objects

let people = [
    {
        fname:"Mike",
        lname:"Ross"
    },
    {
        fname:"Harvey",
        lname:"Specter"
    },
    {
        fname:"Louis",
        lname:"Litt"
    }
];

console.log(`The people in this law firm are ${people[0].fname} ${people[0].lname}, ${people[1].fname} ${people[1].lname}, ${people[2].fname} ${people[2].lname}`);


// functions 

function add(a,b){
    return a+b
}

console.log(add(a,Number(b)))

function fullName(firstName, lastName){
    if (typeof(firstName)!= typeof("") ||  typeof(lastName) != typeof("")){
        return "The input is not strings!"
    }

    return firstName +" "+ lastName
}

console.log(fullName(people[0].fname,people[0].lname))
