<template>
  <div
    class="w-screen container rounded-2xl bg-black flex flex-col dark:bg-slate-900/70"
  >
    <div class="flex justify-center">
      <Calendar />
    </div>

    <div class="flex-1 md:px-1 md:py-2">
      <div class="flex">
        <div class="p-3 flex">
          <input
            type="text"
            v-model="searchText"
            placeholder="ค้นหาตำแหน่งงาน..."
            class="px-3 py-1 border border-gray-300 rounded-md bg-black text-white h-10"
            @input="searchResultsByExam"
          />
        </div>

        <div class="p-3 flex">
          <label
            for="status"
            class="p-2 text-sm font-medium text-gray-900 dark:text-white"
            >เลือกสถานะ</label
          >
          <select
            id="status"
            class="ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="ALL">ทั้งหมด</option>
            <option value="ON">เปิดรับสมัคร</option>
            <option value="OFF">ปิดรับสมัคร</option>
          </select>
        </div>

        <div class="p-3 flex">
          <button
            @click="AddPopup = true"
            class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
          >
            เพิ่มข้อสอบ
          </button>
          <Add v-if="AddPopup" :result="AddPopup" @close="AddPopup = false" />
        </div>
      </div>

      <h1
        class="my-4 text-3xl text-center font-medium tracking-wider text-purple-700"
      >
        ข้อมูลการประกาศงาน
      </h1>

      <table class="w-24 mt-6">
        <thead>
          <tr>
            <th class="border border-gray-300 text-center px-2 py-2">ลำดับ</th>
            <th class="border border-gray-300 text-center px-2 py-2">รูป</th>
            <th class="border border-gray-300 text-center px-2 py-2 th-shorten">
              ผลสอบ
            </th>
            <th class="border border-gray-300 text-center px-2 py-2 th-shorten">
              คะแนน
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              วันที่สอบ
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              วันที่ประกาศผล
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(result, index) in results"
            :key="result._id"
            class="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
          >
            <td class="py-4 border border-gray-300 text-center table-cell">
              {{ index + 1 }}
            </td>
            <td class="py-4 border border-gray-300 text-center table-cell">
              <img
                :src="result.image"
                alt="Result Image"
                class="w-10 h-10 rounded-full"
              />
            </td>
            <td class="py-4 border border-gray-300 text-center table-cell">
              <span v-if="result.exam.length <= 24">{{ result.exam }}</span>
              <span v-else>{{ result.exam.slice(0, 21) }}... </span>
            </td>
            <td class="py-4 border border-gray-300 text-center table-cell">
              {{ result.score }}
            </td>
            <td class="py-4 border border-gray-300 text-center table-cell">
              {{ result.exam_date }}
            </td>
            <td class="py-4 border border-gray-300 text-center table-cell">
              {{ result.result_date }}
            </td>
            <td
              class="py-2 border border-gray-300 text-center space-x-2 table-cell"
            >
              <button
                @click="openDetailsPopup(result)"
                class="btn-details bg-blue-500 hover:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <View
                v-if="ShowPopup"
                :result="selectedResult"
                @close="ShowPopup = false"
              />
              <button
                @click="openEditModal(result)"
                class="btn-edit bg-yellow-500 hover:bg-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 17L21 12 16 7"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7l-5 5 5 5"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h
                      13"
                  />
                </svg>
              </button>
              <Edit
                v-if="EditPopup"
                :result="ResultToEdit"
                @close="EditPopup = false"
              />
              <button
                @click="deleteResult(result)"
                class="btn-delete bg-red-500 hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div class="justify-between items-center block md:flex">
          <div class="flex items-center justify-center">
            <small>หน้า 1 จาก {{ results.length }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import Calendar from "./Calendar.vue";

export default {
  components: {
    Calendar,
  },
  setup() {
    const results = ref([]);
    const searchText = ref("");
    const ShowPopup = ref(false);
    const AddPopup = ref(false);
    const EditPopup = ref(false);
    const ResultToEdit = ref(null);
    const selectedResult = ref(null);

    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_RESULTS}/results`
        );
        if (
          response.status === 200 &&
          response.data &&
          Array.isArray(response.data.data)
        ) {
          results.value = response.data.data;
        } else {
          console.error(
            "Invalid response format or empty data array:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching results:", error);
        // Set results to an empty array in case of error
        results.value = [];
      }
    };

    onMounted(async () => {
      await fetchResults();
    });

    const togglePopup = () => {
      AddPopup.value = !AddPopup.value;
    };

    const openEditModal = (result) => {
      ResultToEdit.value = result;
      EditPopup.value = true;
    };

    const handleClose = () => {
      ShowPopup.value = false;
    };

    const deletef = async (result) => {
      Swal.fire({
        title: "ยืนยันการลบ",
        text: "คุณแน่ใจหรือไม่ที่จะลบข้อมูล?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteResult(result);
        }
      });
    };

    const deleteResult = async (result) => {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_RESULTS}/results/delete-result/${
            result._id
          }`
        );
        Swal.fire("ลบแล้ว!", "ข้อมูลถูกลบออกสำเร็จ", "success");
        results.value = results.value.filter((item) => item._id !== result._id);
      } catch (error) {
        console.error("Error deleting data:", error);
        Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถลบข้อมูลได้", "error");
      }
    };

    const searchResultsByExam = () => {
      if (searchText.value.trim()) {
        const filteredResults = results.value.filter((result) =>
          result.exam.includes(searchText.value)
        );
        results.value = filteredResults;
      } else {
        fetchResults();
      }
    };

    const openDetailsPopup = (result) => {
      selectedResult.value = result;
      ShowPopup.value = true;
    };

    return {
      results,
      searchText,
      ShowPopup,
      AddPopup,
      EditPopup,
      ResultToEdit,
      selectedResult,
      fetchResults,
      togglePopup,
      openEditModal,
      handleClose,
      deletef,
      deleteResult,
      searchResultsByExam,
      openDetailsPopup,
    };
  },
};
</script>

<style>
/* Add this style block to your component */
.table-cell {
  padding: 10px; /* Adjust the padding as needed */
}

/* Add this style block to your component */
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scrollable {
  flex: 1; /* ทำให้ตารางขยายตามขนาดรายการ */
  overflow-y: scroll; /* เพิ่มการเลื่อนแนวตั้งเมื่อรายการมีขนาดใหญ่กว่า */
  overflow-x: auto; /* เพิ่มการเลื่อนแนวนอนเมื่อรายการมีขนาดใหญ่กว่า */
}
</style>
