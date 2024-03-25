<template>
  <div class="rounded-2xl bg-black flex flex-col dark:bg-slate-900/70">
    <div class="flex-1">
      <div class="p-3">
        <input
          type="text"
          v-model="searchText"
          placeholder="ค้นหาตำแหน่งงาน..."
          class="px-3 py-1 border border-gray-300 rounded-md bg-black text-white"
          @input="searchJobByPosition"
        />
      </div>

      <div class="col-span-1 sm:col-span-1">
        <label
          for="status"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >เลือกสถานะ</label
        >
        <select
          id="status"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-36 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        >
          <option value="ALL">ทั้งหมด</option>
          <option value="ON">เปิดรับสมัคร</option>
          <option value="OFF">ปิดรับสมัคร</option>
        </select>
      </div>
      <div
        class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
      >
        <button
          @click="AddPopup = true"
          class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
        >
          เพิ่มข้อสอบ
        </button>

        <Add v-if="AddPopup" :post="AddPopup" @close="AddPopup = false" />
      </div>

      <h1
        class="my-4 text-3xl text-center font-medium tracking-wider text-purple-700"
      >
        ข้อมูลการประกาศงาน
      </h1>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6">
        <div class="rounded-2xl flex-col dark:bg-slate-900/70 bg-white flex">
          <h1>กราฟวิเคราะจำนวนผู้สมัคร</h1>
        </div>
      </div>

      <table class="w-24 mt-6">
        <thead>
          <tr>
            <th class="border border-gray-300 text-center px-2 py-2">ลำดับ</th>
            <th class="border border-gray-300 text-center px-2 py-2">รูป</th>
            <th class="border border-gray-300 text-center px-2 py-2 th-shorten">
              บริษัท
            </th>
            <th class="border border-gray-300 text-center px-2 py-2 th-shorten">
              หัวข้อ
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              ตำแหน่ง
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              เงินเดือน
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">เพศ</th>
            <th class="border border-gray-300 text-center px-2 py-2">
              วันที่ประกาศ
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              วันที่เปิดรับ
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              วันที่แก้ไข
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              จำนวนผู้ชม
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">
              จำนวนผู้สมัคร
            </th>
            <th class="border border-gray-300 text-center px-2 py-2">สถานะ</th>
            <th class="border border-gray-300 text-center px-2 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(post, index) in posts"
            :key="post._id"
            class="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
          >
            <td class="py-4 border border-gray-300 text-center">
              {{ index + 1 }}
            </td>
            <td class="py-4 border border-gray-300 text-center">
              <img
                :src="post.image"
                alt="Job Image"
                class="w-10 h-10 rounded-full"
              />
            </td>
            <td class="py-4 border border-gray-300 text-center">
              <span v-if="post.Company.length <= 24">{{ post.Company }}</span>
              <span v-else>{{ post.Company.slice(0, 21) }}... </span>
            </td>
            <td class="py-4 border border-gray-300 text-center">
              <span v-if="post.Header.length <= 24">{{ post.Header }}</span>
              <span v-else>{{ post.Header.slice(0, 21) }}... </span>
            </td>
            <td class="py-4 border border-gray-300 text-center">
              {{ post.department }}
            </td>
            <td class="py-4 border border-gray-300 text-center">
              {{ post.salary }}
            </td>
            <td class="py-4 border border-gray-300 text-center">
              {{ post.sex }}
            </td>
            <td class="py-4 border border-gray-300 text-center">
              {{ post.post_date }}
            </td>
            <td class="py-4 border border-gray-300 text-center">
              {{ post.post_date }}
            </td>
            <td class="py-4 border border-gray-300 text-center">
              {{ post.Update_date }}
            </td>
            <td class="py-4 border border-gray-300 text-center">
              {{ post.views }}
            </td>
            <td class="py-4 border border-gray-300 text-center">
              {{ post.applicants }}
            </td>
            <td class="py-4 border border-gray-300 text-center">
              {{ post.Post_status }}
            </td>
            <td class="py-2 border border-gray-300 text-center space-x-2">
              <button
                @click="openDetailsPopup(post)"
                class="btn-details bg-blue-500 hover:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 00-.553.168l-5 3A1 1 0 004 6v5a1 1 0 00.447.832l5 3a1 1 0 001.106 0l5-3A1 1 0 0016 11V6a1 1 0 00-.447-.832l-5-3A1 1 0 0010 2zM6 7.236v5.528L9.037 10 6 7.236z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <View
                v-if="ShowPopup"
                :post="selectedPost"
                @close="ShowPopup = false"
              />
              <button
                @click="openEditModal(post)"
                class="btn-edit bg-yellow-500 hover:bg-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 12.707a1 1 0 010-1.414L13.586 3H11a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 01-2 0V5.414l-8.293 8.293a1 1 0 01-1.414 0zM18 17a1 1 0 01-1 1H3a1 1 0 01-1-1v-6a1 1 0 011-1h10zm-5 2a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm-3 0a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm6-1a1 1 0 011 1h1a1 1 0 110 2h-1a1 1 0 01-1-1V9a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <Edit
                v-if="EditPopup"
                :post="PostToEdit"
                @close="EditPopup = false"
              />
              <button
                @click="deletef(post)"
                class="btn-delete bg-red-500 hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a1 1 0 011-1h8a1 1 0 011 1v1h2a1 1 0 110 2H3a1 1 0 110-2h2V4zm10 4a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h10zm-5 2a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm-3 0a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm6-1a1 1 0 011 1h1a1 1 0 110 2h-1a1 1 0 01-1-1V9a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div class="justify-between items-center block md:flex">
          <div class="flex items-center justify-center">
            <small>หน้า 1 จาก {{ posts.length }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import Add from "./PostAdd.vue";
import Edit from "./PostEdit.vue";
import View from "./PostView.vue";

export default {
  components: {
    Add,
    Edit,
    View,
  },
  data() {
    return {
      posts: [],
      searchText: "",
      ShowPopup: false,
      AddPopup: false,
      EditPopup: false,
      PostToEdit: null,
      isDeleteModalOpen: false,
      selectedPost: null,
    };
  },

  mounted() {
    this.fetchPosts();
    // โดยเพิ่มเงื่อนไขตรวจสอบหาก this.posts ไม่มีข้อมูล ให้เรียกใช้ fetchPosts อีกครั้ง
    if (this.posts.length === 0) {
      this.fetchPosts();
    }
  },
  props: {
    post: Object,
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_POST}/post`
        );
        if (response.data && Array.isArray(response.data.data)) {
          this.posts = response.data.data;
        } else {
          console.error("Response data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    togglePopup() {
      this.AddPopup = !this.AddPopup;
    },
    openEditModal(post) {
      this.PostToEdit = post;
      this.EditPopup = true;
    },

    handleClose() {
      this.$emit("close");
    },

    async deletef(post) {
      Swal.fire({
        title: "ยืนยันการลบ",
        text: "คุณแน่ใจหรือไม่ที่จะลบข้อมูล?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deletePost(post);
        }
      });
    },
    async deletePost(post) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_POST}/post/delete-post/${post._id}`
        );
        Swal.fire("ลบแล้ว!", "ข้อมูลถูกลบออกสำเร็จ", "success");
        this.posts = this.posts.filter((item) => item._id !== post._id);
      } catch (error) {
        console.error("Error deleting data:", error);
        Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถลบข้อมูลได้", "error");
      }
    },
    searchPostById() {
      if (this.searchText.trim()) {
        const filteredPosts = this.posts.filter((post) =>
          post.id.includes(this.searchText)
        );
        this.posts = filteredPosts;
      } else {
        this.fetchPosts();
      }
    },

    openDetailsPopup(post) {
      this.selectedPost = post;
      this.ShowPopup = true;
    },
  },
};
</script>
