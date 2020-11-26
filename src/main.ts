import { app, BrowserWindow } from 'electron';

function createWindow () {
  const options: Electron.BrowserWindowConstructorOptions = {
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true  // Node 機能の使用を許可
    }
  }
  const win = new BrowserWindow(options);
  win.loadFile('public/index.html');
}

// Electron の初期化が完了したらウィンドウを作成
app.whenReady().then(createWindow);
