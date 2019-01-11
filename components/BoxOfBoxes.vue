<template>
    <div class="box-of-boxes">
        <vue-three-wrap :start="start" :update="update" />
    </div>
</template>

<script>
import * as THREE from 'three'
import { keyframes, easing } from 'popmotion'

const ref = {}

export default {
    data() {
        return {
            cameraX: 4,
            cameraY: 0,
            cameraZ: 10
        }
    },
    methods: {
        start({ scene, camera }) {
            // save and position camera
            ref.camera = camera
            camera.position.set(this.cameraX, this.cameraY, this.cameraZ)

            // save and position camera target
            ref.target = new THREE.Vector3(
                this.cameraX,
                this.cameraY,
                this.cameraZ - 5
            )

            // prep a holder for particles
            const geo = new THREE.Geometry()

            // populate particles
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

            // start camera animation
            keyframes({
                values: [
                    { x: this.cameraX, y: this.cameraY, z: this.cameraZ },
                    { x: 4, y: 0, z: 7 },
                    { x: 1, y: 0, z: -10 }
                ],
                easings: [easing.easeOut, easing.easeIn],
                duration: 3000,
                loop: Infinity
            }).start(({ x, y, z }) => {
                this.cameraX = x
                this.cameraY = y
                this.cameraZ = z
                this.updateCameraPosition()
            })
        },
        update() {
            ref.points.rotation.y -= 0.005

            // color wheel rotation
            // const h = (Math.sin(Date.now() * 0.0005) + 1) / 2
            // ref.points.material.color.setHSL(h, 0.4, 0.1)
        },
        updateCameraPosition() {
            ref.camera.position.set(this.cameraX, this.cameraY, this.cameraZ)
            ref.camera.lookAt(ref.target)
        }
    },
    watch: {
        // cameraX() {
        //     this.updateCameraPosition()
        // },
        // cameraY() {
        //     this.updateCameraPosition()
        // },
        // cameraZ() {
        //     this.updateCameraPosition()
        // }
    }
}
</script>

<style lang="scss">
.box-of-boxes {
    .three-view {
        @include fill(fixed);
    }
}
</style>
