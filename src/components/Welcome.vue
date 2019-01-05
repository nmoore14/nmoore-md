<template>
  <div class='welcome'>
    <div class='flex w-screen h-128 bg-green'>
      <div class='flex-1 w-screen h-100 bg-blue mt-12' id='welcome-banner'>
        <div class='w-full h-full m-0'>
          <p class="w-full h-16 text-center text-white font-sans font-thin -mb-16 pt-2">
            NMDesign | 2019 | VueJS - TailwindCSS
          </p>
          <h1 class='w-full h-full font-sans font-mono text-center pt-16 mt-o' id='welcome-overlay'>Welcome</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'welcome'
}
</script>

<style scoped>
  #welcome-banner {
    background-image: url(../assets/color-bg-1.svg);
    background-size: cover;
    background-repeat: none;
  }
  #welcome-overlay {
    background-color: black;
    color: white;
    mix-blend-mode: screen;
    font-size: 15rem;
  }
</style>
