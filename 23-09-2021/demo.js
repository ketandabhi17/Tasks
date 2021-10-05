var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
        console.log(name);
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
