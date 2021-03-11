<template>
    <li
        class="dropdown-item dropdown-option"
        :class="disabled ? 'is-disabled' : ''"
    >
        <slot></slot>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DropItem',
    props: {
        disabled: {
            type: Boolean,
            required: true
        }
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>
    li.dropdown-option.is-disabled {
        color: #6b6b6b;
        background-color: transparent;
        cursor: none;
        pointer-events: none;
    }
</style>
