<template>
    <div class="create-post-page">
        <h4>{{isEditMode ? '编辑文章' : '新建文章'}}</h4>
        <!-- <uploader
            action="/upload"
            :beforeUpload="uploadCheck"
            @file-uploaded="handleFileUploaded"
            :uploaded="uploadedData"
            class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
        >
            <h2>点击上传头图</h2>
            <template #loading>
                <div class="d-flex">
                    <div class="spinner-border text-secondary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <h2>正在上传</h2>
                </div>
            </template>
            <template #uploaded="dataProps">
                <div class="uploaded-area">
                    <img :src="dataProps.uploadedData.data.url">
                    <h3>点击重新上传</h3>
                </div>
            </template>
        </uploader> -->
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3 row">
                <label class="form-label col-sm-2">文章标题：</label>
                <validate-input
                    :rules="titleRules"
                    v-model="titleVal"
                    placeholder="请输入文章标题"
                    type="text"
                    class="col-sm-10"
                />
            </div>
            <div class="mb-3 row">
                <label class="form-label col-sm-2">文章详情：</label>
                <validate-input
                    rows="10"
                    tag="textarea"
                    placeholder="请输入文章详情"
                    :rules="contentRules"
                    v-model="contentVal"
                    class="col-sm-10"
                />
            </div>
            <template #submit>
                <button class="btn btn-primary btn-large">{{isEditMode ? '更新文章' : '发表文章'}}
                </button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { GlobalDataProps, PostProps } from '../store/store'
import { useStore } from 'vuex'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
export default defineComponent({
    setup () {
        const router = useRouter()
        const store = useStore<GlobalDataProps>()
        const isEditMode = false
        const titleVal = ref('')
        const titleRules: RulesProp = [
            { type: 'required', message: '请输入标题' }
        ]
        const contentVal = ref('')
        const contentRules: RulesProp = [
            { type: 'required', message: '请输入文章详情' }
        ]
        const onFormSubmit = (result: boolean) => {
            if (result) {
                const { columnId } = store.state.user
                if (columnId) {
                    const newPost: PostProps = {
                        id: new Date().getTime(),
                        title: titleVal.value,
                        content: contentVal.value,
                        columnId,
                        createdAt: new Date().toLocaleString()
                    }
                    store.commit('createPost', newPost)
                    console.log(columnId)
                    router.push(`/column/${columnId}`)
                }
            }
        }
        return {
            isEditMode,
            titleVal,
            titleRules,
            contentVal,
            contentRules,
            onFormSubmit
        }
    },
    components: {
        ValidateInput,
        ValidateForm
    }
})
</script>

<style scoped>
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
