<template>
    <main class="home">
        <h1 class="title">Sander Moolin</h1>
    </main>
</template>

<script>
import Vue from 'vue'

export default {}
</script>

<style lang="scss">
.home {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
        background: $black;
        display: inline-block;
        color: $white;
        padding: 10px;
    }
}
</style>
