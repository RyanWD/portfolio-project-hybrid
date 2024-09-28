import { TextGenerateEffect } from "./ui/GenerateTextEffect"
import MagicButton from "./ui/MagicBtn"

const Hero = () => {
  return (
    <div className="heroContainer">
    <video
      className="backgroundVideo"
      src="/hybrid_hero.mp4" // Ensure your video file is in the public folder or use an external URL
      autoPlay
      muted
      loop
      playsInline
    />
    <div className="overlay"></div>
    <div className="heroContent">
      <TextGenerateEffect words="All your hybrid workouts in one place" />
   
      <p className="font-customFont">Subtitle or description goes here</p>
      <a href="#wods">
      <MagicButton otherClasses="font-customFont" title="GO TO WODS"/>
      </a>
    </div>
  </div>
  )
}

export default Hero