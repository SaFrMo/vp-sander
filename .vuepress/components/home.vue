<template>
    <main class="front-page">
        <landing-wrap/>

        <main-menu />
    </main>
</template>

<style lang="scss">
.front-page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;

    .planet-earth {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 700px) {
            transform: scale(0.7);
            width: 70%;
            height: 70%;
            margin: auto;
        }

        .planet {
            background-color: #6666cc;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            animation: revolution 10s infinite linear;
        }
        .moon {
            position: relative;
            top: 350px;
            left: calc(100px - 27px);
            width: 54px;
            height: 54px;
            background-color: #888;

            animation: revolution 5s infinite linear;
        }
        .space-station {
            text-align: center;
            position: relative;
            top: 80px;
            font-size: 30px;
            // transform: scaleY(-1);
            // width: 30px;
            // height: 30px;
            // background: tomato;
            // border-radius: 50%;
        }
    }
}
</style>
