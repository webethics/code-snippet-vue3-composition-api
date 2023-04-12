import { defineStore } from 'pinia'
import moment from 'moment'
import api from '@/plugins/axios'

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {},
  actions: {
    async fetchPosts(q = null) {
      let url = `/posts`
      if (q) {
        url = `posts?q=${q}`
      }
      this.posts = []
      this.loading = true
      try {
        await api
          .get(`${url}`)
          .then((response) => {
            this.posts = response.data
            this.loading = false
          })
          .catch((error) => {
            console.log(error)
          })
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPostById(id = null) {
      this.post = null
      this.loading = true
      try {
        await api
          .get(`/posts/${id}`)
          .then((response) => {
            this.post = response.data
            this.loading = false
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        console.log(error)
      }
    },
    async storePost(payload: any) {
      payload.publish_on = moment().format('LL')
      try {
        await api.post('/posts', payload)
      } catch (error) {
        console.log(error)
      }
    },
    async updatePost(payload: any) {
      try {
        await api.put(`/posts/${payload.id}`, payload)
      } catch (error) {
        console.log(error)
      }
    },
    async deletePostById(id: number) {
      try {
        await api.delete(`/posts/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async resetPost() {
      this.post = null
    }
  }
})
