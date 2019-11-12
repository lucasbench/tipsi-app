
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
   location.href = "index.html";
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
  btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
  })
  //add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
          console.log(firebaseUser);
          btnLogout.classList.remove('hide');
      } else {
          console.log('not logged in');
          btnLogout.classList.add('hide');
      }
      
  });

}());