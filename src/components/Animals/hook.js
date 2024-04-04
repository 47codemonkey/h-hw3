import { useState, useEffect } from 'react';

export const useAnimals = ({ animals }) => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [borderWidth, setBorderWidth] = useState(0);
  const [remainingAnimals, setRemainingAnimals] = useState(animals);
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      if (remainingAnimals.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingAnimals.length);
        const selectedAnimal = remainingAnimals[randomIndex];
        setSelectedAnimals((prevSelected) => [...prevSelected, selectedAnimal]);
        setRemainingAnimals((prevRemaining) => prevRemaining.filter((animal) => animal !== selectedAnimal));
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [remainingAnimals]);

  useEffect(() => {
    if (selectedAnimals.length === animals.length) {
      clearInterval(intervalId);
    }
    if (selectedAnimals.length >= Math.ceil(animals.length / 2)) {
      setBorderWidth(10);
    }
    if (selectedAnimals.length === animals.length) {
      setBorderWidth(20);
    }
  }, [selectedAnimals, animals]);

  return { borderWidth, selectedAnimals };
};
