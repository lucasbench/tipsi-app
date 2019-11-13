
(function() {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCTpsJdh2n6feNf7lLlUQRG3mdEF1w1qJQ",
    authDomain: "tipsi-2ece8.firebaseapp.com",
    databaseURL: "https://tipsi-2ece8.firebaseio.com",
    projectId: "tipsi-2ece8",
    storageBucket: "tipsi-2ece8.appspot.com",
    messagingSenderId: "877847923524",
    appId: "1:877847923524:web:b09581f8f2780395a4a511",
    measurementId: "G-16DVFGQHHB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  //get elements for DOM manipulation
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // add login event
  btnLogin.addEventListener('click', e => {
      //get email and pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
    //sign in 
   const promise = auth.signInWithEmailAndPassword(email,pass);
   promise.catch(e => console.log (e.message));
  });
  // add signup event
  btnSignUp.addEventListener('click', e => {
         //get email and pass
         //TODO: CHECK 4 REAL EMAILS
         const email = txtEmail.value;
         const pass = txtPassword.value;
         const auth = firebase.auth();
       //sign in 
      const promise = auth.createUserWithEmailAndPassword(email,pass);
      promise
      .catch(e => console.log (e.message));
  });
  // btnLogout.addEventListener('click', e => {
  //     firebase.auth().signOut();
  // });
  //add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
          console.log(firebaseUser);
          window.open('index.html');
          btnLogout.classList.remove('hide');
          
      } else {
          console.log('not logged in');
          btnLogout.classList.add('hide');
      }
      
    });

}());




// function to send email notification  once user sign up

var functions = require('firebase-functions')
var mailgun = require('mailgun-js')({apiKey, domain})
exports.sendWelcomeEmail = functions.database.ref('users/{uid}').onWrite(event => {
  // only trigger for new users [event.data.previous.exists()]
  // do not trigger on delete [!event.data.exists()]
  if (!event.data.exists() || event.data.previous.exists()) {
    return
  }
  var user = event.data.val()
  var {email} = user
  var data = {
    from: 'michelotto.luca@gmail.com',
    subject: 'Welcome!',
    html: `<p>Welcome! ${user.name}</p>`,
    'h:Reply-To': 'michelotto.luca@gmail.com',
    to: email
  }
  mailgun.messages().send(data, function (error, body) {
    console.log(body)
  })
})