"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function createWindow() {
    const options = {
        width: 400,
        height: 300,
        webPreferences: {
            nodeIntegration: true // Node 機能の使用を許可
        }
    };
    const win = new electron_1.BrowserWindow(options);
    win.loadFile('public/index.html');
}
// Electron の初期化が完了したらウィンドウを作成
electron_1.app.whenReady().then(createWindow);
//# sourceMappingURL=main.js.map