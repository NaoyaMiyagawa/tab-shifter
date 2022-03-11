import { Tabs } from 'webextension-polyfill'

/**
 * useTabShifter
 */
export const useTabShifter = () => {
  const currentTab = ref<Tabs.Tab | null>(null)

  const tabIndexes = computed(() => ({
    left: Number(currentTab.value?.index) - 1,
    right: Number(currentTab.value?.index) + 1,
    leftEnd: 0,
    rightEnd: 100,
  }))

  /** Shift active tab to right */
  const shiftTabToRight = async () => {
    await updateCurrentTab()
    shiftTab(tabIndexes.value.right)
  }

  /** Shift active tab to left */
  const shiftTabToLeft = async () => {
    await updateCurrentTab()
    shiftTab(tabIndexes.value.left)
  }

  /** Shift active tab to right */
  const shiftTabToRightEnd = async () => {
    await updateCurrentTab()
    shiftTab(tabIndexes.value.rightEnd)
  }

  /** Shift active tab to left */
  const shiftTabToLeftEnd = async () => {
    await updateCurrentTab()
    shiftTab(tabIndexes.value.leftEnd)
  }

  /** Shift tab to specified index */
  const shiftTab = async (indexTo: number) => {
    const tabId = currentTab.value?.id || -1
    if (tabId === -1) {
      return
    }

    try {
      await browser.tabs.move(tabId, { index: indexTo })
    } catch (error) {
      if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
        setTimeout(() => shiftTab(indexTo), 50)
      }
    }
  }

  /** Update current tab info */
  const updateCurrentTab = async () => {
    ;[currentTab.value] = await browser.tabs.query({ active: true, currentWindow: true })
  }

  return { shiftTabToLeft, shiftTabToRight, shiftTabToRightEnd, shiftTabToLeftEnd }
}
