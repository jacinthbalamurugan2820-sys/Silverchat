SilverChat Notifications Update

Upload/replace these five files in the root of your GitHub Pages repository.
The update adds an in-app Enable Notifications bell and browser/OS notifications for new messages while the SilverChat page is open or running in the background.

Important: This is not full Firebase Cloud Messaging push delivery when the app/browser is completely closed. That requires Firebase Cloud Messaging setup, a VAPID key, token storage, and a trusted server/Cloud Function to send messages. Do not change Firebase Realtime Database security rules for this update.

After committing, open the site in Chrome, tap the bell icon in the home header, and allow notifications. If permission was previously blocked, enable notifications from Android Chrome site settings.
