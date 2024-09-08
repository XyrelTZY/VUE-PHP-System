<template>
  <div class="container mx-auto p-4 flex justify-center items-center flex-col border-gray border-[2px] w-[500px] bg-gray-400 rounded-lg mt-[8rem]">
    <h1 class="text-3xl font-bold mb-4 font-serif">Student Management</h1>
    <!-- Light & Dark Mode -->
    <div class="h-[40px] flex  items-center justify-center bg-gray-400 rounded-md">
    <div class="relative inline-block text-left ">
      <select id="theme-select" class="block appearance-none w-full bg-gray-400 border border-gray-300 rounded-md shadow-sm py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <option value="Light">Light Mode</option>
        <option value="Dark">Dark Mode</option>
      </select>
    </div>
  </div>
    <Student />
  </div>
</template>

<script setup>
import Student from './components/AddStudentForm.vue';
</script>

<style>
body{
  background: #f4f4f4;
  transition: all 0.5s ease-in-out;
}

#theme-select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8cGF0aCBkPSJNMTAgNi42QyAxMCA2LjEgMTAgNi42IDEwIDgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjY2xhc3M9InN0cm9rZS1saW5lIiBzdHJva2UtY29sb3I9ImJsYWNrIiAvPjwvc3ZnPg==');
      background-repeat: no-repeat;
      background-position: right 0.5rem center;
      background-size: 1.5em auto;
    }

    select::-ms-expand {
      display: none;
    }

  body:has(option[value="Dark"]:checked){
  background: #282828;
  }
</style>
