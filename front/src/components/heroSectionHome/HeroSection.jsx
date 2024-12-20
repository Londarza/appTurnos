import { HeroContainer, HeroContent, HeroButton } from "./HeroSection";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const idUserLog = useSelector((state) => state.userSlice.user.id);

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroButton to={idUserLog ? "/schedule" : "/loguin"}>
            Agendar Turno
          </HeroButton>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
