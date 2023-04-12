import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({
    categories: [],
    category: null,
    loading: false,
    error: null
  }),
  getters: {},
  actions: {
    async fetchCategories() {
      this.categories = []
      this.loading = true
      await api
        .get(`categories`)
        .then((response) => {
          this.categories = response.data
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async fetchCategoryById(id: number) {
      this.category = null
      this.loading = true
      try {
        await api
          .get(`/categories/${id}`)
          .then((response) => {
            this.category = response.data
            this.loading = false
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        console.log(error)
      }
    },
    async storeCategory(payload: any) {
      try {
        await api.post('/categories', payload)
      } catch (error) {
        console.log(error)
      }
    },
    async updateCategory(payload: any) {
      try {
        await api.put(`/categories/${payload.id}`, payload)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteCategoryById(id: number) {
      try {
        await api.delete(`/categories/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async resetCategory() {
      this.category = null
    }
  }
})
