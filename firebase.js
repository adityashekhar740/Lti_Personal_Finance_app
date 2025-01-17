var admin = require("firebase-admin");

var serviceAccount = require("./ltifinanceapp-firebase-adminsdk-43vys-dd42c49518.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
