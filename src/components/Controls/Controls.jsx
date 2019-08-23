import React, { useRef, useEffect, useState } from "react";
import { useThree, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });
const camContext = React.createContext();

const Controls = ({ children }) => {
  const { camera, invalidate /* intersect */ } = useThree();
  const api = useState(true);
  const ref = useRef();
  useEffect(() => {
    const currentRef = ref.current;
    const handler = currentRef.addEventListener("change", invalidate);
    return () => currentRef.removeEventListener("change", handler);
  }, [invalidate]);

  return (
    <React.Fragment>
      <orbitControls ref={ref} args={[camera]} enabled={api[0]} />
      <camContext.Provider value={api}>{children}</camContext.Provider>
    </React.Fragment>
  );
};

export default Controls;
