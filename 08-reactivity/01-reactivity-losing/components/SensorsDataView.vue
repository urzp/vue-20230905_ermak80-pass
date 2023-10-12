<template>
  <div v-if="!sensors">Loading...</div>
  <template v-else>
    <SensorsDataRow v-for="sensor in output" :key="sensor.id" :sensor="sensor" />
  </template>
</template>

<script>
import { SensorsDataController } from '../services/SensorsDataController';
import { SensorsDataStreamingService } from '../services/SensorsDataStreamingService';
import SensorsDataRow from './SensorsDataRow';
import {reactive, computed, ref, toRefs } from '../vendor/vue.esm-browser.js';

export default {
  name: 'SensorsDataView',

  components: { SensorsDataRow },

  data() {
    return {
      sensors: null,
      sensorsValues: [],
    };
  },

  mounted() {
    const SensorsDataStream = new SensorsDataStreamingService()
    this.sensorsDataController = new SensorsDataController(SensorsDataStream);
    
    this.sensorsDataController.addDataCallback(this.callback);

    // Раз в секунду запрашиваем и выводим новые данные сенсоров
    setInterval(() => {
      this.sensorsDataController.getData(); 
    }, 1000);
  },

  beforeUnmount() {
    this.sensorsDataController.removeDataCallback(this.callback);
    this.sensorsDataController.close();
  },

  methods: {
    callback(data) {
      this.setData(data);
    },

    setData(sensors) {
      this.sensors = {}
      this.sensorsValues = []
      for (let key in sensors){
        let sensor = sensors[key]
         this.sensors[key] = sensor
         this.sensorsValues.push(sensor.value)
      }
    },
  },
  watch:{
    sensorsValues(n,o){
      console.log(n[0],o[0])
      let i=0
      for (let key in this.sensors){
        this.sensors[key].value = this.sensorsValues[i]
        i++
      }
    }
  },
  computed:{
    output(){
      let i=0
      let output = {}
      for (let key in this.sensors){
        let sensor = this.sensors[key]
        output = sensor
        output[key].value = this.sensorsValues[i]
        i++
      }
      return output   
    }
  }
};
</script>

<style scoped></style>
