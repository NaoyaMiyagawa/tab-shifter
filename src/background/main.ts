import { moveTabToLeftKey, moveTabToRightKey } from './../config/command'
import { useTabShifter } from '~/composables/useTabShifter'

// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client')
  // load latest content script
  import('./contentScriptHMR')
}

const { shiftTabToLeft, shiftTabToRight } = useTabShifter()

browser.commands.onCommand.addListener(async (command) => {
  if (command === moveTabToLeftKey) {
    shiftTabToLeft()
  }
  if (command === moveTabToRightKey) {
    shiftTabToRight()
  }
})
