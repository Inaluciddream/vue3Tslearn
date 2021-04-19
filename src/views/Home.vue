<template>
    <div>
        <section class="py-5 text-center container">
            <h1>{{biggerLen}}</h1>
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                <img src="../assets/callout.svg" alt="callout" class="w-50"/>
                <h2 class="font-weight-light">随心写作，自由表达</h2>
                <p>
                    <router-link to="/createPost" class="btn btn-primary my-2">开始写文章</router-link>
                </p>
                </div>
            </div>
        </section>
        <h4 class="font-weight-bold text-center">发现精彩</h4>
        <cloumn-list :list="list"></cloumn-list>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/store'
import CloumnList from '../components/ColumnList.vue'

export default defineComponent({
    setup () {
        const store = useStore<GlobalDataProps>()
        const list = computed(() => store.state.columns)
        const biggerLen = computed(() => store.getters.biggerColumnLen)
        return {
            list,
            biggerLen
        }
    },
    components: {
        CloumnList
    }
})
</script>

<style scoped>

</style>
