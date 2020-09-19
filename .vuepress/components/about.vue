<template>
    <section class="about" v-full-height>
        <div class="grid">
            <matter-wrap />
            <Content />
        </div>
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

    .grid {
        display: grid;
        grid-template-columns: 1fr 700px;
        padding: 20px;
    }

    .content {
        padding: 20px;
        // margin: 20px;
        // position: fixed;
        top: 20px;
        right: 20px;
        bottom: 20px;
        left: 20px;
        margin-left: auto;
        max-width: 700px;
        background-color: #f1f1f1;
        overflow-y: auto;

        @media (max-width: 700px) {
            max-width: 100%;
            max-height: initial;
            top: 10px;
            right: 10px;
            bottom: 10px;
            left: 10px;
        }

        & > * {
            max-width: 700px;
        }
        a {
            text-decoration: underline;
        }
        ul {
            padding-left: 20px;

            @media (max-width: 700px) {
                padding-left: 15px;
            }
        }
    }
}

// mobile
@media (max-width: 750px) {
    section.about {
        .entry {
            -webkit-overflow-scrolling: touch;
            max-width: calc(100% - 80px);
        }
    }
}
</style>
