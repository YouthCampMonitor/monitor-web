import { createApp } from 'vue';
// import './style.css'
import './style/index.scss';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import dayjs from 'dayjs';

const app = createApp(App);
createApp(App).use(router).use(Antd).mount('#app');
app.config.globalProperties.day = dayjs; //全局挂载
