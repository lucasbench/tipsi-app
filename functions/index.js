const functions = require('firebase-functions');
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
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
