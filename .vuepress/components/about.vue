<template>

    <section class="about" v-full-height>

        <Content/>

    </section>

</template>

<style lang="scss">
$color1: rgba(255, 231, 76, 1);
$color2: rgba(255, 89, 100, 1);
$color3: rgba(89, 195, 195, 1);
$color4: rgba(13, 59, 102, 1);
$color5: rgba(250, 240, 202, 1);

section.about {
    background-color: $color1;

    .content {
        padding: 20px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        max-height: 50vh;
        max-width: 50%;
        background-color: #f1f1f1;
        overflow-y: auto;

        & > * {
            max-width: 700px;
        }
        a {
            text-decoration: underline;
        }
    }
}

// mobile
@media (max-width: 750px) {
    main.about {
        .entry {
            max-width: calc(100% - 80px);
        }
    }
}
</style>
