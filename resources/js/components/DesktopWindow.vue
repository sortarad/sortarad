<template>
    <div ref="window"
        class="mx-auto bg-tan font-display shadow border cursor-default window relative z-10"
        :class="{width, position}"
    >
        <header class="text-center py-1 flex items-center select-none">
            <div class="w-24"></div>
            <div class="lines w-full">
                <div class="bg-black h-px"></div>
                <div class="bg-black h-px mt-1"></div>
                <div class="bg-black h-px mt-1"></div>
            </div>
            <h1 class="uppercase px-3 flex-1 whitespace-nowrap" v-text="title" />
            <div class="lines w-full">
                <div class="bg-black h-px"></div>
                <div class="bg-black h-px mt-1"></div>
                <div class="bg-black h-px mt-1"></div>
            </div>
            <button class="w-24 outline-none relative" @click="$emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 13 13" class="mx-auto"><line x1="1.41" y1="11.59" x2="11.59" y2="1.41" fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"/><line x1="1.41" y1="1.41" x2="11.59" y2="11.59" fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2"/></svg>
            </button>
        </header>
        <section class="border-t-2 p-4">
            <slot></slot>
        </section>
    </div>
</template>

<script>
module.exports = {
    props: ['title', 'width', 'position'],

    emits: ['close']
}
</script>
