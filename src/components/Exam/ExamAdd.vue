    <template>
  <div class="popup-overlay flex justify-center items-center">
    <div class="popup-content justify-center bg-gray-900 p-8 rounded-lg mt-10">
      <div>
        <form @submit.prevent="addExam" class="p-0 md:p-5">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              เพิ่มข้อสอบ
            </h3>
            <!-- Close button -->
            <button @click.prevent="refreshPage" class="text-white text-5xl">
              &times;
            </button>
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-4">
            <div class="col-span-2">
              <label
                for="exam_id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >exam_id</label
              >
              <input
                v-model="formData.exam_id"
                type="text"
                name="exam_id"
                id="exam_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="extype_id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >extype_id</label
              >
              <input
                v-model="formData.extype_id"
                type="text"
                name="extype_id"
                id="extype_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="flex">
              <div class="col-span-2 flex-grow mb-4 mr-6">
                <label
                  for="question_1"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Question 1</label
                >
                <textarea
                  v-model="formData.question_1"
                  type="text"
                  name="question_1"
                  id="question_1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-30 p-10 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type question 1"
                  required=""
                ></textarea>
              </div>

              <div class="col-span-2 flex-grow mb-4 mr-6">
                <label
                  for="question_2"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Question 2</label
                >
                <textarea
                  v-model="formData.question_2"
                  type="text"
                  name="question_2"
                  id="question_2"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-30 p-10 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type question 1"
                ></textarea>
              </div>

              <div class="col-span-2 flex-grow mb-4">
                <label
                  for="question_3"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Question 3</label
                >
                <textarea
                  v-model="formData.question_3"
                  type="text"
                  name="question_3"
                  id="question_3"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-30 p-10 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type question 1"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-4">
            <div class="col-span-2">
              <label
                for="c1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >c1</label
              >
              <input
                v-model="formData.c1"
                type="text"
                name="c1"
                id="c1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c1_point"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >c1_point</label
              >
              <input
                v-model="formData.c1_point"
                type="text"
                name="c1_point"
                id="c1_point"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c2"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >c2</label
              >
              <input
                v-model="formData.c2"
                type="text"
                name="c2"
                id="c2"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c2_point"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >c2_point</label
              >
              <input
                v-model="formData.c2_point"
                type="text"
                name="c2_point"
                id="c2_point"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c3"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >c3</label
              >
              <input
                v-model="formData.c3"
                type="text"
                name="c3"
                id="c3"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c3_point"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >c3_point</label
              >
              <input
                v-model="formData.c3_point"
                type="text"
                name="c3_point"
                id="c3_point"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c4"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >c4</label
              >
              <input
                v-model="formData.c4"
                type="text"
                name="c4"
                id="c4"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="c4_point"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >c4_point</label
              >
              <input
                v-model="formData.c4_point"
                type="text"
                name="c4_point"
                id="c4_point"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="cr_answer"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >cr_answer</label
              >
              <input
                v-model="formData.cr_answer"
                type="text"
                name="cr_answer"
                id="cr_answer"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="em_id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >em_id</label
              >
              <input
                v-model="formData.em_id"
                type="text"
                name="em_id"
                id="em_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2 sm:col-span-1">
              <label
                for="statusquestion"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >statusquestion</label
              >
              <select
                v-model="formData.statusquestion"
                id="statusquestion"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="1">เปิด</option>
                <option value="0">ปิด</option>
              </select>
            </div>

            <div class="col-span-2">
              <label
                for="image_url"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >image_url</label
              >
              <input
                v-model="formData.image_url"
                type="text"
                name="image_url"
                id="image_url"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
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
              @click.prevent="refreshPage"
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
        statusquestion: "", // Default value for statusquestion
        image_url: "",
      },
    };
  },
  methods: {
    async addExam() {
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
        if (result.isConfirmed) {
          // เรียกใช้งาน addExamRequest หลังจากผู้ใช้ยืนยันการเพิ่มข้อมูล
          this.addExamRequest();
        }
      });
    },
    async addExamRequest() {
      try {
        // ส่งคำขอเพิ่มข้อมูลไปยัง API โดยใช้ข้อมูลจาก this.formData
        const response = await axios.post(
          `${import.meta.env.VITE_API_EXAM}/exam/insert-exam`,
          this.formData
        );

        // หลังจากเพิ่มข้อมูลสำเร็จ
        Swal.fire("Added!", "Data has been added successfully", "success");
        // Refresh the page
        this.refreshPage();
        // ไม่ต้องรีเฟรชหน้าหรือเปลี่ยนเส้นทาง URL ที่นี่
        // ดำเนินการเพิ่มข้อมูลในรายการที่แสดงผล ตามต้องการ
      } catch (error) {
        console.error("Error adding data:", error);
        Swal.fire("Error!", "Failed to add data", "error");
      }
    },
    refreshPage() {
      // Reload the page
      window.location.reload();
    },
  },
};
</script>

    
    <style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; /* เพิ่ม property เพื่อบล็อกการเชื่อมต่อที่ปุ่มหลัง */
}

.popup-content {
  padding: 20px;
  border-radius: 8px;
  max-width: 50%;
  width: 100%;
  max-height: 90%;
  overflow-y: auto;
  pointer-events: auto; /* กำหนดให้เมาส์และการคลิกทำงานในเนื้อหาของป๊อปอัพ */
}
</style>