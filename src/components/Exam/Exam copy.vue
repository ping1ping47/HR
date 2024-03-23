<template>
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-4">Exam Data</h1>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam ID</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam Type ID</th>
            <!-- Add more headers for each field in your schema -->
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question 1</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question 2</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question 3</th>
            <!-- Add more headers for each field in your schema -->
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="exam in exams" :key="exam._id">
            <td class="px-6 py-4 whitespace-nowrap">{{ exam.exam_id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ exam.extype_id }}</td>
            <!-- Add more columns for each field in your schema -->
            <td class="px-6 py-4 whitespace-nowrap">{{ exam.question_1 }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ exam.question_2 }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ exam.question_3 }}</td>
            <!-- Add more columns for each field in your schema -->
            <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(exam.date_post) }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(exam.update_at) }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ exam.statusquestion }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <!-- Add actions buttons, like edit, delete, etc. -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        exams: []
      };
    },
    async mounted() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_EXAM}/exam`);
        this.exams = response.data;
      } catch (error) {
        console.error('Error fetching exam data:', error);
      }
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleString();
      }
    }
  };
  </script>
  