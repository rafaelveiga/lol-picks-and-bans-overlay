import styled from "@emotion/styled";
import { useState } from "react";
import { animated, useSpring } from "react-spring";

const TeamNames = () => {
  const [teamAnimFinished, setTeamAnimFinished] = useState(false);

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
    delay: 700,
    onRest: () => setTeamAnimFinished(true),
  });

  const smallTeamNameProps = useSpring({
    to: {
      fontSize: 50,
      letterSpacing: -2,
      bottom: -110,
    },
    from: {
      fontSize: 100,
      letterSpacing: -5,
      bottom: 0,
    },
    immediate: !teamAnimFinished,
    reset: true,
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

  const vsSecondStageProps = useSpring({
    to: {
      height: 300,
      width: 50,
      borderRadius: 0,
      lineHeight: "300px",
    },
    from: {
      height: 50,
      width: 50,
      borderRadius: 50,
      lineHeight: "50px",
    },
    immediate: !teamAnimFinished,
    reset: true,
  });

  return (
    <Teams>
      <Team style={!teamAnimFinished ? teamNameProps : smallTeamNameProps}>
        Heroic
      </Team>
      <Vs style={!teamAnimFinished ? vsProps : vsSecondStageProps}>vs</Vs>
      <Team style={!teamAnimFinished ? teamNameProps : smallTeamNameProps}>
        Astralis
      </Team>
    </Teams>
  );
};

export default TeamNames;

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
  flex: 1;

  &:first-child {
    text-align: right;
  }
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
