var config = {
    apiKey: "API_KEY",
    authDomain: "language-buddy-88fc7.firebaseapp.com",
    databaseURL: "https://language-buddy-88fc7-default-rtdb.firebaseio.com/",
    storageBucket: "language-buddy-88fc7.appspot.com",
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();


exports.addMessage = functions.https.onCall((data, context) => {
  // ...
});
const text = data.text;
const name = context.auth.token.name || null;

var addMessage = firebase.functions().httpsCallable('addMessage');
addMessage({ text: messageText })
  .then((result) => {
    // Read result of the Cloud Function.
    var sanitizedMessage = result.data.text;
  });

//handling errors
var addMessage = firebase.functions().httpsCallable('addMessage');
addMessage({ text: messageText })
  .then((result) => {
    // Read result of the Cloud Function.
    var sanitizedMessage = result.data.text;
  })
  .catch((error) => {
    // Getting the Error details.
    var code = error.code;
    var message = error.message;
    var details = error.details;
    // ...
  });
