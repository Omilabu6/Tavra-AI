import React, { useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Discover = () => {
  const pathRef = useRef(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength.toString();

    const handleScroll = () => {
      const rect = path.getBoundingClientRect();
      const pathTop = rect.top;
      const pathBottom = rect.bottom;
      const windowHeight = window.innerHeight;

      const visibleStart = Math.max(0, -pathTop);
      const visibleEnd = Math.min(rect.height, windowHeight - pathTop);
      const visibleHeight = Math.max(0, visibleEnd - visibleStart);
      const pathHeight = rect.height;

      const visibleRatio = visibleHeight / pathHeight;
      const startOffset = visibleStart / pathHeight;

      const drawStart = pathLength * startOffset;
      const drawLength = pathLength * visibleRatio;

      path.style.strokeDashoffset = (pathLength - drawLength - drawStart).toString();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={container} className="text-black bg-[#fde7cc] pt-50">
      <h1 className="text-xl font-semibold py-20 text-center">Discover the flow</h1>

      <div className="md:block  hidden relative w-full h-full">
        <svg
          width="369"
          height="661"
          viewBox="0 0 369 661"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1000px] absolute  h-[1500px] translate-x-45"
        >
          <path
            ref={pathRef}
            d="M0.0966797 36.5089C59.5788 30.7533 108.499 1.45973 141.597 1.00912C187.86 0.379268 210.6 32.3685 204.097 99.0068C199.651 162.703 184.567 251.733 178.597 305.007C163.513 439.59 123.018 526.501 161.597 637.507C208.084 696.553 289.441 616.098 368.597 626.509"
            stroke="url(#paint0_linear_168_31)"
            strokeWidth="2"
            style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_168_31"
              x1="194.847"
              y1="1.00683"
              x2="194.847"
              y2="687.007"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B5E48C" />
              <stop offset="0.360577" stopColor="#99D98C" />
              <stop offset="1" stopColor="#D9ED92" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex relative z-10 flex-col gap-7">
        <div className="h-[400px] ml-30 backdrop-blur-3xl bg-white/10  hover:scale-105 transform transition-all w-[400px] shadow-2xl border rounded-3xl p-6">
          <div className="p-20 bg-black rounded-3xl mb-6"></div>
          <h1 className="text-2xl font-bold">Choose your Path</h1>
          <h2 className="text-xl">
            Pick a tech skill web development, design, data science, or AI and Tavra instantly builds your personalized learning roadmap.
          </h2>
        </div>

        <div className="flex flex-col justify-end mr-30 items-end">
          <div className="h-[400px] backdrop-blur-3xl bg-white/10  hover:scale-105 transform transition-all ml-30 w-[400px] shadow-2xl border rounded-3xl p-6">
            <div className="p-20 bg-black rounded-3xl mb-6"></div>
            <h1 className="text-2xl font-bold">Chat & Learn</h1>
            <h2 className="text-xl">
              Talk to Tavra like a real mentor. Ask questions, get instant explanations, and practice with guided challenges.
            </h2>
          </div>
        </div>

        <div className="h-[400px] backdrop-blur-3xl bg-white/10  hover:scale-105 transform transition-all ml-30 w-[400px] shadow-2xl border rounded-3xl p-6">
          <div className="p-20 bg-black rounded-3xl mb-6"></div>
          <h1 className="text-2xl font-bold">
            Test & Improve
            </h1>
          <h2 className="text-xl">
           Take quizzes, solve mini-projects, and get feedback that helps you improve faster.
           </h2>
        </div>

        <div className="flex flex-col  justify-end mr-30 items-end">
          <div className="h-[400px] hover:scale-105 transform transition-all backdrop-blur-3xl bg-white/10  ml-30 w-[400px] shadow-2xl border rounded-3xl p-6">
            <div className="p-20 bg-black rounded-3xl mb-6"></div>
            <h1 className="text-2xl font-bold">
              Track Your Progress
              </h1>
            <h2 className="text-xl">
              Tavra keeps track of your goals, achievements, and skill growth all powered by AI.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
