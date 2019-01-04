<template>
  <div id="main-new-display" class="flex w-full bg-grey-light rounded-lg">
    <div>
      <ul v-for='(html, index) in userHTML' :key='index' class="list-reset">
        <li v-html="html"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userHTML', 'userMD'])
  }
}
</script>
