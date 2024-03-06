import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from '@react-three/drei'

import CanvasLoader from './Loader'

type BallProps = {
    imgUrl: string
}

const Ball = (props: BallProps) => {
    const [decal] = useTexture([props.imgUrl])

    return (
        <Float speed={1.75} rotationIntensity={0} floatIntensity={2}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0.5, 1]} />
            <mesh scale={2.75}>
                <dodecahedronGeometry args={[1, 4]} />
                <meshStandardMaterial
                    color="#ff3a30"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                />
            </mesh>
        </Float>
    )
}

const BallCanvas = ({ icon }: { icon: string }) => {
    return (
        <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            gl={{
                preserveDrawingBuffer: false,
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default BallCanvas
