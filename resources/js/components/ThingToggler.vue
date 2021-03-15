<template>
    <button>
        <slot name="button"></slot>
    </button>
    <slot></slot>
</template>
<script>
module.exports = {
    props: [],

    data: function() {
        return {
            isOpen: false
        }
    },

    methods: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        },
    },
}
</script>
