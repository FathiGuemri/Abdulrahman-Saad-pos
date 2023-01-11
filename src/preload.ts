require('./rt/electron-rt');
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    print: (data) => ipcRenderer.send('print', data),
    hide: () => ipcRenderer.send('hide'),
    restoreDown: () => ipcRenderer.send('restoreDown'),
    minimize: () => ipcRenderer.send('minimize')
})
