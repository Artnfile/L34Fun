import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

function Bolt() {
  return <Float speed={2} rotationIntensity={0.16} floatIntensity={0.5}><group rotation={[0.1, -0.35, 0]}>
    <mesh><boxGeometry args={[2.5, 1.6, 1.25]} /><meshStandardMaterial color="#ff774d" roughness={0.35} /></mesh>
    <mesh position={[0, 1.18, 0]}><sphereGeometry args={[1.05, 32, 24]} /><meshStandardMaterial color="#f9d669" roughness={0.25} /></mesh>
    <mesh position={[-0.37, 1.28, 0.9]}><sphereGeometry args={[0.19, 20, 20]} /><meshStandardMaterial color="#17335b" emissive="#17335b" /></mesh>
    <mesh position={[0.37, 1.28, 0.9]}><sphereGeometry args={[0.19, 20, 20]} /><meshStandardMaterial color="#17335b" emissive="#17335b" /></mesh>
    <mesh position={[0, -1.1, 0]}><cylinderGeometry args={[0.7, 0.8, 0.28, 32]} /><meshStandardMaterial color="#264d88" /></mesh>
    <mesh position={[0, 2.35, 0]} rotation={[0.2, 0, 0]}><cylinderGeometry args={[0.07, 0.07, 0.6, 16]} /><meshStandardMaterial color="#264d88" /></mesh>
    <mesh position={[0, 2.7, 0]}><sphereGeometry args={[0.15, 18, 18]} /><meshStandardMaterial color="#5de0cf" emissive="#2aa99b" /></mesh>
  </group></Float>
}
export default function RobotScene() { return <div className="robot" aria-label="A friendly orange and yellow robot named BOLT-5"><Canvas camera={{ position: [0, 0.6, 7], fov: 42 }}><ambientLight intensity={1.7}/><directionalLight position={[4, 5, 5]} intensity={2}/><Bolt/><OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.5}/></Canvas><p><b>BOLT-5</b> · curious guide</p></div> }
