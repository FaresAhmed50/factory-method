import {Notification} from "../../../core/interfaces/notification";

export class SmsNotification implements Notification {

    send(massage: string): void {
        console.log(`Sending SMS notification: ${massage}`);
    }

}