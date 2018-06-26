<template>
    <div>
        <router-link :to="{name: 'TButton'}">TButton</router-link>
        <router-link :to="{name: 'TLoader'}">TLoader</router-link>
    </div>
</template>
<script>
    export default {
        name: 'Home'
    }
</script>