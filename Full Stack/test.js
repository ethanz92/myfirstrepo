const user = {};
user[name] = "John";
user[surname] = "Smith";
user[name] = "Pete";
delete user.name;

const isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
}