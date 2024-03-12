import { useState, useEffect } from 'react';

export const useAnimals = ({ animals }) => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [borderWidth, setBorderWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * animals.length);
      const selectedAnimal = animals[randomIndex];
      setSelectedAnimals((prevSelected) => [...prevSelected, selectedAnimal]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (selectedAnimals.length >= animals.length / 2) {
      setBorderWidth(10);
    }
    if (selectedAnimals.length === animals.length) {
      setBorderWidth(20);
    }
  }, [selectedAnimals]);

  return { borderWidth, selectedAnimals };
};
