<template>
  <div class="page2">
    <div class="left" style="width:300px;min-height:700px ;">
      <a-card size="small"   
	  v-for="(item,index) in 4" :key="index"
	  class="card"
	  >
	  <h1>xx性能</h1>
	  <span>20%</span>
      </a-card>
    </div>
	<div class="right">
		<lineChart 
			boxWidth="1100px"
			boxHeight="700px"
		/>
	</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import lineChart from "../../components/lineChart.vue";
export default defineComponent({
  components: {
    lineChart,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.page2{
	display: flex;
	justify-content: space-between;
	.left{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.card{
			width: 300px;
			height: 150px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			h1 {
            color: red;
            font-size: 24px;
          }
		  span{
			padding-left: 20px;
		  }
		}
		
	}
}
</style>
