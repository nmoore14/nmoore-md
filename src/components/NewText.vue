<template>
  <div id="main-new-text" class="flex-col w-full">
    <div class="flex-1 w-full text-center">
      <h1 class="font-sans font-thin text-center">New Markdown Text</h1>
    </div>
    <div class="flex-1 inline-block relative w-full">
      <select
        class="block appearance-none w-full bg-my-navy-1 text-my-teal-1 font-sans font-thin text-2xl border border-grey-light hover:border-grey px-4 py-2 pr-8 mt-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option
          v-for="(callout, index) in mdCallouts"
          :key="index"
          class="text-my-teal-1 font-sans font-thin text-center"
        >{{ callout }}</option>
      </select>
      <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <svg
          class="fill-current h-4 w-4 mt-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
      </div>
    </div>
    <div class="flex-1 w-full">
      <textarea
        rows="10"
        cols="50"
        class="bg-grey-lightest font-sans font-light w-full p-4 mt-2 rounded overflow-scroll"
        placeholder="Enter your text here"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mdCallouts: [
        "Heading 1 (h1)",
        "Heading 2 (h2)",
        "Heading 3 (h3)",
        "Heading 4 (h4)",
        "Heading 5 (h5)",
        "Heading 6 (h6)"
      ]
    };
  }
};
</script>

<style scoped>
svg {
  color: #00cdcd;
}
</style>

