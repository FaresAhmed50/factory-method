# Design Patterns in TypeScript

Minimal TypeScript examples of creational design patterns:

- **Factory Method**, using notifications (Push and SMS) as the domain
- **Builder** (with a Director), using user creation as the domain

## Factory Method

The Factory Method pattern defines an interface for creating an object but lets subclasses decide which concrete class to instantiate. The base class contains the shared logic and depends only on an abstraction; each subclass supplies the concrete product.

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

To use SMS instead of Push, swap the service in `src/index.ts`:

```ts
import {SmsNotificationService} from "./fatures/sms-notification/service/sms-notifcation.service";

const service = new SmsNotificationService();
service.notify("hello world!");
```

### Adding a new notification type

1. Create a class that implements `Notification` (e.g. `EmailNotification`).
2. Create a service that extends `NotificationService` and returns your new class from `sendNotification()`.
3. Use the new service. `NotificationService` itself doesn't need to change.

## Builder

The Builder pattern constructs a complex object step by step. Instead of a constructor with many parameters, each property is set through a chainable method, and `build()` returns the finished object.

| Role | Class / Interface | File |
|------|-------------------|------|
| Product | `User` | `src/core/base/builder/user-builder.ts` |
| Builder interface | `UserBuilderInterface` | `src/core/interfaces/user-builder.interface.ts` |
| Concrete builder | `UserBuilder` | `src/core/base/builder/user-builder.ts` |
| Director | `UserDirector` | `src/core/directors/user-director.ts` |

A `User` has a name, email, phone, city, avatar, active flag and a `UserRole` (`Admin`, `Editor` or `Viewer`). `build()` returns the user frozen with `Object.freeze`, so it can't be modified afterwards.

### Using the builder directly

```ts
const user = new UserBuilder()
    .setName("fares")
    .setEmail("fares@example.com")
    .setPhone("123-456-7890")
    .setRole(UserRole.Admin)
    .setAvatar("avatar.jpg")
    .setIsActive(true)
    .setCity("alex")
    .build();
```

### Using the director

The director wraps common build sequences so callers don't repeat them. It exposes `createAdminUser`, `createEditorUser` and `createViewerUser`, which each set the matching role and mark the user as active.

```ts
const director = new UserDirector(new UserBuilder());

const admin = director.createAdminUser("fares", "fares@example.com", "123-456-7890", "avatar.jpg", "alex");
```

> **Note:** a `UserBuilder` holds a single `User` instance and freezes it on `build()`, so each builder (and each director) can only build one user. Create a new `UserBuilder` for every user you build.

## Project structure

```
src/
├── core/
│   ├── base/
│   │   ├── builder/user-builder.ts           # User product + UserBuilder
│   │   └── factory/notificationService.ts    # abstract notification creator
│   ├── directors/user-director.ts            # UserDirector
│   └── interfaces/
│       ├── notification.ts                   # notification product interface
│       └── user-builder.interface.ts         # builder interface
├── fatures/
│   ├── push-up-notification/
│   │   ├── interface/push-notification.ts
│   │   └── service/pushup-notification.service.ts
│   └── sms-notification/
│       ├── interface/sms-notification.ts
│       └── service/sms-notifcation.service.ts
└── index.ts                                  # entry point / demo
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
fares
```
