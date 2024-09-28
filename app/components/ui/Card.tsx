"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { FaPersonRunning, FaPersonSkiing } from "react-icons/fa6";

export const Card = React.memo(
  ({
    card,
    typeImg,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    typeImg: string;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative overflow-hidden bg-gray-100 dark:bg-neutral-900 h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {/* overflow-hidden */}

      <Image
        src={typeImg}
        alt={card.title}
        fill
        className="object-contain absolute inset-0"
      />
      <span className="absolute top-0 m-3 font-customFont tracking-wide bg-black p-3">
        {card.title} {card.workout.includes('run') && <FaPersonRunning className="text-lg"/>}
      </span>
      <div
        className={cn(
          "absolute inset-0 bg-black/80 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-sm font-medium bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-200 ">
          <p className="font-ger">{formatDescriptionWithBr(card.workout)}</p>

          {card.type}
          
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  id: number;
  title: string;
  type: string;
  workout: string;
};

// Function to split description and insert <br /> elements
const formatDescriptionWithBr = (text: string) => {
  return text.split("|").map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < text.split("|").length - 1 && <br />}
    </React.Fragment>
  ));
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          typeImg={"/" + card.type + ".png"}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
