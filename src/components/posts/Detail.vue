<template>
  <section class="w-full md:w-2/3 flex flex-col items-center px-3" v-if="post">
    <article class="flex flex-col shadow my-4 w-full">
      <a href="#" class="hover:opacity-75">
        <img :src="post.image_url" @error="showImageOnError" class="w-full" />
      </a>
      <div class="bg-white flex flex-col justify-start p-6">
        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">{{ post.category }}</a>
        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{ post.title }}</a>
        <p href="#" class="text-sm pb-3">
          By <a href="#" class="font-semibold hover:text-gray-800">{{ post.author }} </a>, Published
          on {{ post.publish_on }}
        </p>
        <a href="#" class="pb-6">{{ post.description }}</a>
      </div>
    </article>
  </section>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { usePostStore } from '@store/post'
import { useRoute } from 'vue-router'
const { post } = storeToRefs(usePostStore())

const { fetchPostById } = usePostStore()
const route = useRoute()

fetchPostById(route.params.id)

const showImageOnError = (event) => {
  event.target.src =
    'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71'
}
</script>
