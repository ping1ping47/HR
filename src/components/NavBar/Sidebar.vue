<template>
  <div
    :class="sidebarClasses"
    class="bg-gray-800 text-white w-56 flex flex-col fixed h-full py-20 transition-transform duration-300"
  >
    <!-- Sidebar header -->
    <div class="mb-4 px-4">
      <!-- Use router-link instead of a -->
      <h2 class="text-xl font-semibold">
        <router-link to="/">Your App</router-link>
      </h2>
    </div>

    <!-- Sidebar menu items -->
    <ul>
      <li>
        <router-link to="/" class="block py-2 px-4 hover:bg-gray-700"
          >หน้าหลัก</router-link
        >
      </li>
      <li>
        <router-link to="/Exam" class="block py-2 px-4 hover:bg-gray-700"
          >ข้อสอบ</router-link
        >
      </li>
      <li>
        <router-link to="/Post" class="block py-2 px-4 hover:bg-gray-700"
          >ประกาศสมัครงาน</router-link
        >
      </li>
      <li>
        <router-link to="/ExamResults" class="block py-2 px-4 hover:bg-gray-700"
          >ผลสอบ</router-link
        >
      </li>
      <li>
        <a href="/Test" class="block py-2 px-4 hover:bg-gray-700">Test</a>
      </li>
    </ul>

    <!-- Logout button -->
    <button
      @click="logout"
      class="mt-auto py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold focus:outline-none"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: true, // เปลี่ยน default value เป็น true เพื่อให้ sidebar เปิดอยู่ตั้งแต่เริ่มต้น
    },
  },
  computed: {
    sidebarClasses() {
      return {
        hidden: !this.isOpen,
        block: this.isOpen,
      };
    },
  },
  methods: {
    closeSidebar() {
      this.$emit("close-sidebar");
    },
    logout() {
      // Your logout logic here
    },
    handleResize() {
      if (window.innerWidth > 500) {
        // 500 เป็นค่าของ breakpoint ที่คุณต้องการให้ sidebar ปิดเมื่อหน้าจอมีขนาดเล็กกว่า
        this.closeSidebar();
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
