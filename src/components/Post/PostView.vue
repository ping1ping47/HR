<template>
  <div class="popup-overlay flex justify-center items-center">
    <div class="popup-content justify-center bg-gray-900 p-8 rounded-lg mt-10">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          ข้อมูลประกาศสมัครงาน
        </h3>
        <!-- Close button -->
        <button @click.prevent="ModalClose" class="text-white text-5xl">
          &times;
        </button>
      </div>

      <div class="gap-6 mb-6 md:grid-cols-4 flex justify-center">
        <div class="col-span-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Image</label
          >
          <img
            :src="formData.image"
            alt="Job Image"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div class="grid gap-6 mb-6 md:grid-cols-4">
        <div class="col-span-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Company</label
          >
          <input
            :value="formData.Company"
            type="text"
            readonly
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        </div>

        <div class="col-span-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Header</label
          >
          <input
            :value="formData.Header"
            type="text"
            readonly
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        </div>

        <div class="col-span-4 items-center">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <p
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            {{ formData.Description }}
          </p>
        </div>

        <div class="col-span-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Department</label
          >
          <input
            :value="formData.department"
            type="text"
            readonly
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        </div>

        <div class="col-span-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Salary</label
          >
          <input
            :value="formData.salary"
            type="text"
            readonly
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        </div>

        <div class="col-span-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Sex</label
          >
          <input
            :value="formData.sex === 'M' ? 'ชาย' : 'หญิง'"
            type="text"
            readonly
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        </div>

        <div class="col-span-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >สถานะ</label
          >
          <input
            :value="formData.Post_status === '1' ? 'เปิด' : 'ปิด'"
            type="text"
            readonly
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        </div>
      </div>
      <div class="p-3 mt-2 text-center space-x-4 md:block">
        <button
          @click.prevent="ModalClose"
          class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewPopup",
  props: {
    post: Object, // รับข้อมูลข้อสอบที่จะแสดง
  },
  data() {
    return {
      formData: {},
    };
  },
  created() {
    // เมื่อคอมโพเนนต์ถูกสร้างขึ้น ให้กำหนดค่าข้อมูลที่จะแสดงในฟอร์ม
    this.formData = { ...this.post };
  },
  methods: {
    ModalClose() {
      this.$emit("close");
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
  background-color: rgba(0, 0, 0, 0.5); /* เพิ่ม opacity */
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
