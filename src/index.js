const { app, BrowserWindow } = require('electron')

function createWindow () {
  // 新規ウィンドウを作成する
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true  // Node 機能の使用を許可
    }
  })

  // ウィンドウ内に HTML ファイルを表示
  win.loadFile('index.html')

  // 起動と同時に Chrome の DevTools を開く
  // win.webContents.openDevTools()
}

// Electron の初期化が完了したらウィンドウを作成
app.whenReady().then(createWindow);
