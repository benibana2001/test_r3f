import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <Canvas
    shadows
    orthographic
    camera={{
      zoom: 100,
      near: 1,
      far: 2000,
    }}
  >
    <color args={["#898dcc"]} attach="background" />
    <Experience />

  </Canvas>
)