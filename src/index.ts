import {pushUpNotificationService} from "./fatures/push-up-notification/service/pushup-notification.service";


const smsNotification = new pushUpNotificationService();

smsNotification.notify("hello world!");