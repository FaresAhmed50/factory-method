import {pushUpNotificationService} from "./fatures/push-up-notification/service/pushup-notification.service";
import {UserBuilder, UserRole} from "./core/base/builder/user-builder";
import {UserDirector} from "./core/directors/user-director";


const smsNotification = new pushUpNotificationService();

smsNotification.notify("hello world!");


//  this is the regular way without director structure
const user = new UserBuilder()
    .setName("fares")
    .setEmail("fares@example.com")
    .setPhone("123-456-7890")
    .setRole(UserRole.Admin)
    .setAvatar("avatar.jpg")
    .setIsActive(true)
    .setCity("alex").build();


console.log(user.name);


// using the director way to create a user
const Admin = new UserDirector(new UserBuilder());

Admin.createAdminUser("fares", "fares@example.com", "123-456-7890", "avatar.jpg", "alex");