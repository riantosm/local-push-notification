import PushNotification from 'react-native-push-notification';

class LocalPushController {
  onNotification = () => {
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('LOCAL NOTIFICATION ==>', notification);
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  };
}

export const LocalNotification = (title, subText, message, bigText) => {
  PushNotification.localNotification({
    autoCancel: true,
    bigText,
    subText,
    title,
    message,
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    color: '#05A5D1',
    smallIcon: 'ic_launcher_transparent',
    largeIcon: 'ic_launcher',
  });
};

// bigText: 'This is local notification demo in React Native app. Only shown, when expanded.',
// subText: 'Local Notification Demo',
// title: 'Local Notification Title',
// message: 'Expand me to see more',

export const localPushController = new LocalPushController();
