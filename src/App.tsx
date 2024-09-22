import styled from "@emotion/styled";
import { Canvas, useThree } from "@react-three/fiber";
import { KTX2Loader } from "three-stdlib";

import Layout from "./Layout";
import { Gltf } from "@react-three/drei";

import facecap from "./facecap.glb?url";

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath(
  `https://unpkg.com/three@0.168.0/examples/jsm/libs/basis/`
);

function App() {
  return (
    <Styled>
      <Canvas>
        <Layout>
          <Scene />
        </Layout>
      </Canvas>
    </Styled>
  );
}
export const Styled = styled.div`
  position: fixed;
  inset: 0;
`;
export default App;

function Scene() {
  const { gl } = useThree();

  return (
    <>
      <Gltf
        src={facecap}
        extendLoader={(loader) => {
          loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
        }}
      />
    </>
  );
}
