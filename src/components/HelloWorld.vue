<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template class="bg-red-700">
  <h1>{{ msg }}</h1>

  <div class="card flex justify-between items-center " >
    <button type="button" @click="count++" class="bg-gray-800 p-3  rounded-full shadow-md shadow-current bg-gradient-to-tr transition ease-in-out duration-300 hover:bg-zinc-600 text-white">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
