<script setup lang="ts">
import { commandDisplays } from '~/config/command'
</script>

<template>
  <main class="w-[300px] px-4 py-4 text-center text-gray-700">
    <div class="flex justify-between items-center">
      <div class="flex justify-center">
        <Logo />
        <div class="text-green-300 font-bold m-auto">Tab Shifter</div>
      </div>

      <div>
        <IconGithub />
      </div>
    </div>

    <div class="border border-gray-200 rounded-lg my-3 px-2 py-4">
      <p class="text-gray-400 py-1">Shortcut Keys</p>
      <hr class="m-auto w-[80%]" />

      <table class="bl_shortcutKeysTable">
        <template v-for="(value, key) in commandDisplays" :key="key">
          <tr>
            <th>{{ value }}</th>
            <td>{{ key }}</td>
          </tr>
        </template>
      </table>
    </div>
  </main>
</template>

<style lang="scss">
.bl_shortcutKeysTable {
  @apply m-auto my-4 text-gray-400;

  th,
  td {
    @apply border p-1;
  }
  th {
    @apply font-normal text-size-[90%] text-left;
  }
}
</style>
