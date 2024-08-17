import { HeroContainer, HeroContent, HeroButton } from "./HeroSection";



const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroContent>
                <HeroButton to="/schedule">Agendar Turno</HeroButton>
                </HeroContent>
            </HeroContainer>
        </>

    );
};

export default HeroSection;