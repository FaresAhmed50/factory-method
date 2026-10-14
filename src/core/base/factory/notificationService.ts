import {Notification} from "../interfaces/notification";


export abstract class NotificationService {

    // the logic that needes to be replaced with a specific logic in the sub-classes
    protected abstract sendNotification() : Notification;



    // the fixed logic for a specific flow
    // for example here sending a notification whatever what type of notification it is.
    notify(massage : string) {

        const notification = this.sendNotification();

        notification.send(massage);

    }

}