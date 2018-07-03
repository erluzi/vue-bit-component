<template>
    <div>
        <p @click="to2">PageSynthesis</p>
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
            // todo : get mockData from remote server
            console.log('PageSynthesis created')
        },
        mounted(){
            //want: Page.synthesis([{}, {}])
            synthesis(document.querySelector('.el-root'), mockData)
        },
        methods:{
            to2(){
                this.$router.push({name: 'PageSynthesis', query: {name: 'a'}})
            }
        },
        watch:{
            $route(){
                console.log(1)
            }
        }
    }
</script>