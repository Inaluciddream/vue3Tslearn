<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
        <a class="navbar-brand" href="#">
            者也专栏
        </a>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">登录</router-link></li>
            <li class="list-inline-item"><router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link></li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <dropdown :title="title">
                    <drop-item><router-link to="/createPost">新建文章</router-link></drop-item>
                    <drop-item disabled>编辑资料</drop-item>
                    <drop-item>退出登录</drop-item>
                </dropdown>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropItem from './DropItem.vue'
import { Userprops } from '../store/store'
export default defineComponent({
    name: 'GlobalHeader',
    props: {
        user: {
            type: Object as PropType<Userprops>,
            required: true
        }
    },
    setup (props) {
        const title = computed(() => {
            return `你好 ${props.user.name}`
        })
        return {
            title
        }
    },
    components: {
        Dropdown,
        DropItem
    }
})
</script>

<style scoped>

</style>
