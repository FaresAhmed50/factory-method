# Factory Method — Notification Example

A minimal TypeScript example of the **Factory Method** design pattern, using notifications (Push and SMS) as the domain.

## The pattern

The Factory Method pattern defines an interface for creating an object but lets subclasses decide which concrete class to instantiate. The base class contains the shared logic and depends only on an abstraction; each subclass supplies the concrete product.

In this project:

| Role | Class / Interface | File |
|------|-------------------|------|
| Product | `Notification` | `src/core/interfaces/notification.ts` |
| Creator | `NotificationService` (abstract) | `src/core/base/factory/notificationService.ts` |
| Concrete product | `PushNotification` | `src/fatures/push-up-notification/interface/push-notification.ts` |
| Concrete product | `SmsNotification` | `src/fatures/sms-notification/interface/sms-notification.ts` |
| Concrete creator | `pushUpNotificationService` | `src/fatures/push-up-notification/service/pushup-notification.service.ts` |
| Concrete creator | `SmsNotificationService` | `src/fatures/sms-notification/service/sms-notifcation.service.ts` |

`NotificationService.notify()` calls the abstract factory method `sendNotification()` to get a `Notification`, then sends the message through it. It never knows which concrete notification type it is working with.

```ts
export abstract class NotificationService {
    protected abstract sendNotification(): Notification;

    notify(massage: string) {
        const notification = this.sendNotification();
        notification.send(massage);
    }
}
```

## Project structure

```
src/
├── core/
│   ├── base/notificationService.ts      # abstract creator
│   └── interfaces/notification.ts       # product interface
├── fatures/
│   ├── push-up-notification/
│   │   ├── interface/push-notification.ts
│   │   └── service/pushup-notification.service.ts
│   └── sms-notification/
│       ├── interface/sms-notification.ts
│       └── service/sms-notifcation.service.ts
└── index.ts                             # entry point / demo
```

## Getting started

Requirements: Node.js and npm.

```bash
npm install
npm run build     # compiles TypeScript into dist/
npm run run:dev   # runs dist/src/index.js
```

Expected output:

```
Sending Push notification: hello world!
```

To use SMS instead, swap the service in `src/index.ts`:

```ts
import {SmsNotificationService} from "./fatures/sms-notification/service/sms-notifcation.service";

const service = new SmsNotificationService();
service.notify("hello world!");
```

## Adding a new notification type

1. Create a class that implements `Notification` (e.g. `EmailNotification`).
2. Create a service that extends `NotificationService` and returns your new class from `sendNotification()`.
3. Use the new service. `NotificationService` itself doesn't need to change.
