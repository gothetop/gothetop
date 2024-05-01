import {reactive, onMounted} from 'vue';
import axios,{AxiosError} from 'axios';

// 数据方法都要写在一个函数中，然后通过export交出去
export default function () {
    // 数据
    let dog_list = reactive<string[]>([]);


    // 方法
    async function addDog(){
        try{
            // 发送请求
            let dog_image = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            // 维护数据
            console.log(dog_image);
            dog_list.push(dog_image.data.message);
        }
        catch (error){
            alert(error);
        }
    }

    // 在这里面也可以使用钩子函数
    // 在挂载完成之后自动加载一张狗狗图片
    onMounted(() => {
        addDog();
    });

    // 在这里将外部需要使用的变量或者函数交出去
    return {dog_list, addDog};
}