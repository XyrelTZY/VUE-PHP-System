<template>
    <div class="p-4">
      <form @submit.prevent="submitForm" class="space-y-4 w-full">
        <div>
          <label class="block text-sm font-medium text-gray-700 ">Full Name</label>
          <input v-model="student.fullName" type="text" required class="mt-1 p-2 border-b border-black bg-transparent outline-none w-[400px]"/>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 ">Track</label>
          <input v-model="student.track" type="text" required class="mt-1 p-2 border-b border-black bg-transparent outline-none w-[400px]"/>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 ">Section</label>
          <input v-model="student.section" type="text" required class="mt-1 p-2 border-b border-black bg-transparent outline-none w-[400px]"/>
        </div>
        <button type="submit" class="bg-blue-500  p-2 rounded text-center text-black font-bold font-serif w-[400px] active:scale-[0.95]">Add Student</button>
        <div v-if="message" class="mt-4 text-red-500">{{ message }}</div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        student: {
          fullName: '',
          track: '',
          section: ''
        },
        message: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch('http://localhost/backend/add-student.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.student),
          });
  
          const result = await response.json();
          if (result.status === 'success') {
            alert('Student added successfully!');
            this.student = { fullName: '', track: '', section: '' };
          } else {
            this.message = 'Failed to add student: ' + result.message;
          }
        } catch (error) {
          console.error('Error:', error);
          this.message = 'An error occurred.';
        }
      }
    }
  };
  </script>
  