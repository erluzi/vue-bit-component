<template>
    <div>
        <button @click="start()">loader full start</button>
        <div>
            <button @click="start(1)">loader1 start</button>
            <button @click="stop(1)">loader1 stop</button>
            <div class="box-loader loader1">
                box loader 1
            </div>
        </div>
        <div>
            <button @click="start(2)">loader2 start</button>
            <button @click="stop(2)">loader2 stop</button>
            <div class="box-loader loader2">
                box loader 2
            </div>
        </div>
    </div>
</template>
<script>
    import {Loader} from '../../../src/index'
    export default {
        name: 'TLoader',
        data(){
            return{
                loader1: null,
                loader2: null
            }
        },
        methods: {
            start(n){
                if(n===1){
                    this.loader1 = Loader.loading({target: '.loader1'});
                }else if(n===2){
                    this.loader2 = Loader.loading({target: '.loader2'});
                }else{
                    Loader.loading({});
                    setTimeout(() => {
                        Loader.close()
                    }, 2000)
                }
            },
            stop(n){
                if(n===1){
                    this.loader1 && this.loader1.close()
                }else if(n===2){
                    this.loader2 && this.loader2.close()
                }
            }
        }
    }
</script>