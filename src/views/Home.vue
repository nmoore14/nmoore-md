<template>
  <div class="home">
    <welcome></welcome>
    <home-marquee></home-marquee>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import HomeMarquee from '@/components/HomeMarquee.vue'

export default {
  name: 'home',
  components: {
    Welcome,
    HomeMarquee
  }
}
</script>
