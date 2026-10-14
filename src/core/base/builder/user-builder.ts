import {UserBuilderInterface} from "../../interfaces/user-builder.interface";

export enum UserRole {
    Admin = 'admin',
    Editor = 'editor',
    Viewer = 'viewer'
}


export class User {

    city: string;
    name: string;
    email: string;
    phone: string;
    role: UserRole;
    isActive: boolean;
    avatar: string;

    constructor() {
        this.name     = '';
        this.email    = '';
        this.phone    = '';
        this.role     = UserRole.Viewer;
        this.isActive = true;
        this.avatar   = '';
        this.city     = '';
    }
}


export class UserBuilder implements UserBuilderInterface{

    private readonly user : User;

    constructor() {
        this.user = new User();
    }

    setName(name: string): this {
        this.user.name = name;
        return this;
    }

    setEmail(email: string): this {
        this.user.email = email;
        return this;
    }

    setPhone(phone: string): this {
        this.user.phone = phone;
        return this;
    }

    setCity(city: string) {
        this.user.city = city;
        return this
    }

    setRole(role: UserRole): this {
        this.user.role = role satisfies UserRole;
        return this;
    }

    setAvatar(avatar: string): this {
        this.user.avatar = avatar;
        return this;
    }

    setIsActive(isActive: boolean): this {
        this.user.isActive = isActive;
        return this;
    }

    build(): User {
        return Object.freeze(this.user);
    }
}