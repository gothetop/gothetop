import {defineStore} from 'pinia';
import {reactive} from 'vue';
import axios from 'axios';
import {nanoid} from "nanoid";

// export const useLoveTalkStore = defineStore('LoveTalk', {
//     actions: {
//       async getLoveTalk(){
//           let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
//           let obj = {
//               id: nanoid(),
//               title
//           }
//           // 放到数组中
//           this.TalkList.push(obj);
//       }
//     },
//     state(){
//         return {
//             TalkList: [
//                 {id: 'ftrfasdf', title: 'hahahahahahhahaha',}
//             ]
//         }
//     }
// })

// 组合式写法
export const useLoveTalkStore = defineStore('LoveTalk', () => {
    // 数据
    const TalkList = reactive([
        {id: "adfadfa", title: 'hadfadfadfadf'}
    ]);

    // 方法
    async function getLoveTalk() {
        let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
        let obj = {
            id: nanoid(),
            title
        }
        TalkList.push(obj);
    }
    return {TalkList, getLoveTalk}
})