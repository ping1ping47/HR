<template>
  <!-- ********* Navbar ********** -->

  <div class="h-screen flex flex-col">
    <nav
      class="top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800 xl:pl-20"
    >
      <div class="flex items-center justify-between lg:flex-row-reverse">
        <!-- ปุ่มเปิด/ปิดเมนูด้านซ้ายสุด -->
        <button @click="toggleAside" id="toggleAside" class="p-3 lg:hidden">
          <span class="inline-flex justify-center items-center w-6 h-6">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              class="inline-block"
            >
              <path
                fill="currentColor"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              ></path>
            </svg>
          </span>
        </button>
        <!-- ชื่อพนักงานและเมนูโปรไฟล์ -->
        <div
          class="relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 lg:py-2 lg:px-3"
        >
          <div
            class="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0 lg:justify-end"
          >
            <span class="px-2 transition-colors flex-grow lg:flex-none lg:block"
              >ชื่อพนักงาน (รหัส)</span
            >
            <div class="w-6 h-6 inline-flex">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com"
                alt="John Doe"
                class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- ********** Sidebar ********* -->
    <aside
      id="aside"
      class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-14 h-screen transition-position overflow-y-auto"
      :class="{
        '-left-60 lg:left-0': !isAsideOpen,
      }"
    >
      <div>
        <div
          class="aside-brand flex flex-row h-14 items-center justify-between dark:bg-slate-800"
        >
          <div class="flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
            <b class="font-black">เมนู</b>
          </div>
        </div>
        <div
          class="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars dark:aside-scrollbars-[slate]"
        >
          <ul>
            <li>
              <a
                href="/"
                aria-current="page"
                class="router-link-active router-link-exact-active flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              >
                <span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none aside-menu-item-active font-bold"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    class="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"
                    ></path>
                  </svg>
                </span>
                <span
                  class="grow text-ellipsis line-clamp-1 pr-12 aside-menu-item-active font-bold"
                  >หน้าหลัก</span
                >
              </a>
            </li>
            <li>
              <a
                href="Post"
                class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              >
                <span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    class="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                    ></path>
                  </svg>
                </span>
                <span class="grow text-ellipsis line-clamp-1 pr-12"
                  >ประกาศรับสมัคร</span
                >
              </a>
            </li>
            <li>
              <a
                href="examination"
                class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              >
                <span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"
                >
                  <svg
                    viewBox="0 0 24 
                    24"
                    width="18"
                    height="18"
                    class="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                    ></path>
                  </svg>
                </span>
                <span class="grow text-ellipsis line-clamp-1 pr-12"
                  >ข้อสอบ</span
                >
              </a>
            </li>
            <li>
              <a
                href="examresults"
                class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              >
                <span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    class="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                    ></path>
                  </svg>
                </span>
                <span class="grow text-ellipsis line-clamp-1 pr-12"
                  >ผลการสอบ</span
                >
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <a
              class="flex cursor-pointer py-3 border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 mt-auto mb-10 lg:mb-30"
            >
              <span
                class="inline-flex justify-center items-center w-16 h-6 flex-none"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
                  ></path>
                </svg>
              </span>
              <span class="grow text-ellipsis line-clamp-1 pr-12">ออก</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <!-- Content -->
    <div class="px-1 py-16">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAsideOpen: false,
    };
  },
  methods: {
    toggleAside() {
      this.isAsideOpen = !this.isAsideOpen;
      const aside = document.getElementById("aside");
      if (this.isAsideOpen) {
        aside.classList.remove("-left-60");
        aside.classList.add("left-0");
      } else {
        aside.classList.remove("left-0");
        aside.classList.add("-left-60");
      }
    },
  },
};
</script>
<style>
/* เพิ่มสไลด์เมนู */
#aside {
  transition: left 0.5s ease;
}
</style>