<template>

    <div class="thanks">
        <h2>Thanks for using this platform, help is on the way!</h2>
        <i class="far fa-check-circle fa-10x"></i>
    </div>
    
</template>

<script>
export default {
    name: 'Thanks'
}
</script>

<style>
i{
    color:#52b788
}

.thanks{
    padding: 5rem 0;
    margin: 2rem 0;
}

@media screen and (max-width:417px){
    .thanks i{
    color:#52b788;
    font-size: 8rem;
}

h2{
    font-size: 1.5rem;
}
.thanks{
    padding: 2rem 0;
    margin: 4rem 0 8rem;
}
}

@media screen and (max-width:321px){
    .thanks i{
    color:#52b788;
    font-size: 7rem;
}

h2{
    font-size: 1.3rem;
}
.thanks{
    padding: 2rem 0;
    margin: 2rem 0 8rem;
}
}
</style>