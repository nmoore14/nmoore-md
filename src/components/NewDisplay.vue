<template>
  <div id="main-new-display" class="flex w-full bg-grey-light rounded-lg">
    <div v-for='(html, index) in userHTML' :key='index'>
      <span v-html="html"></span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userHTML', 'userMD'])
  },
  watch: {
    userHTML: function () {
      for (let i = 0; i < this.userHTML.length; i++) {
        this.userHTML[i] = this.userHTML[i].replace(/(?:\r\n|\r|\n)/g, '<br>')
      }
    }
  }
}
</script>
