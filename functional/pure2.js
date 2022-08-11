const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
}

const person = {
    name: 'Bobo'
}

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});


// pure 
const createPersonWithAge2 = (age, person) => {
    return { ...person, age };
  };
  
  const person2 = {
    name: 'Bobo2'
  };
  
  const newPerson2 = createPersonWithAge2(18, person2);
  
  console.log({
    person2,
    newPerson2
  });

  console.log(typeof(person2))