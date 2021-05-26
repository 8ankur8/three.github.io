import './style/main.css'
import * as THREE from 'three'
console.log('hello')
/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Save sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Environnements
 */
// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
camera.position.y = 0
scene.add(camera)

// Test
const group = new THREE.Group()
scene.add(group)

const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial())
cube.position.set(0,0,0)
//cube.rotation.reorder('YXZ')
cube.rotation.y= Math.PI/4
cube.rotation.x= Math.PI/4
cube.rotation.z= Math.PI/4

group.add(cube)

//cube.position.normalize()

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial())
cube1.position.y = -1.35

group.add(cube1)
//cube1.position.normalize()

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial())
cube2.position.y = 1.35
group.add(cube2)

// Axis Helper
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)

/**
 * Loop
 */
const loop = () =>
{
    // Update
    cube.rotation.y += 0.01
    cube1.rotation.y -= 0.01
    cube2.rotation.y -= 0.01

    // Render
    renderer.render(scene, camera)

    // Keep looping
    window.requestAnimationFrame(loop)
}
loop()