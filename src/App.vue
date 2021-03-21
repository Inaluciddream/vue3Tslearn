<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <cloumn-list :list="list"></cloumn-list>
    <form>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址" type="text"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <validate-input :rules="passwordRules" v-model="password" type="password" placeholder="请输入密码"></validate-input>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import CloumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
const currentUser: UserProps = {
  isLogin: true,
  name: 'viking',
  id: 89757
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏, 有一段非常有意思的简介, 可以更新一下',
    avatar: 'https://img9.doubanio.com/view/photo/l/public/p2633531206.webp'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏, 有一段非常有意思的简介, 可以更新一下',
    avatar: 'https://img1.doubanio.com/view/photo/l/public/p2633209449.webp'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test1的专栏, 有一段非常有意思的简介, 可以更新一下'
    // avatar: 'https://img9.doubanio.com/view/photo/l/public/p2633531206.webp'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test2的专栏, 有一段非常有意思的简介, 可以更新一下',
    avatar: 'https://img1.doubanio.com/view/photo/l/public/p2633209449.webp'
  }
]

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: 'App',
  components: {
    CloumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const emailVal = ref('')
    const password = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid email'
      }
    }
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
      passwordRules,
      password
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
