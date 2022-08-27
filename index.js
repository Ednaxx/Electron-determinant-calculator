const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    height: 500,
    width: 500,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})


var { aaa } = require('./src/script.js');

console.log(aaa)
  