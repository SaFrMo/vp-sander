<template>
    <div class="box-of-boxes">
        <vue-three-wrap :start="start" :update="update" />
    </div>
</template>

<script>
import * as THREE from 'three'

const ref = {}

export default {
    methods: {
        start({ scene, camera }) {
            camera.position.z = 4

            // prep a holder for particles
            const geo = new THREE.Geometry()

            for (let i = 0; i < 10000; i++) {
                const point = new THREE.Vector3()
                point.x = THREE.Math.randFloatSpread(3)
                point.y = THREE.Math.randFloatSpread(3)
                point.z = THREE.Math.randFloatSpread(3)

                geo.vertices.push(point)
            }

            const mat = new THREE.PointsMaterial({
                color: 0x050505,
                size: 0.2,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.35
            })

            ref.points = new THREE.Points(geo, mat)

            scene.add(ref.points)
        },
        update() {
            ref.points.rotation.y -= 0.005

            // color wheel rotation
            // const h = (Math.sin(Date.now() * 0.0005) + 1) / 2
            // ref.points.material.color.setHSL(h, 0.4, 0.1)
        }
    }
}
</script>

<style lang="scss">
.box-of-boxes {
    .three-view {
        position: fixed;
        top: 0;
        left: 20%;
        bottom: 0;
        margin: auto;
        width: 300px;
        height: 300px;
    }
}
</style>
