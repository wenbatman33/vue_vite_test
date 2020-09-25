import { createApp } from 'vue';
import App from '/@/App.vue';
import router from '/@/router';
import store from '/@/store';
import '/@/assets/main.scss';
// const myPElement = window.document.createElement('script');
// myPElement.innerHTML = 'console.log("1234")';

const app = createApp(App).use(router).use(store).mount('#app');
