const babel = require("@babel/core");
const { app,BrowserWindow,ipcMain } = require("electron");
let mainWindow = null;
const path = require("path");

const createWindow = () => {
   mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        show:false,
        webPreferences:{
            nodeIntegration:true,
            nodeIntegrationInSubFrames:true,
            nodeIntegrationInWorker:true,
            contextIsolation:false
        }
    });
    mainWindow.loadFile(path.resolve(__dirname,"index.html")); //load index.html file into mainWindow.
    mainWindow.show();
}

app.on('ready',createWindow);

ipcMain.handle('transform',async (e,code) => {
  console.log(" code ",code);
  try {
    return (await babel.transformAsync(code,{})).code;
  }
  catch(e) {
    return e.message;
  }
})
