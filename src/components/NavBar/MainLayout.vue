<!-- MainLayout.vue -->
<template>
  <div class="flex h-screen">
    <div>
      <Navbar @toggle-sidebar="toggleSidebar" />
    </div>
    <Sidebar :is-open="isSidebarOpen" @close-sidebar="closeSidebar" />
    <div class="flex-1 overflow-y-auto" :class="{ 'ml-64': isSidebarOpen }">
      <!-- Adjust padding as needed -->
      <router-view class="py-20"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      isSidebarOpen: false,
      isMobile: false, // Flag to track if the screen is in mobile size
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    checkMobile() {
      // Check if the screen width is less than or equal to a mobile breakpoint (e.g., 768px)
      this.isMobile = window.innerWidth <= 768;

      // If the screen is in mobile size, close the sidebar
      if (this.isMobile) {
        this.closeSidebar();
      }
    },
  },
  mounted() {
    // Call the checkMobile method when the component is mounted
    this.checkMobile();

    // Add an event listener to window resize event to re-check the screen size
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener("resize", this.checkMobile);
  },
};
</script>

<style scoped>
/* Add any additional styling here */

/* Transition effect for sidebar */
.sidebar {
  transition: width 0.3s ease;
}

/* Animation for main content shift */
.overflow-y-auto {
  transition: margin-left 0.3s ease;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .ml-64 {
    margin-left: 0 !important; /* Reset margin for mobile */
  }
}
</style>
