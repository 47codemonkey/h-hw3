import { useAnimals } from './hook';

export const Animals = ({ animals }) => {
  const { borderWidth, selectedAnimals } = useAnimals({ animals });

  return animals.length ? (
    <table style={{ borderCollapse: 'collapse', border: `solid ${borderWidth}px black` }}>
      <tbody>
        {animals.map((animal, idx) => (
          <tr
            key={idx}
            style={{
              color: selectedAnimals.includes(animal) ? 'green' : 'black',
              fontWeight: selectedAnimals.includes(animal) ? 'bold' : 'normal',
            }}
          >
            <td>{animal.icon}</td>
            <td>{animal.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};
