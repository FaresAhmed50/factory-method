import {NotificationService} from "../../../core/base/notificationService";
import {Notification} from "../../../core/interfaces/notification";
import {SmsNotification} from "../interface/sms-notification";

export class SmsNotificationService extends NotificationService {

    protected sendNotification(): Notification {
        return new SmsNotification();
    }

}