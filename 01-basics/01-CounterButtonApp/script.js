import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
    name: 'App',

    data() {
        return {
            count: 0
        }
    },

    methods: {
        incrementClick(){
            return this.count++;
        },
    },

});

const app = createApp(App);
const vm = app.mount('#app');

//window.vm = vm; //use debug