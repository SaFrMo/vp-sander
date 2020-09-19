<template>
    <section class="about" v-full-height>
        <div class="grid">
            <matter-wrap />
            <div class="content-wrap">
                <Content />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
$color1: #ffffef; //#fffceb; //rgba(255, 231, 76, 1);
$color2: rgba(255, 89, 100, 1);
$color3: rgba(89, 195, 195, 1);
$color4: rgba(13, 59, 102, 1);
$color5: rgba(250, 240, 202, 1);

section.about {
    background-color: $color1;

    @media (max-width: 700px) {
        background: #fffceb;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr minmax(auto, 700px);
        // padding: 20px 0 20px 20px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        @media (max-width: 700px) {
            grid-template-columns: 100%;
        }
    }
    .matter-wrap {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .content-wrap {
        overflow-y: auto;
    }
    .content {
        padding: 20px;
        max-width: 700px;
        background-color: #fff;
        margin: 20px 20px 20px 0;

        @media (max-width: 700px) {
            max-width: 100%;
            max-height: initial;
            top: 10px;
            right: 10px;
            bottom: 10px;
            left: 10px;
            margin: 10px;
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
        .matter-wrap {
            display: none;
        }
        .entry {
            -webkit-overflow-scrolling: touch;
            max-width: calc(100% - 80px);
        }
    }
}
</style>
