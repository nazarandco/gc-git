//put your code here

const parseUser = (json) => {
    try {
        return JSON.parse(json);
    } catch {
        return null;
    }
};

console.log(parseUser('{"name":"Tom"}'));
console.log(parseUser('{name:Tom}'));
