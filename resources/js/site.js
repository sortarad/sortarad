import interact from 'interactjs'
import { createApp } from 'vue'

const SortaApp = {
  data() {
    return {
      message: 'hi',
      wallpaper: '/assets/system-wallpapers/leather-teal.png'
    }
  },
  methods: {
    setWallpaper(str) {
      this.wallpaper = str;
    }
  }
}

createApp(SortaApp).mount('#app')


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
