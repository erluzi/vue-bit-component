<template>
    <div>
        <p>PageSynthesis</p>
        <div class="el-root"></div>
    </div>
</template>
<script>
    // git flow feature finish pageSynthesis

    import {synthesis} from '../../../package/pageSynthesis/index'

    const mockData = [
        {
            name: 'a',
            order: 2,
            data: {name: 'a'}
        },
        {
            name: 'b',
            order: 3,
            data: {name: 'b'}
        },
        {
            name: 'c',
            order: 1,
            data: {name: 'c'}
        }
    ];

    export default {
        name: 'PageSynthesis',
        created(){

        },
        mounted(){
            //want: Page.synthesis([{}, {}])
            synthesis(document.querySelector('.el-root'), mockData)
        }
    }
</script>