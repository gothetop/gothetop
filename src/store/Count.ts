import {defineStore} from 'pinia';
import { ref, computed } from 'vue';

// 选项时 写法
// export const useConutStore = defineStore('Count', {
//     actions: {
//         add(value: number) {
//             this.sum += value;
//         },
//         sub(value: number) {
//             // 这就是action的灵活性，可以进行一些逻辑判断，这里只是举一个小例子，其实可以有更复杂的判断
//             if (this.sum > 0) {
//                 this.sum -= value;
//             }else{
//                 alert("总和不能小于0");
//             }
//         }
//     },
//     state() {
//         return {
//             sum: 1
//         }
//     },
//     // 这个getter属性 就相当于是 模板中的计算属性  computed
//     getters: {
//         // 第一种写法，返回一个数据   写法 数据：函数
//         bigSum: state => state.sum * 10,
//         // 第二种写法，
//         bigbigSum(state): number {
//             return state.sum * 10 * 10;
//         }
//     }
// });

// 组合式写法   getter用computed代替掉
export const useConutStore = defineStore('Count', () => {
    // 共享的数据
    const sum = ref(1);
    // 方法
    function add(value: number){
        sum.value += value;
    }

    function sub(value: number) {
        sum.value -= value;
    }

    const bigSum = computed({
        get() {
            return sum.value * 10;
        },
        set(value){

        }
    });
    const bigbigSum = computed({
        get() {
            return sum.value * 100;
        },
        set(value){

        }
    });
    return {sum, sub, bigSum, bigbigSum, add}
});