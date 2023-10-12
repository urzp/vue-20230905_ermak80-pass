import { watch } from 'vue';
import { ref } from 'vue';

/**
 * @template T
 * @param {Ref<T>} source - Отслеживаемый ref
 * @returns {Object<{ history: Ref<T[]> }>} - История изменения source
 */
export function refHistory(source) {
  const history = ref([]);
  watch(()=>source.value,
    (n,o)=>{
      history.value.push(n)
    },
    {immediate:true}
  )
  
   return { history };
}
