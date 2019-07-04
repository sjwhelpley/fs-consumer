export class Users {
    name: String;
    lastName: String;
    email: String;
    password: String;

    constructor(email:string, password:string, name?:string, lastName?:string) {
        this.name = name || "";
        this.lastName = lastName || "";
        this.email = email;
        this.password = password;
    }
}