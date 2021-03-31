import interact from 'interactjs'
import { createApp } from 'vue'
// import headlessui from '@headlessui/vue'

import DesktopWindow from './components/DesktopWindow.vue';
import MenuBar from './components/MenuBar.vue';
import VueClickAway from "vue3-click-away";

const SortaApp = createApp({
  data() {
    return {
      message: 'hi',
      wallpaper: '/assets/system-wallpapers/leather-teal.png',
      showingSettings: false,
      showingSurprise: false,
      interval: null,
      time: this.getTime()
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  created() {
    this.interval = setInterval(() => {
      this.time = this.getTime()
    }, 1000)
  },
  methods: {
    setWallpaper(str) {
      this.wallpaper = str;
    },
    showSettings() {
      this.showingSettings = true;
    },
    showSurprise() {
      this.showingSurprise = true;
    },
    getTime() {
      return Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric'
      }).format()
    },
    generateSurprise() {
      let surprises = [
        'https://youtu.be/oHg5SJYRHA0',
        'https://youtu.be/FGXDKrUoVrw',
        'https://youtu.be/HcGNqrAtsgg',
        'https://youtu.be/l_zsz_MlVvI',
        'http://spacejam.com/'
      ];
      window.location = surprises[Math.floor(Math.random() * surprises.length)]
    },
    goTo(url) {
      window.location = url;
    }
  }
})

SortaApp.component('DesktopWindow', DesktopWindow)
SortaApp.component('MenuBar', MenuBar)

SortaApp.use(VueClickAway)
SortaApp.mount('#app')





/***********************************************/
/* Draggable Interaction
************************************************/

interact('.window')
  .draggable({
    allowFrom: 'header',
    listeners: { move: dragMoveListener,}
  })

interact('.shortcut')
  .draggable({
    listeners: { move: dragMoveListener,}
  });

function dragMoveListener (event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
