<template>
    <div class="dropdown" ref="DropElement">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
        <ul class="dropdown-menu" v-if="isOpen" style="display: block;">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
    name: 'Dropdown',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup () {
        const DropElement = ref<null | HTMLElement>(null)
        const isOpen = ref(false)
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        const isClickOutside = useClickOutside(DropElement)
        watch(isClickOutside, () => {
            if (isClickOutside.value && isOpen.value) {
                isOpen.value = false
            }
        })
        return {
            isOpen,
            toggleOpen,
            DropElement
        }
    }
})
</script>

<style scoped>

</style>
