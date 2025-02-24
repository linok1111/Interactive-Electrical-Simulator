/* script.js */
// Setup Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("simulatorCanvas") });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a switch model (simple box)
const geometry = new THREE.BoxGeometry(1, 2, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
const switchModel = new THREE.Mesh(geometry, material);
scene.add(switchModel);

camera.position.z = 5;

// Toggle switch color on click
let isOn = false;
window.addEventListener("click", () => {
    isOn = !isOn;
    switchModel.material.color.set(isOn ? 0x00ff00 : 0x808080); // Green when ON, Gray when OFF
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Handle resizing
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
