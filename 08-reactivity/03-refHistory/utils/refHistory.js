import { ref } from 'vue';

/**
 * @template T
 * @param {Ref<T>} source - Отслеживаемый ref
 * @returns {Object<{ history: Ref<T[]> }>} - История изменения source
 */
export function refHistory(source) {
  //const history = ref();
  // ...
  const history = new Proxy([],{
    construct(target){
      target.push(source.value)
    },
    set(target,m,val){
      target.push(val)
    },
    get(target){
      return target
    }
  })
  return { history };
}
