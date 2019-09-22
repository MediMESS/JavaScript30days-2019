// as long as it's not an object then it'll be passed by value. otherwise by reference


// copy array
const team1 = players.slice();
const team2 = [].concat(players);
const team3 = [...players];
const team4 = Array.from(players);

// copy objects, shallow copy, only one level
const captain1 = Object.assign({}, person);
const captain2 = Object.assign({}, person, {number:99});
const captain3 = {...person};

// deep copy
const captain4 = JSON.parse(JSON.stringify(person));
