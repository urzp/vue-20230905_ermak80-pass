import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
    name: 'App',
    data(){
        return{
            A_operand:'',
            B_operand:'',
            operator: '',
        }
    },

    methods: {
        calculate( a = this.A_operand, b = this.B_operand, operator = this.operator, ifDef = operand => operand === ''){
            if(ifDef(a)||ifDef(b)||!operator) return '';
            if(b == 0 && operator == "divide") return "Ошибка: деление на 0";
            let result
            switch(operator){
                case "sum": result = a + b; break;
                case "subtract": result = a - b; break;
                case "multiply": result = a * b; break;
                case "divide": result = a / b; break;
            }
            return result
        },
    },

    computed:{
        result(){
            return this.calculate()
        }
    }
})


const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm; //use debug