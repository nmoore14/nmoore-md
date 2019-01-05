<template>
  <div id='main-new-display' class='flex-col w-full rounded-lg'>
    <div class='flex-1 h-28 m-1 p-2 bg-grey-lightest rounded-lg justify-center items-center border border-my-teal-1 shadow-md'>
      <h1 class='w-full font-sans font-thin text-5xl text-my-navy-1 text-center'>Your Document</h1>
      <div class='inline-flex w-1/3'></div>
      <div class='inline-flex w-1/3'>
        <button class='bg-grey-light hover:bg-grey text-grey-darkest font-thin py-2 px-4 rounded-l w-1/2' @click='isFormatted = true' v-bind:class="{ active: isFormatted }">
          Formatted
        </button>
        <button class='bg-grey-light hover:bg-grey text-grey-darkest font-thin py-2 px-4 rounded-r w-1/2' @click='isFormatted = false' v-bind:class="{ active: !isFormatted }">
          Raw
        </button>
      </div>
      <div class='inline-flex w-1/3'></div>
    </div>
    <template v-if='isFormatted'>
      <div class='flex-1 h-188 m-1 p-4 bg-grey-lightest overflow-scroll rounded-lg'>
        <span v-for='(html, index) in userHTML' :key='index' v-html='html'></span>
      </div>
    </template>
    <template v-else>
      <div class='flex-1 h-188 m-1 p-4 bg-grey-lightest overflow-scroll rounded-lg'>
        <code class='font-mono'>
          <span v-for='(md, index) in userMD' :key='index' class='w-full'>{{ md }}<br></span>
        </code>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      isFormatted: true,
      isRaw: false
    }
  },
  computed: {
    ...mapState(['userHTML', 'userMD'])
  }
}
</script>

<style scoped>
.active {
  background-color: #00cdcd;
  color: #263245;
  border: 1px solid white;
}
</style>
