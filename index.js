import { createApp } from 'https://unpkg.com/vue@3.2.36/dist/vue.esm-browser.prod.js'
const TITLE_MAX_LEN = 80

function isUrl(str) {
  try {
    new URL(str)
    return true
  } catch (e) {
    return false
  }
}

const app = createApp({
  data() {
    return {
      title: '',
      url: '',
    }
  },
  computed: {
    titleError() {
      if (this.title.trim().length === 0) {
        return 'Title is required'
      } else if (this.title.length > TITLE_MAX_LEN) {
        return `Title is too long (max ${TITLE_MAX_LEN} characters)`
      } else {
        return ''
      }
    },
    urlError() {
      if (this.url.trim().length === 0) {
        return 'URL is required'
      } else if (!isUrl(this.url)) {
        return 'Invalid URL'
      } else {
        return ''
      }
    },
    submitlink() {
      if (this.urlError || this.titleError) {
        return ''
      }
      return `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(this.url)}&t=${encodeURIComponent(this.title)}`
    },
  },
  methods: {
    async copySubmitlinkToClipboard() {
      await navigator.clipboard.writeText(this.submitlink)
    },
    async copyRichTextToClipboard() {
      const html = `<a href="${this.submitlink}">Share ${this.title} on Hacker News</a>`
      const item = new ClipboardItem({
        'text/plain': new Blob([this.submitlink], { type: 'text/plain' }),
        'text/html': new Blob([html], { type: 'text/html' })
      })
      await navigator.clipboard.write([item])
    }
  },
})

app.mount('#app')
