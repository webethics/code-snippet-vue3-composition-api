<template>
  <nav class="w-full py-4 bg-blue-800 shadow">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
      <nav>
        <ul
          class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline"
        >
          <li>
            <router-link to="/" class="hover:text-gray-200 hover:underline px-4">Home</router-link>
          </li>
          <li>
            <router-link to="/posts" class="hover:text-gray-200 hover:underline px-4"
              >Posts</router-link
            >
          </li>
          <li>
            <router-link to="/categories" class="hover:text-gray-200 hover:underline px-4"
              >Categories</router-link
            >
          </li>
          <li>
            <router-link to="/authors" class="hover:text-gray-200 hover:underline px-4"
              >Authors</router-link
            >
          </li>
          <li>
            <router-link to="/about" class="hover:text-gray-200 hover:underline px-4"
              >About</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="flex items-center text-lg no-underline text-white pr-6">
        <a class="" href="#">
          <i class="fab fa-facebook"></i>
        </a>
        <a class="pl-6" href="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a class="pl-6" href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="pl-6" href="#">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </nav>
</template>
