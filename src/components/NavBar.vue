<template>
  <div
    id="nav"
    class="w-full bg-my-navy-1 h-12 font-sans font-thin text-my-teal-1 text-2xl pl-4 pr-4 pt-2 shadow-md"
  >
    <router-link to="/" class="text-my-teal-1 no-underline hover:font-normal">&lt;Home&gt;&nbsp;</router-link>
    <router-link
      to="/about"
      class="text-my-teal-1 no-underline hover:font-normal"
    >&lt;About&gt;&nbsp;</router-link>
    <router-link
      to="/new"
      class="text-my-teal-1 no-underline ml-12 text-green hover:font-normal"
    >&lt;New Markdown&gt;&nbsp;</router-link>
  </div>
</template>
