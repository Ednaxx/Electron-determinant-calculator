const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    height: 400,
    width: 549,
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
  