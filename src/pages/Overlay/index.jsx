import styled from "@emotion/styled";
import { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import TeamNames from "./components/TeamNames";

const Overlay = () => {
  const containerProps = useSpring({
    to: {
      height: 300,
    },
    from: {
      height: 0,
    },
    reset: true,
    delay: 300,
  });

  return (
    <>
      <Container style={containerProps}>
        <TeamNames />
      </Container>
    </>
  );
};

const Container = styled(animated.div)`
  height: 0px;
  width: 1000px;
  background: #023047;
  overflow: hidden;
  position: relative;
`;

export default Overlay;
