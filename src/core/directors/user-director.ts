import {UserBuilder, UserRole} from "../base/builder/user-builder";


export class UserDirector {

    private readonly builder: UserBuilder;

    constructor(Builder : UserBuilder) {
        this.builder = Builder;
    }



    createAdminUser(name: string, email: string, phone: string, avatar: string, city: string) {
        return this.builder
            .setName(name)
            .setEmail(email)
            .setPhone(phone)
            .setRole(UserRole.Admin)
            .setAvatar(avatar)
            .setIsActive(true)
            .setCity(city)
            .build();
    }


    createViewerUser(name: string, email: string, phone: string, avatar: string, city: string) {
        return this.builder
            .setName(name)
            .setEmail(email)
            .setPhone(phone)
            .setRole(UserRole.Viewer)
            .setAvatar(avatar)
            .setIsActive(true)
            .setCity(city)
            .build();
    }


    createEditorUser(name: string, email: string, phone: string, avatar: string, city: string) {
        return this.builder
            .setName(name)
            .setEmail(email)
            .setPhone(phone)
            .setRole(UserRole.Editor)
            .setAvatar(avatar)
            .setIsActive(true)
            .setCity(city)
            .build();
    }



}