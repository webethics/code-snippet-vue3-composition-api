import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useAuthorStore = defineStore({
  id: 'authors',
  state: () => ({
    authors: [],
    author: null,
    loading: false,
    error: null
  }),
  getters: {},
  actions: {
    async fetchAuthors() {
      this.authors = []
      this.loading = true
      try {
        await api
          .get(`authors`)
          .then((response) => {
            this.authors = response.data
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
    async fetchAuthorById(id = null) {
      this.author = null
      this.loading = true
      try {
        await api
          .get(`/authors/${id}`)
          .then((response) => {
            this.author = response.data
            this.loading = false
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        console.log(error)
      }
    },
    async storeAuthor(payload: any) {
      try {
        await api.post('/authors', payload)
      } catch (error) {
        console.log(error)
      }
    },
    async updateAuthor(payload: any) {
      try {
        await api.put(`/authors/${payload.id}`, payload)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteAuthorById(id: number) {
      try {
        await api.delete(`/authors/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async resetAuthor() {
      this.author = null
    }
  }
})
