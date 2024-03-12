import { Animals } from '../components/Animals/Animals';

export const MainPage = () => {
  const animals = [
    { type: 'turtle', icon: '🐢' },
    { type: 'octopus', icon: '🐙' },
    { type: 'fish', icon: '🐠' },
    { type: 'flamingo', icon: '🦩' },
    { type: 'penguin', icon: '🐧' },
  ];

  return <Animals animals={animals} />;
};
