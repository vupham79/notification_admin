var admin = require("firebase-admin");

var serviceAccount = require("./firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-notification-3d161.firebaseio.com"
});

var payload = {
  notification: {
    title: "Message",
    body: "Message from admin."
  }
};

var options = {
  priority: "normal",
  timeToLive: 60 * 60
};

const registrationToken = 'dU9aGYvO4QA:APA91bEwSpmBG3WEMQs4nFTbQvpryGoBDcxZvQwQinMb1Mujkf1Z8B15yInkwTs2qYcTvcYyjTggSR4UoM0CJ257XN_Lm2Gu32NbRLakCue73V-0JGdyyPbfJKjeFT_U59EBYhvJPTgR'

admin.messaging().sendToDevice(registrationToken, payload, options)
  .then(function (response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function (error) {
    console.log("Error sending message:", error);
  });