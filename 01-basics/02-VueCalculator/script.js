import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
    name: 'App',
    data(){
        return{
            inputs: {
                A_operand:'',
                B_operand:'',
                operator: '',
            },
            result: '',
        }
    },

    methods: {
        ifDef(operand){
            return  operand === '' ? true : false;
        },

        calculate( a = this.inputs.A_operand, b = this.inputs.B_operand, operator = this.inputs.operator, ifDef = this.ifDef){
            if(ifDef(a)||ifDef(b)||!operator) return false
            if(b == 0 && operator == "divide") return this.result = "Ошибка: деление на 0"
            switch(operator){
                case "sum": this.result = a + b; break;
                case "subtract": this.result = a - b; break;
                case "multiply": this.result = a * b; break;
                case "divide": this.result = a / b; break;
            }
            return this.result
        },
    },

    watch:{
        inputs:{
            deep:true,
            handler(){
                this.calculate();
            }
        },
    }
})


const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm; //use debug