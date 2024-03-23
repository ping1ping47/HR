<template>
  <div class="rounded-2xl bg-black flex flex-col dark:bg-slate-900/70">
    <div class="flex-1">
      <div class="p-3">
        <input
          type="text"
          v-model="searchText"
          placeholder="ค้นหาข้อสอบ..."
          class="px-3 py-1 border border-gray-300 rounded-md bg-black text-white"
        />
      </div>

      <div class="col-span-1 sm:col-span-1">
        <label
          for="category"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >เลือกตำแน่ง</label
        >
        <select
          id="category"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-36 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        >
          <option value="ON">ทั้งหมด</option>
          <option value="OFF">ปิด</option>
        </select>
      </div>
      <div class="flex flex-col items-start justify-center p-3 min-h-full">
        <h1
          class="my-4 text-3xl text-center font-medium tracking-wider text-purple-700"
        >
          ข้อมูล(ข้อสอบ)
        </h1>

        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <button
            @click="togglePopup"
            class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
          >
            แสดงป๊อปอัพ
          </button>

          <Popup v-if="showPopup">
            <!-- <p>สวัสดี! นี่คือเนื้อหาในป๊อปอัพ</p> -->
          </Popup>
        </div>

        <table class="w-full mt-6">
          <thead>
            <tr>
              <th>#</th>
              <th>Exam ID</th>
              <th>Extape ID</th>
              <th>Question 1</th>
              <th>Question 2</th>
              <th>Question 3</th>
              <th>Choice 1</th>
              <th>Choice 1 Point</th>
              <th>Choice 2</th>
              <th>Choice 2 Point</th>
              <th>Choice 3</th>
              <th>Choice 3 Point</th>
              <th>Choice 4</th>
              <th>Correct Answer</th>
              <th>Exam Mode ID</th>
              <th>Status Question</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(exam, index) in exams"
              :key="exam._id"
              class="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              <td class="py-4">{{ index + 1 }}</td>
              <td class="py-4">{{ exam.exam_id }}</td>
              <td class="py-4">{{ exam.extype_id }}</td>
              <td class="py-4">{{ exam.question_1 }}</td>
              <td class="py-4">{{ exam.question_2 }}</td>
              <td class="py-4">{{ exam.question_3 }}</td>
              <td class="py-4">{{ exam.c1 }}</td>
              <td class="py-4">{{ exam.c1_point }}</td>
              <td class="py-4">{{ exam.c2 }}</td>
              <td class="py-4">{{ exam.c2_point }}</td>
              <td class="py-4">{{ exam.c3 }}</td>
              <td class="py-4">{{ exam.c3_point }}</td>
              <td class="py-4">{{ exam.c4 }}</td>
              <td class="py-4">{{ exam.cr_answer }}</td>
              <td class="py-4">{{ exam.em_id }}</td>
              <td class="py-4">{{ exam.statusquestion }}</td>
              <td class="py-4 space-x-2">
                <button
                  @click="openEditModal(exam)"
                  class="btn-edit bg-green-500 hover:bg-green-600"
                >
                  แก้ไข
                </button>
                <button
                  @click="deletef(exam)"
                  class="btn-delete bg-red-500 hover:bg-red-600"
                >
                  ลบ
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div class="justify-between items-center block md:flex">
          <div class="flex items-center justify-center">
            <small>Page 1 of {{ exams.length }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import Popup from "./ExamAdd.vue";

export default {
  components: {
    Popup,
  },
  data() {
    return {
      exams: [],
      searchText: "",
      showPopup: false,
      isDeleteModalOpen: false, // Define the property in the data object
    };
  },
  mounted() {
    this.fetchExams();
  },
  methods: {
    async fetchExams() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_EXAM}/exam`
        );
        if (response.data && Array.isArray(response.data.data)) {
          this.exams = response.data.data;
        } else {
          console.error("Response data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    async deletef(exam) {
      Swal.fire({
        title: "Confirm Delete",
        text: "Are you sure you want to delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteExam(exam); // เรียกใช้งาน deleteExam เมื่อผู้ใช้ยืนยันการลบ
        }
      });
    },
    async deleteExam(exam) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_EXAM}/exam/delete-exam/${exam._id}`
        );

        // หลังจากการลบสำเร็จ คุณสามารถปรับปรุงหรือดำเนินการใด ๆ ต่อไปได้ตามต้องการ
        Swal.fire("Deleted!", "Data has been deleted successfully", "success");

        // อัพเดตรายการข้อสอบโดยการลบข้อสอบที่ถูกลบออกจากรายการที่แสดงผล
        this.exams = this.exams.filter((item) => item._id !== exam._id);
      } catch (error) {
        console.error("Error deleting data:", error);
        Swal.fire("Error!", "Failed to delete data", "error");
      }
    },
  },
};
</script>