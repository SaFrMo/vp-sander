<template>

    <main class="front-page">

        <section class="planet-earth" aria-label="Graphic showing a blue circle being orbited by a gray circle, meant to evoke the moon orbiting the Earth. The words 'space station' orbit the gray circle.">

            <div class="planet earth">
                <div class="planet moon">
                    <p class="space-station" aria-hidden="true">space station</p>
                </div>
            </div>

        </section>

        <main-menu/>

    </main>

</template>

<style lang="scss">
.front-page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;

    .planet-earth {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

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
        }
    }
}
</style>
