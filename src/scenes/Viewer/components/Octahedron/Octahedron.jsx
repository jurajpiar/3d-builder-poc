import React, { useState } from 'react'

const Octahedron = props => {
    const [active, setActive] = useState(false)
    const [hovered, setHover] = useState(false)
    return (
        <group>
            <mesh onClick={e => setActive(!active)}
                onPointerOver={e => setHover(true)}
                onPointerOut={e => setHover(false)}
                {...props}
            >
                <octahedronGeometry attach="geometry" />
                <meshStandardMaterial attach="material"
                    color="grey"
                    transparent />
            </mesh>
        </group>
    )
}

Octahedron.propTypes = {

}

export default Octahedron
