class Users {
    constructor(users) {
        this.usersMap = new Map();

        users.forEach(user => {
            this.usersMap.set(user.id, user);
        })
    }

    getUserById(id) {
        if(!(this.usersMap.get(id))) {
            return null;
        }

        console.log(this.usersMap.get(id));
        return this.usersMap.get(id);
    }

    addUsers(user) {
        user.forEach(user => {
            this.usersMap.set(user.id, user);
        })
    }
}

const mappedUser = new Users([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
]);
mappedUser.getUserById(1); // Output: { id: 1, name: "Alice", email: "alice@example.com" };
mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);
mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);
mappedUser.getUserById(3); // Output: { id: 3, name: "Ann", email: "ann@example.com" }