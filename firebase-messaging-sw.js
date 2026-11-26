/* SilverChat Firebase Cloud Messaging service worker */
self.addEventListener("notificationclick", event => {
  event.notification.close();
  const target = event.notification.data && event.notification.data.url || "./";
  event.waitUntil(clients.matchAll({type:"window", includeUncontrolled:true}).then(list => {
    for (const client of list) { if ("focus" in client) { client.navigate(target); return client.focus(); } }
    return clients.openWindow(target);
  }));
});
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyBSwhnN9SALp80USfwC_J5lUp7pNMTSxbs",
  authDomain: "silve-rchat.firebaseapp.com",
  databaseURL: "https://silve-rchat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "silve-rchat",
  storageBucket: "silve-rchat.firebasestorage.app",
  messagingSenderId: "322304576160",
  appId: "1:322304576160:web:c9e971a5c4c494670357c5",
  measurementId: "G-DDM9DTSJQB"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => { console.log("SilverChat background push received", payload); });
