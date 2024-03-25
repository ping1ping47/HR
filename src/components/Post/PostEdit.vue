<template>
  <div class="popup-overlay flex justify-center items-center">
    <div class="popup-content justify-center bg-gray-900 p-8 rounded-lg mt-10">
      <div>
        <form @submit.prevent="updatePostRequest" class="p-0 md:p-5">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              แก้ข้อสอบ
            </h3>
            <!-- Close button -->
            <button @click.prevent="ModalClose" class="text-white text-5xl">
              &times;
            </button>
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-4">
            <div class="col-span-2">
              <label
                for="image"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >image</label
              >
              <input
                v-model="formData.image"
                type="text"
                name="image"
                id="image"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-4">
            <div class="col-span-2">
              <label
                for="Company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Company</label
              >
              <input
                v-model="formData.Company"
                type="text"
                name="Company"
                id="Company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="Header"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Header</label
              >
              <input
                v-model="formData.Header"
                type="text"
                name="Header"
                id="Header"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="Description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Description</label
              >
              <input
                v-model="formData.Description"
                type="text"
                name="Description"
                id="Description"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="department"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >department</label
              >
              <input
                v-model="formData.department"
                type="text"
                name="department"
                id="department"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div class="col-span-2">
              <label
                for="salary"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >salary</label
              >
              <input
                v-model="formData.salary"
                type="text"
                name="salary"
                id="salary"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
                @input="formData.salary = validateNumber($event.target.value)"
              />
            </div>

            <div class="col-span-2">
              <label
                for="sex"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >sex</label
              >
              <select
                v-model="formData.sex"
                id="sex"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option value="M">ชาย</option>
                <option value="F">หญิง</option>
              </select>
            </div>
            <div class="col-span-2">
              <label
                for="Post_status"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >สถานะ</label
              >
              <select
                v-model="formData.Post_status"
                id="Post_status"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option value="1">เปิด</option>
                <option value="0">ปิด</option>
              </select>
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
  props: {
    post: Object, // รับข้อมูลข้อสอบที่จะแก้ไข
  },
  data() {
    return {
      isOpen: false,
      formData: {
        image: "",
        Company: "",
        Header: "",
        Description: "",
        department: "",
        salary: "",
        sex: "",
        Post_status: "",
      },
    };
  },
  created() {
    // นำข้อมูลข้อสอบที่ได้รับมาแสดงในฟอร์มเมื่อคอมโพเนนต์ถูกสร้างขึ้น
    this.formData = { ...this.post };
  },
  methods: {
    async AddPost() {
      // ตรวจสอบว่ามีข้อมูลใดๆ ที่ยังไม่ถูกกรอกหรือไม่
      for (const key in this.formData) {
        if (this.formData[key] === "") {
          Swal.fire("Error!", "Please fill in all fields", "error");
          return; // หยุดการทำงานของฟังก์ชันถ้ามีข้อมูลที่ยังไม่ถูกกรอก
        }
      }

      // แสดงข้อความยืนยัน
      Swal.fire({
        title: "Confirm Update",
        text: "Are you sure you want to update?",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          // เรียกใช้งาน updatePostRequest หลังจากผู้ใช้ยืนยันการแก้ไขข้อมูล
          this.updatePostRequest();
        }
      });
    },

    async updatePostRequest() {
      try {
        // ส่งคำขอแก้ไขข้อมูลไปยัง API โดยใช้ข้อมูลจาก this.formData
        await axios.put(
          `${import.meta.env.VITE_API_POST}/post/update-post/${
            this.formData._id
          }`,
          this.formData
        );

        // หลังจากแก้ไขข้อมูลสำเร็จ
        // แสดงข้อความยืนยัน
        Swal.fire({
          title: "Confirm Update",
          text: "Are you sure you want to update?",
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
    updatePost() {
      // ทำการอัพเดตข้อมูลข้อสอบโดยใช้ this.formData
      // ในที่นี้คุณสามารถใช้ axios หรือวิธีการส่งคำขอ API ที่คุณใช้งานอยู่เพื่ออัพเดตข้อมูลข้อสอบ
      console.log("Updated post data:", this.formData);
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
