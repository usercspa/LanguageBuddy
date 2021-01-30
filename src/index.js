var config = {
    apiKey: "API_KEY",
    authDomain: "language-buddy-88fc7.firebaseapp.com",
    databaseURL: "https://language-buddy-88fc7-default-rtdb.firebaseio.com/",
    storageBucket: "language-buddy-88fc7.appspot.com",
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

// write data
  function writeUserData(name, phone, language, interest) {
  firebase.database().ref('users/' + userId).set({
    name: name,
    phone: phone,
    language: language,
    interest: interest
    }, (error) => {
  if (error) {
    // The write failed...
  } else {
    // Data saved successfully!
  }
});

