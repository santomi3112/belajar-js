let visitsCountMap = new Map();

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count+1);
}

let tomi = {name: "Tomi"};
countUser(tomi);

tomi = null;

setTimeout(function() {
    console.log(visitsCountMap);
},10000)