# electron-crash-on-drap-webp

event.sender.startDrag with WebP image will be crashing.

```
A JavaScript error occurred in the main process

Uncaught Exception:
Error: Must specify non-empty 'icon' option
    at EventEmitter.<anonymous> (/Users/taku-o/Desktop/electron-crash-on-drap-webp/main.js:35:18)
    at EventEmitter.emit (events.js:200:13)
    at WebContents.<anonymous> (/Users/taku-o/Desktop/electron-crash-on-drap-webp/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/api/web-contents.js:334:21)
    at WebContents.emit (events.js:200:13)
```

# setup

```
npm install
npm run start
```

# ok
- drag "drag with png image", icon will be displayed.

# ng
- drag "drag with webp image", application will be crashed.

