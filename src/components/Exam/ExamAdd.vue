<template>
  <div class="popup-overlay flex justify-center items-center">
    <div class="popup-content justify-center bg-gray-900 p-8 rounded-lg mt-10">
      <div>
        <form @submit.prevent="addExamRequest" class="p-0 md:p-5">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              เพิ่มข้อสอบ
            </h3>
            <!-- Close button -->
            <button @click.prevent="ModalClose" class="text-white text-5xl">
              &times;
            </button>
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-4">
            <div class="col-span-2">
              <label
                for="exam_id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >หมายเลขข้อสอบ</label
              >
              <input
                v-model="formData.exam_id"
                type="text"
                name="exam_id"
                id="exam_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน หมายเลขข้อสอบ"
                required=""
                @input="validateNumber"
              />
            </div>

            <!-- extype_id to display extype_name -->
            <div class="col-span-2">
              <label
                for="extype_id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ประเภทข้อสอบ</label
              >
              <select
                v-model="formData.extype_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option value="">เลือกประเภทข้อสอบ</option>
                <option
                  v-for="type in ExamType"
                  :key="type._id"
                  :value="type.extype_id"
                >
                  {{ type.extype_name }}
                  <!-- แสดง extype_name แทน extype_id -->
                </option>
              </select>
            </div>

            <div class="flex">
              <div class="col-span-2 flex-grow mb-4 mr-6">
                <label
                  for="question_1"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >คำถามที่ 1</label
                >
                <textarea
                  v-model="formData.question_1"
                  type="text"
                  name="question_1"
                  id="question_1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-30 p-10 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="ป้อน คำถามที่ 1"
                  required=""
                ></textarea>
              </div>

              <div class="col-span-2 flex-grow mb-4 mr-6">
                <label
                  for="question_2"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >คำถามที่ 2</label
                >
                <textarea
                  v-model="formData.question_2"
                  type="text"
                  name="question_2"
                  id="question_2"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-30 p-10 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="ป้อน คำถามที่ 2"
                ></textarea>
              </div>

              <div class="col-span-2 flex-grow mb-4">
                <label
                  for="question_3"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >คำถามที่ 3</label
                >
                <textarea
                  v-model="formData.question_3"
                  type="text"
                  name="question_3"
                  id="question_3"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-30 p-10 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="ป้อน คำถามที่ 3"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-4">
            <div class="col-span-2">
              <label
                for="c1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >คำตอบข้อ 1</label
              >
              <input
                v-model="formData.c1"
                type="text"
                name="c1"
                id="c1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน คำตอบ"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c1_point"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >คะแนนข้อ 1</label
              >
              <input
                v-model="formData.c1_point"
                type="text"
                name="c1_point"
                id="c1_point"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน คะแนน"
                required=""
                @input="validateNumber"
              />
            </div>

            <div class="col-span-2">
              <label
                for="c2"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >คำตอบข้อ 2</label
              >
              <input
                v-model="formData.c2"
                type="text"
                name="c2"
                id="c2"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน คำตอบ"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c2_point"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >คะแนนข้อ 2</label
              >
              <input
                v-model="formData.c2_point"
                type="text"
                name="c2_point"
                id="c2_point"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน คะแนน"
                required=""
                @input="validateNumber"
              />
            </div>

            <div class="col-span-2">
              <label
                for="c3"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >คำตอบข้อ 3</label
              >
              <input
                v-model="formData.c3"
                type="text"
                name="c3"
                id="c3"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน คำตอบ"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c3_point"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >คะแนนข้อ 3</label
              >
              <input
                v-model="formData.c3_point"
                type="text"
                name="c3_point"
                id="c3_point"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน คะแนน"
                required=""
                @input="validateNumber"
              />
            </div>

            <div class="col-span-2">
              <label
                for="c4"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >คำตอบข้อ 4</label
              >
              <input
                v-model="formData.c4"
                type="text"
                name="c4"
                id="c4"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน คำตอบ"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c4_point"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >คะแนนข้อ 4</label
              >
              <input
                v-model="formData.c4_point"
                type="text"
                name="c4_point"
                id="c4_point"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน คะแนน"
                required=""
                @input="validateNumber"
              />
            </div>

            <div class="col-span-2">
              <label
                for="cr_answer"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >คำตอบที่ถูก</label
              >
              <input
                v-model="formData.cr_answer"
                type="text"
                name="cr_answer"
                id="cr_answer"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="ป้อน คำตอบที่ถูก"
                required=""
              />
            </div>

            <!-- em_id to display em_firstname && em_lastname -->
            <div class="col-span-2">
              <label
                for="em_id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >พนักงาน</label
              >
              <select
                v-model="formData.em_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option value="">เลือกพนักงาน</option>
                <option
                  v-for="employee in Employees"
                  :key="employee._id"
                  :value="employee.em_id"
                >
                  {{ employee.em_firstname }} {{ employee.em_lastname }}
                </option>
              </select>
            </div>

            <div class="col-span-2">
              <label
                for="image"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >รูปภาพ 150KB</label
              >
              <input
                type="file"
                accept="image/*"
                ref="fileInput"
                @change="handleImageUpload"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              <!-- Show uploaded image -->
              <img
                v-if="imagePreview"
                :src="imagePreview"
                alt="Uploaded Image"
                class="mt-2 max-w-full h-auto"
              />
            </div>
          </div>

          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <!-- Save and Close buttons -->
            <button
              type="submit"
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
            >
              Save
            </button>
            <button
              @click.prevent="ModalClose"
              class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
      <!-- เช่น ข้อความ รูปภาพ หรือ Component อื่นๆ -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "AddPopup",
  data() {
    return {
      isOpen: false,
      formData: {
        exam_id: "",
        extype_id: "",
        question_1: "",
        question_2: "",
        question_3: "",
        c1: "",
        c1_point: "",
        c2: "",
        c2_point: "",
        c3: "",
        c3_point: "",
        c4: "",
        c4_point: "",
        cr_answer: "",
        em_id: "",
        statusquestion: "1", // Default value for statusquestion
        image: "",
      },
      imagePreview: null,
      ExamType: [], // Array to store exam types
      Employees: [], // Array to store exam types
    };
  },
  mounted() {
    this.fetchExamTypes(); // Fetch exam types when component mounts
    this.fetchEmployees(); // Fetch exam types when component mounts
  },

  methods: {
    handleImageUpload() {
      const file = this.$refs.fileInput.files[0];
      this.formData.image = file;
      this.imagePreview = URL.createObjectURL(file);
    },

    async fetchExamTypes() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_EXAM}/exam-type`
        );
        if (response.data.status) {
          // ตรวจสอบ status ใน JSON response
          this.ExamType = response.data.data; // แสดงค่าจาก key "data"
        } else {
          console.error("Error fetching exam types:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching exam types:", error);
      }
    },

    async fetchEmployees() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_EXAM}/employees`
        );
        if (response.data.status) {
          // ตรวจสอบ status ใน JSON response
          this.Employees = response.data.data; // แสดงค่าจาก key "data"
        } else {
          console.error("Error fetching exam types:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching exam types:", error);
      }
    },

    async addExamRequest() {
      try {
        const formData = new FormData();
        for (const key in this.formData) {
          formData.append(key, this.formData[key]);
        }

        // ส่งคำขอเพิ่มข้อมูลไปยัง API โดยใช้ multipart/form-data
        await axios.post(
          `${import.meta.env.VITE_API_EXAM}/exam/insert-exam`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Show confirmation dialog
        Swal.fire({
          title: "Confirm Add",
          text: "Are you sure you want to add?",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
        }).then((result) => {
          // หากผู้ใช้กดปุ่ม OK
          if (result.isConfirmed) {
            window.location.reload(); // รีโหลดหน้า
          }
        });
      } catch (error) {
        console.error("Error updating data:", error);
        Swal.fire("Error!", "Failed to update data", "error");
      }
    },

    ModalClose() {
      this.$emit("close");
    },
    validateNumber(event) {
      const inputValue = event.target.value;
      const regex = /^[0-9]*$/; // ตรวจสอบว่าเป็นตัวเลขหรือไม่
      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^0-9]/g, ""); // ลบอักขระที่ไม่ใช่ตัวเลข
      }
    },
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
</style>
