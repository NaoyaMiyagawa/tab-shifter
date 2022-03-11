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
    global?: boolean
  }
}

// @NOTE: Not allowed to use [ or ] for extention shortcut. (sadly)

const executeBrowserActionKey: string = '_execute_browser_action'
export const executeBrowserAction: Command = {
  [executeBrowserActionKey]: {
    suggested_key: {
      //   default: 'Ctrl+K',
      mac: 'Command+MacCtrl+J',
    },
    description: 'executeBrowserAction',
  },
}

/**
 * Single move
 */
export const moveTabToLeftKey: string = 'tab_to_left'
export const moveTabToLeft: Command = {
  [moveTabToLeftKey]: {
    suggested_key: {
      // TODO: set default
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
      mac: 'Command+MacCtrl+K',
    },
    description: 'moveTabToRight',
  },
}

/**
 * Edge move
 */

export const moveTabToLeftEndKey: string = 'tab_to_left_end'
export const moveTabToLeftEnd: Command = {
  [moveTabToLeftEndKey]: {
    suggested_key: {
      // TODO: set default
      mac: 'Command+MacCtrl+H',
    },
    description: 'moveTabToLeftEnd',
  },
}

export const moveTabToRightEndKey: string = 'tab_to_right_end'
export const moveTabToRightEnd: Command = {
  [moveTabToRightEndKey]: {
    suggested_key: {
      // TODO: set default
      mac: 'Command+MacCtrl+L',
    },
    description: 'moveTabToRightEnd',
  },
}

export const commandList = {
  // ...executeBrowserAction,
  ...moveTabToLeft,
  ...moveTabToRight,
  ...moveTabToLeftEnd,
  ...moveTabToRightEnd,
}

export const commandDisplays = {
  'Cmd + Ctrl + H': 'タブを左端に移動する',
  'Cmd + Ctrl + J': 'タブを左に移動する',
  'Cmd + Ctrl + K': 'タブを右に移動する',
  'Cmd + Ctrl + L': 'タブを右端に移動する',
}
