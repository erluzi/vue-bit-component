// 根据组件合成页面内容
import Vue from 'vue';
import A from '../../example/comps/A.vue';
import B from '../../example/comps/B.vue';
import C from '../../example/comps/C.vue';

const constructorMapping = {
    a: Vue.extend(A),
    b: Vue.extend(B),
    c: Vue.extend(C),
};

/**
 * 合成方法
 * @param elRoot 挂载根节点
 * @param arrData 传入数据
 */
function synthesis(elRoot, arrData) {
    arrData.sort((obj1, obj2) => {
        return obj1.order > obj2.order
    });
    let instance;
    for(let comp of arrData){
        instance = new constructorMapping[comp.name]({
            el: document.createElement('div'),
            data: comp.data
        });
        elRoot.appendChild(instance.$el)
    }
}

export {
    synthesis
}