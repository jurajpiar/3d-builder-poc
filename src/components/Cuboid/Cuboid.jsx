import React, { useState } from "react";
import * as THREE from "three";
import PropTypes from "prop-types";

const Cuboid = props => {
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);
  const loader = new THREE.TextureLoader();

  return (
    <group>
      <mesh
        onClick={e => setActive(!active)}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
        position={props.position}
        material={props.materials}
      >
        <boxGeometry attach="geometry" args={props.dimensions} />
      </mesh>
      <mesh
        position={[
          props.position[0],
          props.position[1],
          props.position[2] + props.dimensions[2] / 2 + 0.1
        ]}
        material={
          new THREE.MeshBasicMaterial({
            map: loader.load(
              "https://threejsfundamentals.org/threejs/resources/images/flower-1.jpg"
            )
          })
        }
      >
        <planeGeometry
          attach="geometry"
          args={[
            props.dimensions[0] - 5,
            props.dimensions[1] - 10,
            props.dimensions[2] - 1
          ]}
        />
      </mesh>
    </group>
  );
};
const vertexPropType = function(props, propName, componentName) {
  if (
    !Array.isArray(props.dimensions) ||
    ![2, 3].includes(props.dimensions.length) ||
    !props.dimensions.every(Number.isInteger)
  ) {
    return new Error(`${propName} needs to be an array of three numbers`);
  }
};

Cuboid.propTypes = {
  dimensions: vertexPropType,
  position: vertexPropType,
  face: PropTypes.string,
  materials: PropTypes.Array
};

Cuboid.defaultProps = {
  materials: [
    new THREE.MeshBasicMaterial({ color: "peachpuff" }),
    new THREE.MeshBasicMaterial({ color: "grey" }),
    new THREE.MeshBasicMaterial({ color: "green" }),
    new THREE.MeshBasicMaterial({ color: "blue" }),
    new THREE.MeshBasicMaterial({ color: "red" }),
    new THREE.MeshBasicMaterial({ color: "brown" })
  ],
  face: "https://threejsfundamentals.org/threejs/resources/images/flower-1.jpg"
};

export default Cuboid;
