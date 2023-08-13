import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesConfig from "./config/particles-config";

export const SnowBackground = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

  return (
    <Particles init={particlesInit} options={particlesConfig} />
  )
}