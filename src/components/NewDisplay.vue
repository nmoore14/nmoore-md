<template>
  <div id='main-new-display' class='flex-col w-full rounded-lg'>
    <div class='flex-1 h-28 m-1 p-2 bg-grey-lightest rounded-lg justify-center items-center border border-my-teal-1 shadow-md'>
      <h1 class='w-full font-sans font-thin text-5xl text-my-navy-1 text-center'>Your Document</h1>
      <div class='inline-flex w-1/3'></div>
      <div class='inline-flex w-1/3'>
        <button class='bg-grey-light hover:bg-grey text-grey-darkest font-thin py-2 px-4 rounded-l w-1/2'>
          Formatted
        </button>
        <button class='bg-grey-light hover:bg-grey text-grey-darkest font-thin py-2 px-4 rounded-r w-1/2'>
          Raw
        </button>
      </div>
      <div class='inline-flex w-1/3'></div>
    </div>
    <template v-if='formatted'>
      <div class='flex-1 h-188 m-1 p-4 bg-grey-lightest overflow-scroll rounded-lg'>
        <span v-for='(html, index) in userHTML' :key='index' v-html='html'></span>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      formatted: true
    }
  },
  computed: {
    ...mapState(['userHTML', 'userMD'])
  },
  watch: {
    userHTML: function () {
      for (let i = 0; i < this.userHTML.length; i++) {
        this.userHTML[i] = this.userHTML[i].replace(/(?:\r\n|\r|\n)/g, '<br>')
      }
    },
    formatted: function () {
      if (formatted) {

      } else {

      }
    }
  }
}
</script>
