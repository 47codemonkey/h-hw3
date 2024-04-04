import { useAnimals } from './hook';

import './animals.css';

export const Animals = ({ animals }) => {
  const { borderWidth, selectedAnimals } = useAnimals({ animals });

  return animals.length ? (
    <table className="animals-table" style={{ borderWidth: `${borderWidth}px` }}>
      <tbody>
        {animals.map((animal, idx) => (
          <tr key={idx} className={selectedAnimals.includes(animal) ? 'selected-row' : ''}>
            <td>{animal.icon}</td>
            <td>{animal.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};
