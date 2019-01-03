<template>
  <div id='main-new-text' class='flex-col w-full'>
    <div class='flex-1 w-full text-center'>
      <h1 class='font-sans font-thin text-center'>New Markdown Text</h1>
    </div>
    <div class='flex-1 inline-block relative w-full'>
      <select
        class='block appearance-none w-full bg-my-navy-1 text-my-teal-1 font-sans font-thin text-2xl border border-grey-light hover:border-grey px-4 py-2 pr-8 mt-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        v-model='mdSelected'
      >
        <option
          v-for='(callout, index) in mdCallouts'
          :key='index'
          :value='callout'
          class='text-my-teal-1 font-sans font-thin text-center'
        >{{ callout.text }}</option>
      </select>
      <div class='pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker'>
        <svg
          class='fill-current h-4 w-4 mt-2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'></path>
        </svg>
      </div>
    </div>
    <div class='flex-1 w-full'>
      <textarea
        rows='10'
        cols='50'
        class='bg-grey-lightest font-sans font-light w-full p-4 mt-2 rounded overflow-scroll'
        placeholder='Enter your text here'
        v-model='myText'
      ></textarea>
    </div>
    <div class='flex-1 w-full h-64 overflow-scroll p-4 mt-2 bg-grey-lightest rounded'>
      <h4 class='w-full text-center font-sans font-thin text-my-navy-1 text-2xl'>Text sample</h4>
      <span v-html='myHTML'></span>
    </div>
    <div class='flex-1 w-full h-64 overflow-scroll p-4 mt-2 bg-grey-lightest rounded'>
      <h4 class='w-full text-center font-sans font-thin text-my-navy-1 text-2xl'>Markdown code</h4>
      <p>{{ myMD }}</p>
    </div>
    <div class='flex-1 w-full h-16 p-4'>
      <button
        class='w-full bg-my-teal-1 hover:bg-my-teal-2 hover:text-white text-my-navy-1 font-thin text-2xl py-2 px-4 rounded shadow'
      >Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mdCallouts: [
        { text: 'Default (p)', value: 0 },
        { text: 'Heading 1 (h1)', value: 1 },
        { text: 'Heading 2 (h2)', value: 2 },
        { text: 'Heading 3 (h3)', value: 3 },
        { text: 'Heading 4 (h4)', value: 4 },
        { text: 'Heading 5 (h5)', value: 5 },
        { text: 'Heading 6 (h6)', value: 6 }
      ],
      myText: '',
      myHTML: '',
      myMD: '',
      openTag: '',
      closeTag: '',
      mdSelected: {},
      myTags: [
        { open: '<P>', close: '</P>' },
        { open: '<H1>', close: '</H1>' },
        { open: '<H2>', close: '</H2>' },
        { open: '<H3>', close: '</H3>' },
        { open: '<H4>', close: '</H4>' },
        { open: '<H5>', close: '</H5>' },
        { open: '<H6>', close: '</H6>' }
      ],
      mdTags: [
        { open: '', close: '' },
        { open: '#', close: '' },
        { open: '##', close: '' },
        { open: '###', close: '' },
        { open: '####', close: '' },
        { open: '#####', close: '' },
        { open: '######', close: '' }
      ]
    }
  },
  methods: {
    enteredText (text, open, close) {
      if (open === '' && close === '') {
        this.myHTML = `<P> ${text} </P>`
        this.displayMDSample(text, open, close)
      } else {
        this.myHTML = `${open} ${text} ${close}`
        this.displayMDSample(text, open, close)
      }
    },
    displayMDSample (text, open, close) {
      if (this.mdSelected.value <= 6) {
        this.myMD = `${open} ${text}${close}`
      } else {
        this.myMD = `${open}${text}${close}`
      }
    }
  },
  watch: {
    mdSelected: function (value) {
      this.openTag = this.myTags[this.mdSelected.value].open
      this.closeTag = this.myTags[this.mdSelected.value].close
      this.enteredText(this.myText, this.openTag, this.closeTag)
      this.displayMDSample(
        this.myText,
        this.mdTags[this.mdSelected.value].open,
        (this.closeTag = this.mdTags[this.mdSelected.value].close)
      )
    },
    myText: function () {
      this.enteredText(this.myText, this.openTag, this.closeTag)
      this.displayMDSample(
        this.myText,
        this.mdTags[this.mdSelected.value].open,
        (this.closeTag = this.mdTags[this.mdSelected.value].close)
      )
    }
  }
}
</script>

<style scoped>
svg {
  color: #00cdcd;
}
</style>
