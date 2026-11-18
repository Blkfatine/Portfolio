import React from 'react';
import { motion } from 'framer-motion';

interface FloatingEmojiProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  initialRotate?: number;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

export const FloatingEmoji: React.FC<FloatingEmojiProps> = ({
  src,
  alt,
  className = '',
  size = 48,
  initialRotate = 0,
  duration = 4,
  delay = 0,
  yOffset = 10,
}) => {
  return (
    <motion.div
      className={`absolute select-none pointer-events-auto cursor-pointer z-0 ${className}`}
      initial={{ rotate: initialRotate }}
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        rotate: [initialRotate - 4, initialRotate + 4, initialRotate - 4],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      whileHover={{
        scale: 1.25,
        rotate: initialRotate + 12,
        transition: { duration: 0.2 },
      }}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="drop-shadow-md transition-transform"
        draggable={false}
      />
    </motion.div>
  );
};

export const BackgroundEmojis: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
      
      {/* --- HERO SECTION EMOJIS --- */}
      {/* Uploaded iPhone Growing Heart near Hero Headline */}
      <FloatingEmoji
        src="/emojis/growing-heart.png"
        alt="Growing Heart"
        size={54}
        className="top-24 right-6 lg:right-16 xl:right-32"
        initialRotate={8}
        duration={4.8}
        delay={0.2}
        yOffset={12}
      />

      {/* Ribbon Bow on left */}
      <FloatingEmoji
        src="/emojis/ribbon.png"
        alt="Ribbon Bow"
        size={46}
        className="top-36 left-4 lg:left-14 xl:left-24"
        initialRotate={-10}
        duration={5.2}
        delay={0.6}
        yOffset={10}
      />

      {/* Cherry Blossom near Hero Actions */}
      <FloatingEmoji
        src="/emojis/cherry-blossom.png"
        alt="Cherry Blossom"
        size={44}
        className="top-[420px] left-6 lg:left-28"
        initialRotate={12}
        duration={4.5}
        delay={1.2}
        yOffset={8}
      />

      {/* Sparkles on right */}
      <FloatingEmoji
        src="/emojis/sparkles.png"
        alt="Sparkles"
        size={42}
        className="top-[460px] right-6 lg:right-28"
        initialRotate={-6}
        duration={3.8}
        delay={0.8}
        yOffset={9}
      />

      {/* --- STATS & ABOUT SECTION EMOJIS --- */}
      <FloatingEmoji
        src="/emojis/teddy-bear.png"
        alt="Teddy Bear"
        size={50}
        className="top-[850px] right-4 lg:right-20"
        initialRotate={6}
        duration={5.5}
        delay={1.5}
        yOffset={10}
      />

      <FloatingEmoji
        src="/emojis/growing-heart.png"
        alt="Growing Heart"
        size={48}
        className="top-[1050px] left-4 lg:left-16"
        initialRotate={-8}
        duration={4.6}
        delay={0.4}
        yOffset={11}
      />

      <FloatingEmoji
        src="/emojis/butterfly.png"
        alt="Butterfly"
        size={46}
        className="top-[1350px] right-8 lg:right-24"
        initialRotate={14}
        duration={4.2}
        delay={0.9}
        yOffset={13}
      />

      <FloatingEmoji
        src="/emojis/tulip.png"
        alt="Tulip"
        size={44}
        className="top-[1550px] left-6 lg:left-20"
        initialRotate={-12}
        duration={5.0}
        delay={1.1}
        yOffset={9}
      />

      {/* --- EXPERIENCE SECTION EMOJIS --- */}
      <FloatingEmoji
        src="/emojis/glowing-star.png"
        alt="Glowing Star"
        size={46}
        className="top-[1950px] right-6 lg:right-16"
        initialRotate={10}
        duration={4.4}
        delay={0.3}
        yOffset={10}
      />

      <FloatingEmoji
        src="/emojis/purple-heart.png"
        alt="Purple Heart"
        size={44}
        className="top-[2250px] left-4 lg:left-14"
        initialRotate={-14}
        duration={4.9}
        delay={1.4}
        yOffset={11}
      />

      {/* --- PROJECTS SECTION EMOJIS --- */}
      <FloatingEmoji
        src="/emojis/sparkling-heart.png"
        alt="Sparkling Heart"
        size={52}
        className="top-[2700px] right-6 lg:right-20"
        initialRotate={-6}
        duration={4.5}
        delay={0.5}
        yOffset={12}
      />

      <FloatingEmoji
        src="/emojis/cloud.png"
        alt="Cloud"
        size={48}
        className="top-[2950px] left-6 lg:left-16"
        initialRotate={4}
        duration={5.6}
        delay={1.6}
        yOffset={8}
      />

      <FloatingEmoji
        src="/emojis/growing-heart.png"
        alt="Growing Heart"
        size={46}
        className="top-[3250px] right-8 lg:right-24"
        initialRotate={12}
        duration={4.7}
        delay={0.7}
        yOffset={10}
      />

      {/* --- SKILLS SECTION EMOJIS --- */}
      <FloatingEmoji
        src="/emojis/ribbon.png"
        alt="Ribbon"
        size={46}
        className="top-[3650px] left-4 lg:left-14"
        initialRotate={-8}
        duration={5.1}
        delay={1.0}
        yOffset={11}
      />

      <FloatingEmoji
        src="/emojis/revolving-hearts.png"
        alt="Revolving Hearts"
        size={48}
        className="top-[3950px] right-6 lg:right-18"
        initialRotate={8}
        duration={4.3}
        delay={0.4}
        yOffset={12}
      />

      {/* --- CONTACT SECTION EMOJIS --- */}
      {/* Prominent Growing Heart by Contact Form */}
      <FloatingEmoji
        src="/emojis/growing-heart.png"
        alt="Growing Heart"
        size={58}
        className="top-[4350px] right-4 lg:right-20 xl:right-32"
        initialRotate={-10}
        duration={4.2}
        delay={0.2}
        yOffset={14}
      />

      <FloatingEmoji
        src="/emojis/cherry-blossom.png"
        alt="Cherry Blossom"
        size={46}
        className="top-[4500px] left-4 lg:left-14"
        initialRotate={14}
        duration={4.8}
        delay={0.9}
        yOffset={10}
      />

      <FloatingEmoji
        src="/emojis/sparkling-heart.png"
        alt="Sparkling Heart"
        size={48}
        className="top-[4750px] right-8 lg:right-24"
        initialRotate={6}
        duration={4.6}
        delay={1.3}
        yOffset={11}
      />

    </div>
  );
};
