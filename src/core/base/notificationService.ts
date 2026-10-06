import {Notification} from "../interfaces/notification";


export abstract class NotificationService {

    protected abstract sendNotification() : Notification;



    notify(massage : string) {

        const notification = this.sendNotification();

        notification.send(massage);

    }

}