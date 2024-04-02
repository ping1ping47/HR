<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">รายการกิจกรรมวันนี้</h1>
    <ul>
      <li v-for="activity in activities" :key="activity.id">
        {{ activity.title }} - {{ activity.date }}
      </li>
    </ul>
    <div class="mt-8">
      <h2 class="text-xl font-bold">จำนวนผู้เข้าชม:</h2>
      <p>{{ totalViews !== null ? totalViews : "กำลังโหลด..." }}</p>
      <h2 class="text-xl font-bold">จำนวนผู้สมัคร:</h2>
      <p>{{ totalApplicants !== null ? totalApplicants : "กำลังโหลด..." }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [],
      totalViews: null,
      totalApplicants: null,
    };
  },
  created() {
    this.fetchActivities();
  },
  methods: {
    async fetchActivities() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_POST}/ExamResults`
        );
        if (!response.ok) {
          throw new Error("เกิดข้อผิดพลาดในการโหลดข้อมูล");
        }
        const data = await response.json();
        // กรองข้อมูลเฉพาะกิจกรรมที่มีการสอบและสถานะเป็น "รอสัมภาษณ์"
        const filteredActivities = data.filter(
          (activity) => activity.status === "รอสัมภาษณ์"
        );
        // สร้างรายการกิจกรรมใหม่ที่ปรับเปลี่ยนโครงสร้างและข้อมูลให้ตรงกับต้องการ
        this.activities = filteredActivities.map((activity) => ({
          id: activity._id,
          title: activity.user_name + " - " + activity.results,
          date: activity.exam_at,
        }));
        // คำนวณจำนวนผู้เข้าชมและผู้สมัคร
        this.calculateTotals(filteredActivities);
      } catch (error) {
        console.error(error);
      }
    },
    calculateTotals(activities) {
      // คำนวณจำนวนผู้เข้าชม
      this.totalViews = activities.reduce(
        (total, activity) => total + activity.views,
        0
      );
      // คำนวณจำนวนผู้สมัคร
      this.totalApplicants = activities.reduce(
        (total, activity) => total + activity.applicants,
        0
      );
    },
  },
};
</script>
