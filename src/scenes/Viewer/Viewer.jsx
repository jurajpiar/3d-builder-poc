import React from "react";
// import { Math as THREEMath } from 'three';
// import Canvas from './scenes/OrthoCanvas/OrthoCanvas';
import { Canvas } from "react-three-fiber";
// import * as THREE from "three";
import "./Viewer.scss";
// import Cuboid from "../../components/Cuboid/Cuboid";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/Modal/Modal";

class Viewer extends React.Component {
  state = {
    invalidateFrameloop: true
  };
  // canvasRef = React.useRef();

  render() {
    return (
      <div className="Viewer">
        <Modal></Modal>
        <Canvas
          // ref={this.canvasRef}
          orthographic
          camera={{
            position: [0, 0, 200],
            zoom: 3
          }}
          invalidateFrameloop={this.state.invalidateFrameloop}
        >
          <Controls>
            {/* <ambientLight color="lightblue" />
            <line>
              <geometry
                attach="geometry"
                vertices={[[0, 100, 0], [0, -100, 0]].map(
                  v => new THREE.Vector3(...v)
                )}
                onUpdate={self => (self.verticesNeedUpdate = true)}
              />
              <lineBasicMaterial attach="material" color="black" />
            </line>
            <line>
              <geometry
                attach="geometry"
                vertices={[[-100, 0, 0], [100, 0, 0]].map(
                  v => new THREE.Vector3(...v)
                )}
                onUpdate={self => (self.verticesNeedUpdate = true)}
              />
              <lineBasicMaterial attach="material" color="black" />
            </line>
            <Cuboid position={[-60, 0, 0]} dimensions={[50, 100, 10]} />
            <Cuboid
              position={[0, 0, 0]}
              dimensions={[50, 100, 20]}
              // face={}
            /> */}
          </Controls>
        </Canvas>
      </div>
    );
  }
}

export default Viewer;
