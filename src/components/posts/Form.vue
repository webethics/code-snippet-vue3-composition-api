<template>
  <div class="flex w-full">
    <div class="shadow-sm w-full">
      <div class="p-3">
        <form class="w-full" @submit.prevent="">
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full px-3 mt-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                for="grid-city"
              >
                Title
              </label>

              <input
                class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
                v-model="form.title"
                @blur="v$.title.$touch"
              />
              <p class="mt-2 text-red-600" v-for="error in v$.title.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
            <div class="w-full px-3 mt-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                for="grid-city"
              >
                Description
              </label>
              <textarea
                class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
                rows="5"
                cols="3"
                v-model="form.description"
                @blur="v$.description.$touch"
              />
              <p
                class="mt-2 text-red-600"
                v-for="error in v$.description.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </p>
            </div>
            <div class="w-full px-3 mt-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                for="grid-state"
              >
                Category
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-grey-200 border border-grey-200 text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="grid-state"
                  v-model="form.category"
                >
                  <option v-for="category in categories" :key="category.id">
                    {{ category.name }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grey-darker"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p class="mt-2 text-red-600" v-for="error in v$.category.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
            <div class="w-full px-3 mt-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                for="grid-state"
              >
                Author
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-grey-200 border border-grey-200 text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="grid-state"
                  v-model="form.author"
                  @blur="v$.author.$touch"
                >
                  <option v-for="author in authors" :key="author.id">{{ author.name }}</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grey-darker"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    ></path>
                  </svg>
                </div>
                <p class="mt-2 text-red-600" v-for="error in v$.author.$errors" :key="error.$uid">
                  {{ error.$message }}
                </p>
              </div>
            </div>
            <div class="w-full px-3 mt-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                for="grid-zip"
              >
                Image URL
              </label>
              <input
                class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="grid-zip"
                type="text"
                placeholder="90210"
                v-model="form.image_url"
                @blur="v$.image_url.$touch"
              />
              <p class="mt-2 text-red-600" v-for="error in v$.image_url.$errors" :key="error.$uid">
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div class="flex flex-row justify-end mt-5">
            <button
              class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
              @click.prevent="$emit('close')"
            >
              Cancel
            </button>
            <button
              class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded"
              type="button"
              @click.prevent="savePost"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, defineEmits } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { usePostStore } from '@store/post'
const { storePost, fetchPosts, updatePost } = usePostStore()
const emit = defineEmits('close')

const props = defineProps({
  categories: { type: Array, default: () => [] },
  authors: { type: Array, default: () => [] },
  post: { type: Object, default: () => {} }
})

const form = reactive({
  id: props.post?.id || null,
  title: props.post?.title || null,
  description: props.post?.description || null,
  image_url: props.post?.image_url || null,
  author: props.post?.author || null,
  category: props.post?.category || null,
  publish_on: props.post?.publish_on || null
})

const rules = {
  title: { required },
  description: { required },
  image_url: { required },
  author: { required },
  category: { required }
}

const v$ = useVuelidate(rules, form)

const savePost = async () => {
  const result = await v$.value.$validate()
  if (result) {
    if (form.id) {
      await updatePost({ ...form })
    } else {
      await storePost({ ...form })
    }
    emit('close')
    await fetchPosts()
  }
}
</script>
