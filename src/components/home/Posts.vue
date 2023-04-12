<template>
  <section class="w-full md:w-2/3 flex flex-col items-center px-3">
    <p class="flex flex-row justify-center align-middle mt-2 font-bold" v-if="loading">
      Posts Loading ...
    </p>
    <template v-for="post in posts" :key="post.id" v-else>
      <article class="flex flex-col shadow my-4 w-full">
        <a href="#" class="hover:opacity-75">
          <img :src="post.image_url" @error="showImageOnError" class="w-full" />
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
          <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">{{ post.category }}</a>
          <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{ post.title }}</a>
          <p href="#" class="text-sm pb-3">
            By <a href="#" class="font-semibold hover:text-gray-800">{{ post.author }} </a>,
            Published on {{ post.publish_on }}
          </p>
          <a href="#" class="pb-6">{{ post.description.substring(0, 400) }}</a>
          <router-link
            :to="{ name: 'post.details', params: { id: post.id } }"
            class="uppercase text-blue-600"
            >Continue Reading ... <i class="fas fa-arrow-right"></i
          ></router-link>
        </div>
      </article>
    </template>

    <!-- Pagination -->
    <!-- <div class="flex items-center py-8">
      <a
        href="#"
        class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
        >1</a
      >
      <a
        href="#"
        class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
        >2</a
      >
      <a
        href="#"
        class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
        >Next <i class="fas fa-arrow-right ml-2"></i
      ></a>
    </div> -->
  </section>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { usePostStore } from '@store/post'
const { posts, loading } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()
fetchPosts()
const showImageOnError = (event) => {
  event.target.src =
    'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71'
}
</script>
