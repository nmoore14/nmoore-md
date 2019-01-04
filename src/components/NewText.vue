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
        @keypress.enter='addBreak(myHTML)'
        @keypress.shift.enter='addText(myHTML, myMD)'
      ></textarea>
    </div>
    <div class='flex-1 w-full h-48 overflow-scroll p-4 mt-2 bg-grey-lightest rounded'>
      <h4 class='w-full text-center font-sans font-thin text-my-navy-1 text-2xl'>Text sample</h4>
      <span v-html='myHTML'></span>
    </div>
    <div class='flex-1 w-full h-48 overflow-scroll p-4 mt-2 bg-grey-lightest rounded'>
      <h4 class='w-full text-center font-sans font-thin text-my-navy-1 text-2xl'>Markdown code</h4>
      <p>{{ myMD }}</p>
    </div>
    <div class='flex-1 w-full h-16 p-4'>
      <button
        class='w-full bg-my-teal-1 hover:bg-my-teal-2 hover:text-white text-my-navy-1 font-thin text-2xl py-2 px-4 rounded shadow'
        @click="addText(myHTML, myMD)"
      >Add <small>(Shift + Enter)</small></button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
        { text: 'Heading 6 (h6)', value: 6 },
        { text: 'Italics (em)', value: 7 },
        { text: 'Bold (strong)', value: 8 },
        { text: 'Bold and Italic (strong, em)', value: 9 },
        { text: 'Strikethrough (s)', value: 10 }
      ],
      myText: '',
      myHTML: '',
      myMD: '',
      openTag: '',
      closeTag: '',
      mdSelected: {},
      myTags: [
        { open: '<p>', close: '</p>' },
        { open: '<h1>', close: '</h1>' },
        { open: '<h2>', close: '</h2>' },
        { open: '<h3>', close: '</h3>' },
        { open: '<h4>', close: '</h4>' },
        { open: '<h5>', close: '</h5>' },
        { open: '<h6>', close: '</h6>' },
        { open: '<em>', close: '</em>' },
        { open: '<strong>', close: '</strong>' },
        { open: '<strong><em>', close: '</em></strong>' },
        { open: '<s>', close: '</s>' }
      ],
      mdTags: [
        { open: '', close: '' },
        { open: '#', close: '' },
        { open: '##', close: '' },
        { open: '###', close: '' },
        { open: '####', close: '' },
        { open: '#####', close: '' },
        { open: '######', close: '' },
        { open: '_', close: '_' },
        { open: '**', close: '**' },
        { open: '**_', close: '_**' },
        { open: '~~', close: '~~' }
      ],
      usedHTML: [],
      usedMD: []
    }
  },
  computed: {
    ...mapState(['userHTML', 'userMD'])
  },
  methods: {
    ...mapMutations(['GET_USER_HTML', 'GET_USER_MD']),
    enteredText (text, open, close) {
      if (open === '' && close === '') {
        this.myHTML = `<p> ${text} </p>`
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
    },
    addText (textHTML, textMD) {
      if (textHTML !== '' && textMD !== '') {
        this.usedHTML.push(this.myHTML + '\r')
        this.usedMD.push(this.myMD)
        this.GET_USER_HTML(this.usedHTML)
        this.GET_USER_MD(this.usedMD)
      }
    },
    addBreak (text) {
      this.myText = `${text}\\r`
      this.addBreakMD(text)
    },
    addBreakMD (text) {

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
        this.mdTags[this.mdSelected.value].close
      )
    },
    myText: function () {
      this.enteredText(this.myText, this.openTag, this.closeTag)
      this.displayMDSample(
        this.myText,
        this.mdTags[this.mdSelected.value].open,
        this.mdTags[this.mdSelected.value].close
      )
    },
    myHTML: function () {
      this.myHTML = this.myHTML.replace(/(?:\r\n|\r|\n)/g, '<br>')
    }
  }
}
</script>

<style scoped>
svg {
  color: #00cdcd;
}
</style>
