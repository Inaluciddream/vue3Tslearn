<template>
    <div class="post-detail-page">
        <!-- <modal title="删除文章" :visible="modalIsVisible"
            @modal-on-close="modalIsVisible = false"
            @modal-on-confirm="hideAndDelete"
        >
            <p>确定要删除这篇文章吗？</p>
        </modal>
        <article class="w-75 mx-auto mb-5 pb-3" v-if="currentPost">
            <img :src="currentImageUrl" alt="currentPost.title" class="rounded-lg img-fluid my-4" v-if="currentImageUrl">
            <h2 class="mb-4">{{currentPost.title}}</h2>
            <div class="user-profile-component border-top border-bottom py-3 mb-5 align-items-center row g-0">
                <div class="col">
                <user-profile :user="currentPost.author" v-if="typeof currentPost.author === 'object'"></user-profile>
                </div>
                <span class="text-muted col text-right font-italic">发表于：{{currentPost.createdAt}}</span>
            </div>
            <div v-html="currentHTML"></div>
                <div v-if="showEditArea" class="btn-group mt-5">
                <router-link
                    type="button"
                    class="btn btn-success"
                    :to="{name: 'create', query: { id: currentPost._id}}"
                >
                    编辑
                </router-link>
                <button type="button" class="btn btn-danger" @click.prevent="modalIsVisible = true">删除</button>
            </div>
        </article> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>
