<template>
  <div id="main" class="flex p-4 h-screen w-screen">
    <div class="flex w-1/3 m-1 bg-grey-dark h-full p-2 rounded-lg">
      <new-text></new-text>
    </div>
    <div class="flex w-2/3 m-1 bg-grey-dark h-full rounded-lg">
      <new-display></new-display>
    </div>
  </div>
</template>

<script>
import NewText from '@/components/NewText'
import NewDisplay from '@/components/NewDisplay'

export default {
  components: {
    NewText,
    NewDisplay
  }
}
</script>
