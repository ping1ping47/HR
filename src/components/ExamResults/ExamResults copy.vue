<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="flex-1 md:px-1 md:py-2">
      <h1
        class="my-4 text-3xl flex justify-center font-medium tracking-wider text-purple-700 items-center"
      >
        ประกาศสมัครงาน
      </h1>

      <div
        class="rounded-lg shadow-lg p-4 flex flex-col justify-center items-center"
      >
        <Calendar />
        <h1 class="text-lg font-bold mt-4">กราฟวิเคราะจำนวนผู้สมัคร</h1>
      </div>
    </div>

    <div class="flex">
      <div class="p-3 flex">
        <input
          type="text"
          v-model="searchText"
          placeholder="ค้นหาตำแหน่งงาน..."
          class="px-3 py-1 border border-gray-300 rounded-md h-10"
          @input="searchExamResultsById"
        />
      </div>

      <div class="p-3 flex">
        <label for="status" class="p-2 text-sm font-medium">เลือกสถานะ</label>
        <select
          id="status"
          class="ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        >
          <option value="ALL">ทั้งหมด</option>
          <option value="ON">เปิด</option>
          <option value="OFF">ปิด</option>
        </select>
      </div>

      <div class="p-3 flex">
        <button
          @click="AddPopup = true"
          class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
        >
          เพิ่มข้อสอบ
        </button>
        <Add v-if="AddPopup" :post="AddPopup" @close="AddPopup = false" />
      </div>
    </div>

    <table class="w-auto mt-6">
      <thead>
        <tr>
          <th class="border border-gray-300 text-center px-2 py-2">ลำดับ</th>
          <th class="border border-gray-300 text-center px-2 py-2">ผู้ใช้</th>
          <th class="border border-gray-300 text-center px-2 py-2 th-shorten">
            ผลการสอบ
          </th>
          <th class="border border-gray-300 text-center px-2 py-2">คะแนน</th>
          <th class="border border-gray-300 text-center px-2 py-2">
            วันที่สอบ
          </th>
          <th class="border border-gray-300 text-center px-2 py-2">
            วันที่นัด
          </th>
          <th class="border border-gray-300 text-center px-2 py-2">สถานะ</th>
          <th class="border border-gray-300 text-center px-2 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(result, index) in examResults"
          :key="result._id"
          class="border-b border-gray-200 hover:bg-gray-100"
        >
          <td class="py-4 border border-gray-300 text-center">
            {{ index + 1 }}
          </td>
          <td class="py-4 border border-gray-300 text-center">
            {{ result.user_name }}
          </td>
          <td class="py-4 border border-gray-300 text-center">
            {{ result.results }}
          </td>
          <td class="py-4 border border-gray-300 text-center">
            {{ result.score }}
          </td>
          <td class="py-4 border border-gray-300 text-center">
            {{ result.exam_at }}
          </td>
          <td class="py-4 border border-gray-300 text-center">
            {{ result.meeting_at }}
          </td>
          <td class="py-4 border border-gray-300 text-center">
            {{ result.status }}
          </td>
          <td class="py-4 border border-gray-300 text-center space-x-2">
            <button
              @click="openDetailsPopup(result)"
              class="btn-details bg-blue-500 hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white p-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 00-.553.168l-5 3A1 1 0 004 6v5a1 1 0 00.447.832l5 3a1 1 0 001.106 0l5-3A1 1 0 0016 11V6a1 1 0 00-.447-.832l-5-3A1 1 0 0010 2zM6 7.236v5.528L9.037 10 6 7.236z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <View
              v-if="ShowPopup"
              :post="selectedPost"
              @close="ShowPopup = false"
            />
            <button
              @click="openEditModal(result)"
              class="btn-edit bg-yellow-500 hover:bg-yellow-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white p-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 12.707a1 1 0 010-1.414L13.586 3H11a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 01-2 0V5.414l-8.293 8.293a1 1 0 01-1.414 0zM18 17a1 1 0 01-1 1H3a1 1 0 01-1-1v-6a1 1 0 011-1h10zm-5 2a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm-3 0a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm6-1a1 1 0 011 1h1a1 1 0 110 2h-1a1 1 0 01-1-1V9a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <Edit
              v-if="EditPopup"
              :post="PostToEdit"
              @close="EditPopup = false"
            />
            <button
              @click="deleteExamResults(result)"
              class="btn-delete bg-red-500 hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white p-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a1 1 0 011-1h8a1 1 0 011 1v1h2a1 1 0 110 2H3a1 1 0 110-2h2V4zm10 4a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h10zm-5 2a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm-3 0a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm6-1a1 1 0 011 1h1a1 1 0 110 2h-1a1 1 0 01-1-1V9a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="p-3 lg:px-6 border-t border-gray-100">
      <div class="justify-between items-center block md:flex">
        <div class="flex items-center justify-center">
          <small>หน้า 1 จาก {{ examResults.length }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
// import Add from "./ResultAdd.vue";
// import Edit from "./ResultEdit.vue";
// import View from "./ResultView.vue";
import Calendar from "./Calendar.vue";
export default {
  components: {
    // Add,
    // Edit,
    // View,
    Calendar,
  },
  data() {
    return {
      examResults: [],
      searchText: "",
      // ShowPopup: false,
      // AddPopup: false,
      // EditPopup: false,
      // PostToEdit: null,
      isDeleteModalOpen: false,
      selectedPost: null,
    };
  },
  mounted() {
    this.fetchExamResults();
    // โดยเพิ่มเงื่อนไขตรวจสอบหาก this.examResults ไม่มีข้อมูล ให้เรียกใช้ fetchExamResults อีกครั้ง
    if (this.examResults.length === 0) {
      this.fetchExamResults();
    }
  },
  props: {
    post: Object,
  },
  methods: {
    async fetchExamResults() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_POST}/examresults`
        );
        if (response.data && Array.isArray(response.data.data)) {
          this.examResults = response.data.data;
        } else {
          console.error("Response data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching exam results:", error);
      }
    },
    // togglePopup() {
    //   this.AddPopup = !this.AddPopup;
    // },
    // openEditModal(result) {
    //   this.PostToEdit = result;
    //   this.EditPopup = true;
    // },
    handleClose() {
      this.$emit("close");
    },
    async deletef(result) {
      Swal.fire({
        title: "ยืนยันการลบ",
        text: "คุณแน่ใจหรือไม่ที่จะลบข้อมูล?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6B7280",
        cancelButtonColor: "#EF4444",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteExamResults(result);
        }
      });
    },
    async deleteExamResults(result) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_POST}/exam-results/delete-result/${
            result._id
          }`
        );
        Swal.fire("ลบแล้ว!", "ข้อมูลถูกลบออกสำเร็จ", "success");
        this.examResults = this.examResults.filter(
          (item) => item._id !== result._id
        );
      } catch (error) {
        console.error("Error deleting data:", error);
        Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถลบข้อมูลได้", "error");
      }
    },
    searchExamResultsById() {
      if (this.searchText.trim()) {
        const filteredResults = this.examResults.filter((result) =>
          result.id.includes(this.searchText)
        );
        this.examResults = filteredResults;
      } else {
        this.fetchExamResults();
      }
    },
    // openDetailsPopup(result) {
    //   this.selectedPost = result;
    //   this.ShowPopup = true;
    // },
  },
};
</script>
