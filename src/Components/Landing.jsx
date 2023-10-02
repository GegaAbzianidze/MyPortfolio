import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Blurhash } from "react-blurhash";
import ME from "/ME.jpg"

const buttonVariants = {
  initial: { scale: 1 },
  animate: { scale: 1.05 },
  transition: {
    duration: 1,
    yoyo: Infinity, // This will make the animation repeat indefinitely
  },
};

const Landing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);
  const controls = useAnimation();

  setTimeout(() => setIsBlurred(false), 1000);

  const scrollToProjects = () => {
    setIsLoading(true);
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setIsLoading(false), 1000);
  };

  // Trigger the animation when the component mounts
  useEffect(() => {
    controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
  }, [controls]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {isBlurred ? (
          <div className="w-32 h-32 rounded-full object-cover mt-20 overflow-hidden">
            <Blurhash hash="LAKB2Pv|ui%g00?aTK?a_2%MIW={"
            />
          </div>
        ) : (
          <motion.img
            className="w-32 h-32 rounded-full object-cover mt-20"
            src={ME}
            alt="Gega Abzianidze"
            animate={controls}
          />
        )}
        <motion.h1
          className="text-sm font-thin text-gray-400 flex gap-1 items-center mt-8"
          initial={{ opacity: 0 }}
          animate={controls}
        >
          Hi, I&apos;m Gega <Icon icon="ph:hand-waving-duotone" />
        </motion.h1>
        <motion.h2
          className="bg-gradient-to-r to-[#525252] from-[#f0f0f0] bg-clip-text text-transparent text-4xl text-center leading-[3.5rem] mt-10"
          initial={{ opacity: 0 }}
          animate={controls}
        >
          Creating digital <br /> experiences that matter.
        </motion.h2>
        <motion.button
          className="px-8 py-5 bg-[#1a1a1a] mt-16 mb-20"
          onClick={scrollToProjects}
          variants={buttonVariants}
          animate={isLoading ? "animate" : "initial"}
        >
          <h2 className="flex items-center gap-1 text-xs">
            Latest Projects{" "}
            {isLoading && (
              <motion.span
                className="loader"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Icon icon="akar-icons:circle-dotted" />
              </motion.span>
            )}
            {!isLoading && <Icon icon="solar:arrow-right-up-broken" />}
          </h2>
        </motion.button>
      </div>
    </div>
  );
};

export default Landing;
