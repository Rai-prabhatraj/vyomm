
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

function Video() {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);
  // const [isMuted, setMuted] = useState(false)

  useEffect(() => {
    videoRef.current.addEventListener("ended", () => {
      console.log("video ended");
      videoRef.current.currentTime = 10;
      videoRef.current.play();
      
    });



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom top",
      },
    });
    tl.to(
      textRef.current,
      {
        translateY: -300,
      },
      0
    );
    tl.to(
      videoRef.current,
      {
        filter: "grayscale(80%)",
      },
      0
    );
  }, []);

  // const toggleMute = () => {
  //   videoRef.current.muted = !videoRef.current.muted;
  //   setMuted(videoRef.current.muted)
  // };

  return (
    <>
        <div ref={triggerRef} className="video-section hidden xl:block">
      <video ref={videoRef} src="https://i.imgur.com/v1B0rHl.mp4" autoPlay muted></video>
      <div className="video-copy">
        <h1 ref={textRef} className="vidVyom font-bebas">
          VYOM
        </h1>
      </div>
    </div>
    {/* <div className="text-3xl text-amber-50 fixed bottom-10 right-10 md:right-20 z-50" onClick={toggleMute}>{isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}</div> */}
    </>

  );
}

export default Video;