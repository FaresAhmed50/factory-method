import {NotificationService} from "../../../core/base/factory/notificationService";
import {Notification} from "../../../core/interfaces/notification";
import {PushNotification} from "../interface/push-notification";


export class pushUpNotificationService extends NotificationService {

    protected  sendNotification(): Notification {
        return new PushNotification();
    }

}