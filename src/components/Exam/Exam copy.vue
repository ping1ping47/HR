<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="flex-1 md:px-1 md:py-2">
      <h1
        class="my-4 text-3xl flex justify-center font-medium tracking-wider text-purple-700"
      >
        ข้อมูลข้อสอบ
      </h1>
      <div class="flex justify-center items-center space-x-3">
        <div class="flex items-center">
          <input
            type="text"
            v-model="searchText"
            placeholder="ค้นหาตำแหน่งงาน..."
            class="px-3 py-1 border border-gray-300 rounded-md h-10"
            @input="searchExamById"
          />
        </div>
        <div class="flex items-center">
          <label for="status" class="text-sm font-medium">เลือกตำแหน่ง</label>
          <select
            v-model="selectedExtTypeId"
            id="status"
            class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            @change="fetchPositionById"
          >
            <option value="ALL">ทั้งหมด</option>
            <option
              v-for="position in positions"
              :key="position.extype_id"
              :value="position.extype_id"
            >
              {{ position.extype_name }}
            </option>
          </select>
        </div>

        <div>
          <button
            @click="togglePopup"
            class="btn-add bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
          >
            เพิ่มข้อสอบ
          </button>
          <Add v-if="AddPopup" :exam="AddPopup" @close="AddPopup = false" />
        </div>
      </div>

      <table class="w-full mt-6">
        <thead>
          <tr>
            <th class="border border-gray-300 text-center px-2 py-2">ลำดับ</th>
            <th class="border border-gray-300 text-center px-2 py-2">
              รหัสข้อสอบ
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              รหัสประเภท
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              รายละเอียด 1
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              รายละเอียด 2
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              รายละเอียด 3
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">ข้อ 1</th>
            <th class="border border-gray-300 text-center px-2 py-2">
              คะแนนข้อ 1
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">ข้อ 2</th>
            <th class="border border-gray-300 text-center px-2 py-2">
              คะแนนข้อ 2
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">ข้อ 3</th>
            <th class="border border-gray-300 text-center px-2 py-2">
              คะแนนข้อ 3
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">ข้อ 4</th>
            <th class="border border-gray-300 text-center px-2 py-2">
              คะแนนข้อ 4
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              คำตอบที่ถูก
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              รหัสพนักงาน
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">สถานะ</th>
            <th class="border border-gray-300 text-center px-2 py-2">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(exam, index) in exams"
            :key="exam._id"
            class="border-b border-gray-200 hover:bg-gray-100"
          >
            <td class="py-4 border border-gray-300 table-cell">
              {{ index + 1 }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.exam_id }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.extype_id }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              <span v-if="exam.question_1 && exam.question_1.length <= 24">{{
                exam.question_1.length
              }}</span>
              <span v-else>{{
                exam.question_1 ? exam.question_1.slice(0, 21) + "..." : ""
              }}</span>
            </td>

            <td class="py-4 border border-gray-300 table-cell">
              <span v-if="exam.question_2 && exam.question_2.length <= 24">{{
                exam.question_2.length
              }}</span>
              <span v-else>{{
                exam.question_2 ? exam.question_2.slice(0, 21) + "..." : ""
              }}</span>
            </td>

            <td class="py-4 border border-gray-300 table-cell">
              <span v-if="exam.question_3 && exam.question_3.length <= 24">{{
                exam.question_3.length
              }}</span>
              <span v-else>{{
                exam.question_3 ? exam.question_3.slice(0, 21) + "..." : ""
              }}</span>
            </td>

            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.c1 }}
            </td>
            <td class="py-4 border border-gray-300table-cell">
              {{ exam.c1_point }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.c2 }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.c2_point }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.c3 }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.c3_point }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.c4 }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.c4_point }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.cr_answer }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.em_id }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              {{ exam.statusquestion }}
            </td>
            <td class="py-4 border border-gray-300 table-cell">
              <button
                @click="openDetailsPopup(exam)"
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
                :exam="selectedExam"
                @close="ShowPopup = false"
              />
              <button
                @click="openEditModal(exam)"
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
                    d="M9 12h13"
                  />
                </svg>
              </button>
              <Edit v-if="EditPopup" @close="EditPopup = false" />
              <button
                @click="deletef(exam)"
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

      <div class="p-3 lg:px-6 border-t border-gray-100">
        <div class="justify-between items-center block md:flex">
          <div class="flex items-center justify-center">
            <small>หน้า 1 จาก {{ exams.length }}</small>
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
import Add from "./ExamAdd.vue";
import Edit from "./ExamEdit.vue";
import View from "./ExamView.vue";

export default {
  components: {
    Add,
    Edit,
    View,
  },

  mounted() {
    this.fetchExams(); // Corrected function name
    // โดยเพิ่มเงื่อนไขตรวจสอบหาก this.posts ไม่มีข้อมูล ให้เรียกใช้ fetchExams อีกครั้ง
    if (this.exams.length === 0) {
      this.fetchExams(); // Corrected function name
    }
  },

  setup() {
    const exams = ref([]);
    const originalExams = ref([]);
    const searchText = ref("");
    const ShowPopup = ref(false);
    const AddPopup = ref(false);
    const EditPopup = ref(false);
    const selectedExam = ref(null);
    const selectedExtTypeId = ref("ALL"); // Change here
    const positions = ref([]); // Add this line

    const fetchExams = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_EXAM}/exam`
        );
        if (
          response.status === 200 &&
          response.data &&
          Array.isArray(response.data.data)
        ) {
          exams.value = response.data.data;
          originalExams.value = response.data.data;
        } else {
          console.error(
            "Invalid response format or empty data array:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching exams:", error);
        exams.value = [];
        originalExams.value = [];
      }
    };

    onMounted(async () => {
      await fetchExams();
      await fetchPositionById();
    });

    const togglePopup = () => {
      AddPopup.value = !AddPopup.value;
    };

    const openEditModal = (exam) => {
      EditPopup.value = true;
    };

    const handleClose = () => {
      ShowPopup.value = false;
    };

    const deletef = async (exam) => {
      Swal.fire({
        title: "Confirm Delete",
        text: "Are you sure you want to delete this exam?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteExam(exam);
        }
      });
    };

    const deleteExam = async (exam) => {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_EXAM}/exam/delete-exam/${exam._id}`
        );
        Swal.fire("Deleted!", "The exam has been deleted.", "success");
        exams.value = exams.value.filter((item) => item._id !== exam._id);
        originalExams.value = originalExams.value.filter(
          (item) => item._id !== exam._id
        );
      } catch (error) {
        console.error("Error deleting exam:", error);
        Swal.fire("Error!", "Failed to delete the exam.", "error");
      }
    };

    const searchExamById = () => {
      if (searchText.value.trim()) {
        const filteredExams = originalExams.value.filter((exam) =>
          exam.exam_id.includes(searchText.value)
        );
        exams.value = filteredExams;
      } else {
        exams.value = [...originalExams.value];
      }
    };

    const fetchPositionById = async () => {
      if (typeof selectedExtTypeId.value !== "undefined") {
        // ตรวจสอบว่า selectedExtTypeId มีค่าหรือไม่
        if (selectedExtTypeId.value !== "ALL") {
          try {
            const response = await axios.get(
              `${import.meta.env.VITE_API_EXAM}/exam-type/${
                selectedExtTypeId.value
              }`
            );
            if (response.status === 200 && response.data) {
              positions.value = response.data; // Set positions with the fetched data
            } else {
              console.error(
                "Invalid response format or empty data:",
                response.data
              );
            }
          } catch (error) {
            console.error("Error fetching exam-type:", error);
          }
        } else {
          positions.value = []; // Reset positions if all positions are selected
        }
      }
    };

    const openDetailsPopup = (exam) => {
      selectedExam.value = exam;
      ShowPopup.value = true;
    };

    return {
      exams,
      searchText,
      ShowPopup,
      AddPopup,
      EditPopup,
      selectedExam,
      selectedExtTypeId,
      positions, // Add positions here
      fetchExams,
      togglePopup,
      openEditModal,
      handleClose,
      deletef,
      deleteExam,
      searchExamById,
      openDetailsPopup,
      fetchPositionById, // Add fetchPositionById here
    };
  },
};
</script>




<style scoped>
/* Styles for popup overlay and content */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  padding: 20px;
  border-radius: 8px;
  max-width: 50%;
  width: 100%;
  max-height: 90%;
  overflow-y: auto;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.action-button {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #f3f3f3;
}

.cancel-button {
  background-color: #d32f2f;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.cancel-button:hover {
  background-color: #b71c1c;
}
</style>
