import users from "../data/users.json";

type User = {
    email: string;
    password: string;
};

export class UserData {
    public static getClient(): User {
        return {
            email: users.client.email,
            password: this.getRequiredEnv("CLIENT_PASSWORD"),
        };
    }

    public static getAdmin(): User {
        return {
            email: users.admin.email,
            password: this.getRequiredEnv("ADMIN_PASSWORD"),
        };
    }

    public static getInternal(): User {
        return {
            email: users.internal.email,
            password: this.getRequiredEnv("INTERNAL_PASSWORD"),
        };
    }

    private static getRequiredEnv(name: string): string {
        const value = process.env[name];

        if (!value) {
            throw new Error(
                `Required environment variable "${name}" is not set.`
            );
        }

        return value;
    }
}
