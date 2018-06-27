<template>
    <div>
        <div>
            <button @click="prompt">test prompt</button>
        </div>
        <div>
            <button @click="confirm">test confirm</button>
            <button @click="confirm(2)">test confirm2</button>
        </div>
        <div>
            <button @click="confirm_">test confirm_</button>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'TPrompt',
        data(){
            return{
                message: 'loader-options!./example/views/prompt/TPrompt.vue?vue&type=script&lang=js 429 bytes {app} [built]\n' +
                '[./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./package/prompt/prompt.vue?vue&type=script&langt]\n' +
                '[./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/less/index.less] ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dis'
            }
        },
        methods: {
            prompt(){
                this.$prompt({message: this.message});
                // this.$prompt({message: 'er/indexstcss-loader/lib'})
            },
            confirm(n){
                // this.$confirm({message: this.message});
                if(n===2){
                    this.$confirm({
                        message: '好好睡一觉2',
                        confirmText: '进入梦乡',
                        callback: () => console.log(this.message)
                    });
                }else{
                    this.$confirm({
                        message: '好好睡一觉',
                        callback: () => console.log(this.message)
                    });
                }
            },
            confirm_(){
                // this.$confirm_({message: this.message, callback: () => console.log(this.message)});
                this.$confirm_({
                    message: '好好吃一顿',
                    cancelText: '不去',
                    confirmText: '立即前往',
                    clearOnClick: true,
                    callback: () => console.log(this.message),
                    cancelFunc: () => console.log('canceled')
                });
            }
        }
    }
</script>