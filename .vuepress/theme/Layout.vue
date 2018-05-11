<template>

    <main>

        <section class="gallery">
            <planet-earth/>
        </section>

    </main>

</template>

<style lang="scss">
@import 'styles/vars';

body {
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

a {
    text-decoration: none;
    color: $color1;
    transition: color 0.4s;

    &:hover,
    &:focus {
        color: $color2;
    }
}

// transitions
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}

// gallery
.gallery {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.gallery > * {
    width: 100%;
    height: 100%;
}
</style>
