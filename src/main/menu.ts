'use strict'

import { app, Menu } from 'electron'

export default (): void => {
	const menu = Menu.buildFromTemplate([
		{
			label: process.env.VUE_APP_TITLE,
			submenu: [
				{ role: 'copy' },
				{ role: 'paste' },
				{
					label: 'DevTools',
					accelerator: 'CmdOrCtrl+Shift+I',
					click: (_, focusedWindow): void => {
						if (focusedWindow) focusedWindow.webContents.toggleDevTools()
					}
				},
				{
					label: 'Quit',
					accelerator: 'CmdOrCtrl+Q',
					click: (): void => {
						app.quit()
					}
				}
			]
		}
	])
	Menu.setApplicationMenu(menu)
}
