<template>
    <transition name="loading-fade">
        <div class="loading-full" v-show="visible">
            <div class="indicator-wrapper">
                <div class="spinner"></div>
            </div>
            <div class="mask-wrapper"></div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'ErLoader',
        data(){
            return{
                visible: false
            }
        }
    }
</script>