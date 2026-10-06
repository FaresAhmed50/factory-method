import {Notification} from "../../../core/interfaces/notification";

export class PushNotification implements Notification {

    send(massage: string) {
        console.log(`Sending Push notification: ${massage}`);
    }

}