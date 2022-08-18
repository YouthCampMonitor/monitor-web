<template>
  <div class="page1">
    <div class="header" style="margin-bottom: 20px">
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
      <a-button type="link">Link Button</a-button>
    </div>
    <div class="main">
      <div class="left">
        <h1>数据总览</h1>
        <a-card style="width: 600px">
          <div v-for="(item, index) in 3" :key="index">
            <h1>100</h1>
            <span>数据总量</span>
          </div>
        </a-card>
        <h1 style="margin-top: 20px">图表概览</h1>
        <lineChart boxWidth="600px" boxHeight="400px" />
      </div>
      <div class="right">
        <h1>错误日志</h1>
        <a-table :columns="columns" :data-source="data">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                <smile-outlined />
                Name
              </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'tags'">
              <span>
                <a-tag
                  v-for="tag in record.tags"
                  :key="tag"
                  :color="
                    tag === 'loser'
                      ? 'volcano'
                      : tag.length > 5
                      ? 'geekblue'
                      : 'green'
                  "
                >
                  {{ tag.toUpperCase() }}
                </a-tag>
              </span>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <a>Invite 一 {{ record.name }}</a>
                <a-divider type="vertical" />
                <a>Delete</a>
                <a-divider type="vertical" />
                <a class="ant-dropdown-link">
                  More actions
                  <down-outlined />
                </a>
              </span>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import lineChart from "../../components/lineChart.vue";
// 表格数据
const columns = [
  {
    name: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
    lineChart,
  },
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>

<style lang="scss">
.page1 {
  .main {
    display: flex;
    justify-content: space-between;
    .left {
      width: 600px;
      height: 100%;
      h1 {
        font-size: 24px;
      }
      .ant-card-body {
        display: flex;
        height: 200px;
        justify-content: space-between;
        align-items: center;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: auto;
          h1 {
            color: red;
            font-size: 50px;
            margin: 0;
          }
        }
      }
    }

    .right {
      width: 800px;
      h1 {
        font-size: 24px;
      }
    }
  }
}
</style>
