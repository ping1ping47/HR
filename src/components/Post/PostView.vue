<template>
  <div class="popup-overlay flex justify-center items-center">
    <div
      class="popup-content justify-center bg-gray-900 p-8 rounded-lg mt-10 space-y-4"
    >
      <!-- เพิ่ม space-y-4 เพื่อเพิ่มระยะห่างในระดับบล็อก -->
      <div>
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            ข้อมูลประกาศงาน
          </h3>
          <!-- Close button -->
          <button @click.prevent="ModalClose" class="text-white text-5xl">
            &times;
          </button>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              บริษัท
            </label>
            <p class="text-gray-900 dark:text-white">{{ formData.exam_id }}</p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              หัวข้อ
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.extype_id }}
            </p>
          </div>
        </div>

        <!-- Image -->
        <div class="md:col-span-2 p-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            รูปภาพ
          </label>
          <div class="border p-2 rounded-md flex justify-center">
            <img
              v-if="formData.image"
              :src="formData.image"
              alt="Image"
              class="max-w-full h-auto"
            />
            <p v-else class="text-gray-900 dark:text-white">
              No image uploaded
            </p>
          </div>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ประเภทธุระกิจ
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.cr_answer }}
            </p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              คำอธิบาย
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.date_post }}
            </p>
          </div>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ตำแหน่ง
            </label>
            <p class="text-gray-900 dark:text-white">{{ formData.exam_id }}</p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              จำนวนที่รับ
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.extype_id }}
            </p>
          </div>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              เงินเดือน
            </label>
            <p class="text-gray-900 dark:text-white">{{ formData.exam_id }}</p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              อายุ
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.extype_id }}
            </p>
          </div>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              เพศ
            </label>
            <p class="text-gray-900 dark:text-white">{{ formData.exam_id }}</p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ประสบการณ์
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.extype_id }}
            </p>
          </div>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ระดับการศึกษา
            </label>
            <p class="text-gray-900 dark:text-white">{{ formData.exam_id }}</p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              สาขาวิชา
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.extype_id }}
            </p>
          </div>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              คุณสมบัติ
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.cr_answer }}
            </p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ลักษณะงาน
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.date_post }}
            </p>
          </div>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              สัวดิการ
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.cr_answer }}
            </p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              สถานที่ประฏิบัติงาน
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.date_post }}
            </p>
          </div>
        </div>

        <!-- Employee ID and Status -->
        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              พนักงาน
            </label>
            <p class="text-gray-900 dark:text-white">{{ formData.em_id }}</p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              สถานะประกาศ
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.statusquestion }}
            </p>
          </div>
        </div>

        <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              วันที่เปิด
            </label>
            <p class="text-gray-900 dark:text-white">{{ formData.em_id }}</p>
          </div>
          <div class="border p-2 rounded-md">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              วันที่ปิด
            </label>
            <p class="text-gray-900 dark:text-white">
              {{ formData.statusquestion }}
            </p>
          </div>
        </div>

        <!-- Close buttons -->
        <div class="md:col-span-2 p-3 mt-2 text-center">
          <button
            @click.prevent="ModalClose"
            class="mb-2 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
          >
            Close
          </button>
        </div>
      </div>
      <!-- เช่น ข้อความ รูปภาพ หรือ Component อื่นๆ -->
      <slot></slot>
    </div>
  </div>
</template>

  
<script>
export default {
  name: "ShowPopup",
  props: {
    exam: Object, // รับข้อมูลข้อสอบที่จะแสดง
  },
  data() {
    return {
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
        image: "",
      },
    };
  },
  created() {
    // นำข้อมูลข้อสอบที่ได้รับมาใส่ใน formData
    this.formData = { ...this.exam };
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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* ตั้งค่า z-index เพื่อให้ป๊อปอัพอยู่ด้านบน */
}

.popup-content {
  border-radius: 0.5rem;
  padding: 1rem;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}
</style>
