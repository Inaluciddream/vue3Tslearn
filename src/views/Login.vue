<template>
    <div class="login-page mx-auto p-3 w-330">
        <h5 class="my-4 text-center">登录到者也</h5>
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3 row">
                <label class="form-label col-sm-2">邮箱地址</label>
                <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址" type="text"></validate-input>
            </div>
            <div class="mb-3 row">
                <label for="exampleInputPassword1" class="form-label col-sm-2">Password</label>
                <validate-input :rules="passwordRules" v-model="password" type="password" placeholder="请输入密码"></validate-input>
            </div>
            <template #submit>
                <button class="btn btn-primary">登录</button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
export default defineComponent({
    setup () {
        const router = useRouter()
        const store = useStore()
        const emailVal = ref('')
        const password = ref('')
        const emailRules: RulesProp = [
            { type: 'required', message: '电子邮箱地址不能为空' },
            { type: 'email', message: '请输入正确的电子邮箱格式' }
        ]
        const passwordRules: RulesProp = [
            { type: 'required', message: '密码不能为空' }
        ]
        const onFormSubmit = (result: boolean) => {
            if (result) {
                router.push('/')
                store.commit('login')
            }
        }
        return {
            emailVal,
            password,
            emailRules,
            passwordRules,
            onFormSubmit
        }
    },
    components: {
        ValidateForm,
        ValidateInput
    }
})
</script>

<style scoped>

</style>
