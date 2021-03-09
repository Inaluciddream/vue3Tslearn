<template>
    <div>
        <div class="row">
            <div v-for="column in cloumnList" :key="column.id" class="col-4 mb-4">
                <div class="card-body h-100 shadow-sm">
                    <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
                    <h5 class="card-title text-center">{{column.title}}</h5>
                    <p class="card-text text-start">{{column.description}}</p>
                    <a href="#" class="btn btn-outline-primary">进入专栏</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}
export default defineComponent({
    name: 'CloumnList',
    props: {
        list: {
            type: Array as PropType<ColumnProps[]>,
            required: true
        }
    },
    setup (props) {
        const cloumnList = computed(() => {
            return props.list.map(cloumn => {
                if (!cloumn.avatar) {
                    cloumn.avatar = require('@/assets/default-avatar.png')
                }
                return cloumn
            })
        })
        return {
            cloumnList
        }
    }
})
</script>

<style scoped>

</style>
