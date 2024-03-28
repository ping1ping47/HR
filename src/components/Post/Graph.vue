<template>
  <div>
    <div class="flex justify-center mt-8">
      <div class="w-1/2 mx-2">
        <h2 class="text-center">
          กราฟจำนวนครั้งที่เข้าชม ({{ selectedSumviewsChart }})
        </h2>
        <canvas ref="viewsChartCanvas" width="400" height="400"></canvas>
      </div>
      <div class="w-1/2 mx-2">
        <h2 class="text-center">
          กราฟจำนวนผู้สมัคร ({{ selectedSumapplicantsChart }})
        </h2>
        <canvas ref="applicantsChartCanvas" width="400" height="400"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import axios from "axios";

export default {
  data() {
    return {
      selectedDate: new Date().toISOString().slice(0, 10),
      selectedSumviewsChart: null,
      selectedSumapplicantsChart: null,
      viewsChartInstance: null,
      applicantsChartInstance: null,
    };
  },
  mounted() {
    this.renderCharts();
  },
  methods: {
    async clearCharts() {
      if (this.viewsChartInstance) {
        this.viewsChartInstance.destroy();
        this.viewsChartInstance = null;
      }
      if (this.applicantsChartInstance) {
        this.applicantsChartInstance.destroy();
        this.applicantsChartInstance = null;
      }
    },
    async renderCharts() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_POST}/post`
        );
        const posts = response.data.data;

        // Render views chart
        const viewsCtx = this.$refs.viewsChartCanvas.getContext("2d");
        this.viewsChartInstance = new Chart(viewsCtx, {
          type: "bar",
          data: {
            labels: posts.map((post) => {
              const postDate = new Date(post.post_date);
              const monthNames = [
                "มกราคม",
                "กุมภาพันธ์",
                "มีนาคม",
                "เมษายน",
                "พฤษภาคม",
                "มิถุนายน",
                "กรกฎาคม",
                "สิงหาคม",
                "กันยายน",
                "ตุลาคม",
                "พฤศจิกายน",
                "ธันวาคม",
              ];
              return monthNames[postDate.getMonth()];
            }),
            datasets: [
              {
                label: `จำนวน${this.selectedSumviewsChart}`,
                data: posts
                  .filter((post) => post.views > 0)
                  .map((post) => post.views),
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
              x: {
                title: {
                  display: true,
                  text: "เดือน",
                },
              },
            },
            plugins: {
              datalabels: {
                anchor: "end",
                align: "end",
                formatter: (value, context) => {
                  return value;
                },
              },
            },
          },
        });

        // Render applicants chart
        const applicantsCtx = this.$refs.applicantsChartCanvas.getContext("2d");
        this.applicantsChartInstance = new Chart(applicantsCtx, {
          type: "bar",
          data: {
            labels: posts.map((post) => {
              const postDate = new Date(post.post_date);
              const monthNames = [
                "มกราคม",
                "กุมภาพันธ์",
                "มีนาคม",
                "เมษายน",
                "พฤษภาคม",
                "มิถุนายน",
                "กรกฎาคม",
                "สิงหาคม",
                "กันยายน",
                "ตุลาคม",
                "พฤศจิกายน",
                "ธันวาคม",
              ];
              return monthNames[postDate.getMonth()];
            }),
            datasets: [
              {
                label: `จำนวน${this.selectedSumapplicantsChart}`,
                data: posts
                  .filter((post) => post.applicants > 0)
                  .map((post) => post.applicants),
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
              x: {
                title: {
                  display: true,
                  text: "เดือน",
                },
              },
            },
            plugins: {
              datalabels: {
                anchor: "end",
                align: "end",
                formatter: (value, context) => {
                  return value;
                },
              },
            },
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async updateChart() {
      try {
        await this.clearCharts();
        const startDate = this.selectedDate;
        let apiUrl = `${import.meta.env.VITE_API_POST}/post`;
        if (startDate) {
          apiUrl += `?startDate=${startDate}`;
        }
        const response = await axios.get(apiUrl);
        const posts = response.data.data;
        this.applicantsChartInstance.data.labels = posts.map((post) => {
          const postDate = new Date(post.post_date);
          const monthNames = [
            "มกราคม",
            "กุมภาพันธ์",
            "มีนาคม",
            "เมษายน",
            "พฤษภาคม",
            "มิถุนายน",
            "กรกฎาคม",
            "สิงหาคม",
            "กันยายน",
            "ตุลาคม",
            "พฤศจิกายน",
            "ธันวาคม",
          ];
          return monthNames[postDate.getMonth()];
        });
        this.applicantsChartInstance.data.datasets[0].data = posts
          .filter((post) => post.applicants > 0)
          .map((post) => post.applicants);
        this.applicantsChartInstance.update();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>