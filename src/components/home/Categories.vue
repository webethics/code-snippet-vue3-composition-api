<template>
  <nav class="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
    <div class="block sm:hidden">
      <a
        href="#"
        class="md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
      >
        Topics <i :class="open ? 'fa-chevron-down' : 'fa-chevron-up'" class="fas ml-2"></i>
      </a>
    </div>
    <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <form class="px-4">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Posts..."
            v-model="search"
            @input="searchPost"
          />
        </div>
      </form>
      <div
        class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2"
      >
        <template v-for="category in categories" :key="category.id">
          <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2"> {{ category.name }}</a>
        </template>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useCategoryStore } from '@store/category'
import { usePostStore } from '@store/post'

import { ref } from 'vue'
const { categories } = storeToRefs(useCategoryStore())
const { fetchCategories } = useCategoryStore()
const { fetchPosts } = usePostStore()
fetchCategories()
const search = ref(null)
const searchPost = () => {
  fetchPosts(search.value)
}
</script>
