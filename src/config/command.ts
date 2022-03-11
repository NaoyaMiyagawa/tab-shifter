type ShortcutKeyByEnv = {
  default?: string
  mac?: string
  windows?: string
  chromeos?: string
  linux?: string
}

type Command = {
  [commandName: string]: {
    suggested_key: ShortcutKeyByEnv
    description?: string
  }
}

const executeBrowserActionKey: string = '_execute_browser_action'
export const executeBrowserAction: Command = {
  [executeBrowserActionKey]: {
    suggested_key: {
      //   default: 'Ctrl+K',
      mac: 'Command+MacCtrl+P',
    },
    description: 'executeBrowserAction',
  },
}

export const moveTabToLeftKey: string = 'tab_to_left'
export const moveTabToLeft: Command = {
  [moveTabToLeftKey]: {
    suggested_key: {
      //   default: 'Ctrl+[',
      // TODO: switch to [
      mac: 'Command+MacCtrl+J',
    },
    description: 'moveTabToLeft',
  },
}

export const moveTabToRightKey: string = 'tab_to_right'
export const moveTabToRight: Command = {
  [moveTabToRightKey]: {
    suggested_key: {
      // TODO: set default
      //   default: 'Alt+]',
      // TODO: switch to ]
      mac: 'Command+MacCtrl+K',
    },
    description: 'moveTabToRight',
  },
}

export const commandList = {
  ...executeBrowserAction,
  ...moveTabToLeft,
  ...moveTabToRight,
}
