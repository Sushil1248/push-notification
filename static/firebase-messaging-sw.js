importScripts('https://www.gstatic.com/firebasejs/6.3.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.3/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyB1aPRrUgUqWKlaxAnxnFWB6yvg_OxF_eQ",
    authDomain: "nuxt-push-notification-4e7e9.firebaseapp.com",
    projectId: "nuxt-push-notification-4e7e9",
    storageBucket: "nuxt-push-notification-4e7e9.appspot.com",
    messagingSenderId: "704962228765",
    appId: "1:704962228765:web:8514bccd34c09f6ca0ccf4",
    measurementId: "G-VS229VDDN9"
  };

  firebase.initializeApp(firebaseConfig);
//   const messaging = firebase.messaging.isSupported() ? firebase.messaging() : null
//   console.log("messaging", messaging)

//  messaging.onBackgroundMessage((payload)=>{
//      console.log('[firbase-messaging-sw.js] recieved background message:',payload)
//  });