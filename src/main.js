import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { Edit } from '@element-plus/icons-vue';

const iconConf = {
  Edit,
};

const app = createApp(App);
app.use(ElementPlus);
Object.keys(iconConf).forEach((key) => {
  app.component(key, iconConf[key]);
});
app.mount('#app');
