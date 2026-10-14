import {User} from "../base/builder/user-builder";


export interface UserBuilderInterface {
    setName(name: string): this;
    setEmail(email: string): this;
    setPhone(phone: string): this;
    setRole(role: string): this;
    setIsActive(isActive: boolean): this;
    setAvatar(avatar: string): this;
    setCity(city: string): this;
    build(): User;
    reset() : this;
}