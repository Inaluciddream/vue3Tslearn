import { createStore } from 'vuex'
import { testData, testPosts } from '../testData'
export interface Userprops {
    isLogin: boolean;
    id?: number;
    name?: string;
    columnId?: number;
}
export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}
export interface PostProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    columnId: number;
}
export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: Userprops;
}
const store = createStore<GlobalDataProps>({
    state () {
        return {
            columns: testData,
            posts: testPosts,
            user: { isLogin: false }
        }
    },
    mutations: {
        login (state) {
            state.user = { ...state.user, isLogin: true, name: 'vikinging', columnId: 1 }
        },
        createPost (state, newPost) {
            state.posts.push(newPost)
        }
    },
    getters: {
        biggerColumnLen (state) {
            return state.columns.filter(col => col.id > 1).length
        },
        getPostsByCid: (state) => (cid: number) => {
            return state.posts.filter(post => post.columnId === cid)
        }
    }
})

export default store
