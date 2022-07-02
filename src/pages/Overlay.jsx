import styled from "@emotion/styled";
import { useState } from "react";
import { animated, config, useSpring } from "react-spring";

const Overlay = () => {
  const containerProps = useSpring({
    to: {
      height: 300,
    },
    from: {
      height: 0,
    },
    reset: true,
    delay: 0,
  });

  const teamNameProps = useSpring({
    to: {
      opacity: 1,
      top: 0,
      letterSpacing: -3,
    },
    from: {
      opacity: 0,
      top: 0,
      letterSpacing: 5,
    },
    reset: true,
    delay: 400,
  });

  const vsProps = useSpring({
    to: {
      opacity: 1,
      top: 0,
    },
    from: {
      opacity: 0,
      top: -20,
    },
    delay: 600,
  });

  return (
    <>
      <Container style={containerProps}>
        <Teams>
          <Team style={teamNameProps}>SK Gaming</Team>
          <Vs style={vsProps}>vs</Vs>
          <Team style={teamNameProps}>Astralis</Team>
        </Teams>
      </Container>
    </>
  );
};

const Container = styled(animated.div)`
  height: 0px;
  width: 1000px;
  background: #023047;
  overflow: hidden;
`;

const Teams = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 30px;
`;

const Team = styled(animated.div)`
  position: relative;
  font-family: "Pragati Narrow";
  color: #fefae0;
  font-weight: bold;
  line-height: 300px;
  font-size: 100px;
  text-transform: uppercase;
  letter-spacing: -5px;
`;

const Vs = styled(animated.div)`
  background: #ffb703;
  height: 50px;
  width: 50px;
  position: relative;
  font-family: "Pragati Narrow";
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  border-radius: 50px;
  color: #023047;
`;

export default Overlay;
