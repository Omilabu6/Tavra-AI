import React, { useState } from 'react';
import Image from 'next/image';

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function Features() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });

  const items: Item[] = [
    {
      id: 1,
      title: "AI Mentor",
      description: "Tavra AI is your personal guide in the world of technology. Instead of watching endless videos or reading tutorials, you talk to Tavra like a real mentor — ask questions, seek advice, and learn through meaningful, interactive conversations. It’s like having a senior developer by your side 24/7.",
      image: "/mentor.png"
    },
    {
      id: 2,
      title: "Personalized Roadmaps",
      description: "No more one-size-fits-all courses. Tavra understands your goals and skill level, then creates a customized roadmap that outlines exactly what to learn and in what order. Whether you're starting with web development, data science, or AI, Tavra designs a step-by-step path made just for you.",
      image: "/roadmap.png"
    },
    {
      id: 3,
      title: "Interactive Challenges",
      description: "Learning with Tavra is active, not passive. After each topic, you get hands-on quizzes and coding challenges that test what you’ve learned. Tavra gives instant feedback so you can understand mistakes and improve faster.",
      image: "/challenges.png"
    },
    {
      id: 4,
      title: "Instant Explanations",
      description: "When you’re stuck or confused, Tavra explains complex topics in simple, relatable ways — just like a human tutor. Whether it’s debugging an error or understanding a new concept, you’ll always get clear answers instantly.",
      image: "/support.png"
    },
    {
      id: 5,
      title: "Progress Tracking",
      description: "Tavra tracks your learning progress intelligently, adapting the difficulty and pace based on your growth. It helps you see how far you’ve come, what areas you’re strong in, and what to improve next — turning learning into a continuous journey of progress.",
      image: "/progres.png"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className=" text-black bg-[#fde7cc] pt-20 flex items-center justify-center p-8">
      <div className="w-full">
        <h1 className="text-xl font-semibold  py-20 text-center">
          Discover More
        </h1>
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onMouseMove={handleMouseMove}
            >
              <div className='flex justify-between items-center gap-20  border-2 Box border-black rounded-4xld py-5 px-10 cursor-pointer transition-all duration-300 hover:scale-[1.02]'>
                <h1 className='text-[10em] font-semibold'> {item.id}</h1>
                <div className=" w-[42em] flex-col flex gap-5 ">
                  <h2 className="text-4xl font-semibold  mb-2">
                    {item.title}
                  </h2>
                  <p className="text-">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image */}
      {hoveredItem && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-300"
          style={{
            left: `${mousePos.x + 20}px`,
            top: `${mousePos.y + 20}px`,
            transform: 'translate(0, -50%)'
          }}
        >
          <div className="relative">
            <img
              src={items.find(item => item.id === hoveredItem)?.image}
              alt=""
              className="w-80 h-60 object-cover rounded-lg shadow-2xl border-2 border-slate-600"
            />
            <div className="absolute inset-0  from-black/40 to-transparent rounded-lg"></div>
          </div>
        </div>
      )}
    </div>
  );
}

