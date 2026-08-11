import users from "../data/users.json";

export class UserData {
    public static getClient() {
        return users.client; // return only client data
    }

    public static getAdmin() {
        return users.admin; // return only admin data
    }
    public static getInternal(){
        return users.internal; // return only internal data
    }
}