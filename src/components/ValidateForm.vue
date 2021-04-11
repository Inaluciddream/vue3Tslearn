<template>
    <form class="validate-form-container">
        <slot></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="button" class="btn btn-primary">注册</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type validateFun = () => boolean
export const emitter = mitt()
export default defineComponent({
    emits: ['form-submit'],
    props: [],
    setup (props, ctx) {
        // console.log(props, ctx)
        const funArr: validateFun[] = []
        const submitForm = () => {
            console.log(1)
            const allPassed = funArr.map(cb => cb()).every(result => result)
            ctx.emit('form-submit', allPassed)
        }
        const callback = (fun?: validateFun) => {
            if (fun) {
                funArr.push(fun)
            }
        }
        emitter.on('form-item-created', callback)
        onUnmounted(() => {
            emitter.off('form-item-created', callback)
        })
        return {
            submitForm,
            callback
        }
    }
})
</script>

<style scoped>
.submit-area {
  display: inline-block;
}
</style>
