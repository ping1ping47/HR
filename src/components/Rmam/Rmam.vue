<template>
  <!-- <section class="mb-6 flex items-center justify-between">
        <div class="flex items-center justify-start">
            <h1 class="text-3xl leading-tight">ข้อมูล(ข้อสอบ)</h1>
        </div>
    </section> -->

  <div class="rounded-2xl flex-col dark:bg-slate-900/70 bg-white flex">
    <div class="flex-1">
      <div id="app">
        <div class="flex flex-col items-start justify-center p-3 min-h-full">
          <h1
            class="my-4 text-3xl text-center font-medium tracking-wider text-purple-700"
          >
            ข้อมูล(ประกาศรับสมัคร)
          </h1>

          <button
            @click="onToggle"
            class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
          >
            เพิ่มประกาศรับสมัคร
          </button>
        </div>
        <transition name="fade">
          <div v-if="isOpen">
            <div
              @click="onToggle"
              class="absolute bg-black opacity-70 inset-0 z-0"
            ></div>
            <div
              class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white dark:bg-gray-800"
            >
              <div>
                <form class="p-4 md:p-5">
                  <!-- Modal header -->
                  <div
                    class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      เพิ่มประกาศรับสมัคร
                    </h3>
                  </div>
                  <div class="grid gap-6 mb-6 md:grid-cols-4">
                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >exam_id</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >extype_id</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >question_1</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >question_2</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >question_3</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >c1</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >c1_point</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >c2</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >c2_point</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >c3</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >c3_point</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >c4</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >cr_answer</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >em_id</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Category</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="category"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >statusquestion</label
                      >
                      <select
                        id="category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option value="ON">เปิด</option>
                        <option value="OFF">ปิด</option>
                      </select>
                    </div>
                  </div>
                  <div class="p-3 mt-2 text-center space-x-4 md:block">
                    <button
                      class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                    >
                      Save
                    </button>
                    <button
                      @click="onToggle"
                      class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <table v-if="!isOpen">
        <thead>
          <tr>
            <th></th>
            <th>Exam ID</th>
            <th>Extape ID</th>
            <th>Question 1</th>
            <th>Question 2</th>
            <th>Question 3</th>
            <th>Choice 1</th>
            <th>Choice 1 Point</th>
            <th>Choice 2</th>
            <th>Choice 2 Point</th>
            <th>Choice 3</th>
            <th>Choice 3 Point</th>
            <th>Choice 4</th>
            <th>Correct Answer</th>
            <th>Exam Mode ID</th>
            <th>Status Question</th>
            <th>Date Posted</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, productIndex) in products" :key="product._id">
            <td class="px-4 py-2">{{ productIndex + 1 }}</td>
            <td class="px-4 py-2">{{ product.exam_id }}</td>
            <td class="px-4 py-2">{{ product.extype_id }}</td>
            <td class="px-4 py-2">{{ product.question_1 }}</td>
            <td class="px-4 py-2">{{ product.question_2 }}</td>
            <td class="px-4 py-2">{{ product.question_3 }}</td>
            <td class="px-4 py-2">{{ product.c1 }}</td>
            <td class="px-4 py-2">{{ product.c1_point }}</td>
            <td class="px-4 py-2">{{ product.c2 }}</td>
            <td class="px-4 py-2">{{ product.c2_point }}</td>
            <td class="px-4 py-2">{{ product.c3 }}</td>
            <td class="px-4 py-2">{{ product.c3_point }}</td>
            <td class="px-4 py-2">{{ product.c4 }}</td>
            <td class="px-4 py-2">{{ product.cr_answer }}</td>
            <td class="px-4 py-2">{{ product.em_id }}</td>
            <td class="px-4 py-2">{{ product.statusquestion }}</td>
            <td class="px-4 py-2">{{ product.date_post }}</td>
            <td class="px-4 py-2">{{ product.update_at }}</td>
            <td data-label="Created" class="lg:w-1 whitespace-nowrap">
              <small
                class="text-gray-500 dark:text-slate-400"
                :title="exam.created"
                >{{ exam.created }}</small
              >
            </td>
            <td class="before:hidden lg:w-1 whitespace-nowrap">
              <div
                class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3"
              >
                <button
                  class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 p-1 mr-3 last:mr-0 mb-3"
                  type="button"
                  @click="openViewModal(exam)"
                >
                  <span class="inline-flex justify-center items-center w-6 h-6"
                    ><svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      class="inline-block"
                    >
                      <path
                        fill="currentColor"
                        d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                      ></path></svg
                  ></span>
                  <!----></button
                ><button
                  class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 p-1 mr-3 last:mr-0 mb-3"
                  type="button"
                  @click="deleteExam(exam)"
                >
                  <span class="inline-flex justify-center items-center w-6 h-6"
                    ><svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      class="inline-block"
                    >
                      <path
                        fill="currentColor"
                        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8zm4,0h2V17h-2V8zm-4,3h6v1h-6v-1z"
                      ></path></svg
                  ></span>
                  <!---->
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div class="justify-between items-center block md:flex">
          <div class="flex items-center justify-center">
            <small>Page 1 of {{ exams.length }}</small>
          </div>
        </div>
      </div>
    </div>

    <!---->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ExamList",
  data() {
    return {
      exams: [],
      isCreateModalOpen: false,
      isViewModalOpen: false,
      isEditModalOpen: false,
      selectedExam: null,
      isOpen: false, // Change this to false initially
    };
  },
  mounted() {
    this.fetchExams();
  },
  methods: {
    fetchExams() {
      axios
        .get(`${import.meta.env.VITE_API_EXAM}/exam`)
        .then((response) => {
          if (response.data && Array.isArray(response.data.data)) {
            this.exams = response.data.data;
          } else {
            console.error("Response data is not an array:", response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching exams:", error);
        });
    },
    openViewModal(exam) {
      this.isViewModalOpen = true;
      this.selectedExam = exam;
    },
    deleteExam(exam) {
      axios
        .delete(`${import.meta.env.VITE_API_EXAM}/exam/${exam._id}`)
        .then(() => {
          this.exams = this.exams.filter((e) => e._id !== exam._id);
          console.log("Exam deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting exam:", error);
        });
    },
    onToggle() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        // Add the class to hide the table
        document.querySelector("table").classList.add("popup-open");
      } else {
        // Remove the class to show the table
        document.querySelector("table").classList.remove("popup-open");
      }
    },
  },
};
</script>


<style>
/* Your existing CSS */

/* Add this CSS to hide the table when the pop-up is open */
table.popup-open {
  display: none;
}
</style>