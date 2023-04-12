<template>
  <div class="flex w-full">
    <div class="shadow-sm w-full">
      <div class="p-3">
        <form class="w-full" @submit.prevent="">
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full px-3 mt-6 md:mb-0">
              <labelf
                class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                for="grid-city"
              >
                Name
              </labelf>

              <input
                class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
                v-model="form.name"
                @blur="v$.name.$touch"
              />
              <p class="mt-2 text-red-600" v-for="error in v$.name.$errors" :key="error.$uid">
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
              @click.prevent="saveAuthor"
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
import { useAuthorStore } from '@store/author'
const { storeAuthor, fetchAuthors, updateAuthor } = useAuthorStore()
const emit = defineEmits('close')

const props = defineProps({
  author: { type: Object, default: () => {} }
})

const form = reactive({
  id: props.author?.id || null,
  name: props.author?.name || null
})

const rules = {
  name: { required }
}

const v$ = useVuelidate(rules, form)

const saveAuthor = async () => {
  const result = await v$.value.$validate()
  if (result) {
    if (form.id) {
      await updateAuthor({ ...form })
    } else {
      await storeAuthor({ ...form })
    }
    emit('close')
    await fetchAuthors()
  }
}
</script>
