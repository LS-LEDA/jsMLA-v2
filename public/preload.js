const { contextBridge, ipcRenderer } = require('electron');

const validChannels = ['read_settings', 'write_settings'];

// This will expose electron IPC to the renderer process
// Use window.ipc.send / window.ipc.on to send and receive
// ipc messages
contextBridge.exposeInMainWorld(
    'ipc', {
        send: (channel, data) => {
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        on: (channel, func) => {
            if (validChannels.includes(channel)) {
                // Strip event as it includes `sender` and is a security risk
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        },
    },
);