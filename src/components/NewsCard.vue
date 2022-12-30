<template>
    <div class='space '>
        <div class='header'>
            <h1>{{ title  }}</h1>
        </div>
        <div class='pad h-50'>
            <img :src="jpegUrl" />
        </div>
        <p class='text'>{{ content }}</p>
        <i class='text-right'>Published: {{ convDate }}</i>
    </div>
</template>
<script>
export default {
    computed:{
        convDate(){
            let x = new Date(this.date)
            return x.toDateString()
        }
    },
    props: {
        jpegUrl: {
            type: String,
            required: false,
            default: ''
        },
        title: {
            type: String,
            required: false,
            default: 'Title'
        },
        date: {
            type: String,
            required: false,
            default: ''
        },
        content: {
            type: String,
            required: false,
            default: ''
        },
    }
}
</script>

<style scoped>
@import url('../assets/css/component.css');
</style>