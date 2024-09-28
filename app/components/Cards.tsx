"use client";

import { useState, useEffect } from "react";
import { FocusCards } from "./ui/Card";

const Cards = () => {
  const [wods, setWods] = useState<Card[]>([]);

  type Card = {
    id: number
    title: string;
    type: string;
    workout: string
  };
  
  const getNumberRandomWods = (jsonData: Card[], numberOfItems: number) => {
    let randomWods = [];

    for (let index = 0; index < numberOfItems; index++) {
      const randomIndex = Math.floor(Math.random() * jsonData.length);
      const uniqueWod = jsonData.splice(randomIndex, 1)[0];
      randomWods.push(uniqueWod);
    }

    return randomWods;
  };

  const getFirstBatchWods = async () => {
    const res = await fetch("http://localhost:8000/wods");
    const data = await res.json();
    const copyData = [...data];

    if (copyData) {
      const numberRandomWods = getNumberRandomWods(copyData, 12);
      setWods(numberRandomWods);
    }
  };

  useEffect(() => {
    getFirstBatchWods();
  }, []);

  return <div className="">{wods && <FocusCards cards={wods} />}</div>;
};

export default Cards;
