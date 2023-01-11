const { PosPrinter } = require("electron-pos-printer");
const { ipcMain } = require('electron')
const path = require("path");

const options = {
    preview: false,
    margin: '0 0 0 0',
    copies: 1,
    printerName: 'XP-80C',
    timeOutPerLine: 400,
    pageSize: '80mm' // page size
}



export function printInvoice(data) {

    PosPrinter.print(data, options)
        .then(console.log)
        .catch((error) => {
            console.error(error);
        });

}