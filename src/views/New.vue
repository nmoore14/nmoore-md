<template>
  <div id="main" class="flex p-4 h-screen w-screen">
    <div class="flex w-1/3 m-1 bg-grey-dark h-almost p-2 rounded-lg mt-12">
      <new-text></new-text>
    </div>
    <div class="flex w-2/3 m-1 bg-grey-dark h-almost rounded-lg mt-12">
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
