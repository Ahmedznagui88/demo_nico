import Vista1 from './Vista1';
import Vista2 from './Vista2';

const Viste = {
  'vista1': Vista1,
  'vista2': Vista2,
};

export default function MyVisteCatalogo({ name }) {
  const CurrentVista = Viste[name];
  return (
    <div>
      <CurrentVista />
    </div>
  );
}