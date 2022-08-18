<template>
  <div
    ref="myChart"
    :style="{width: boxWidth, height: boxHeight,backgroundColor:backgroundColor}"
  ></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ref,computed } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "linChart",
  components: {},
  props: {
    boxWidth: String,
    boxHeight: String,
  },
  setup(props) {
    const myChart = ref<HTMLElement>();
    console.log(myChart);
    const myCharts = ref<any>();
    setTimeout(() => {
      // 绘制图表
      myCharts.value = echarts.init(myChart.value!);
      myCharts.value.setOption({
        title: {
          text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      });
    }, 10);

    let boxWidth = computed(() => props.boxWidth);
    let boxHeight = computed(() => props.boxHeight);
    let backgroundColor = '#fff';

    return {
      myChart,
      boxWidth,
      boxHeight,
      backgroundColor
    };
  },
});
</script>
