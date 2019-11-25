// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require('electron')
const path = require('path');

document.getElementById('dpng').ondragstart = (event) => {
  event.preventDefault();
  ipcRenderer.send('ondragstartpng', path.join(__dirname, '/images/test.png'));
}

document.getElementById('dwebp').ondragstart = (event) => {
  event.preventDefault();
  ipcRenderer.send('ondragstartwebp', path.join(__dirname, '/images/test.png'));
}
