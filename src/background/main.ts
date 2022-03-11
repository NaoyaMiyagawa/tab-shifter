import {
  moveTabToLeftEndKey,
  moveTabToLeftKey,
  moveTabToRightEndKey,
  moveTabToRightKey,
} from '~/config/command'
import { useTabShifter } from '~/composables/useTabShifter'

// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client')
  // load latest content script
  import('./contentScriptHMR')
}

const { shiftTabToLeft, shiftTabToRight, shiftTabToLeftEnd, shiftTabToRightEnd } = useTabShifter()

browser.commands.onCommand.addListener(async (command) => {
  // move one
  if (command === moveTabToLeftKey) {
    shiftTabToLeft()
    return
  }
  if (command === moveTabToRightKey) {
    shiftTabToRight()
    return
  }

  // move to end
  if (command === moveTabToLeftEndKey) {
    shiftTabToLeftEnd()
    return
  }
  if (command === moveTabToRightEndKey) {
    shiftTabToRightEnd()
    return
  }
})
