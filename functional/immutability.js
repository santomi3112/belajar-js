const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);


// pembetulan
const user2 = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName2 = (newLastName, user2) => {
    return { ...user2, lastName: newLastName }
}

const newUser2 = createUserWithNewLastName2('Potter', user2);

console.log(newUser2);