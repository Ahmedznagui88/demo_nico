import Vista1 from './Vista1';
import Vista2 from './Vista2';
import Vista3 from './Vista3';
import Vista4 from './Vista4';
import Vista5 from './Vista5';
import Vista6 from './Vista6';
import Vista7 from './Vista7';

const Viste = {
  'vista1': Vista1,
  'vista2': Vista2,
  'vista3': Vista3,
  'vista4': Vista4,
  'vista5': Vista5,
  'vista6': Vista6,
  'vista7': Vista7,
};

export default function MyVisteCatalogo({ name }) {
  const CurrentVista = Viste[name];
  return (
    <div>
      <CurrentVista />
    </div>
  );
}