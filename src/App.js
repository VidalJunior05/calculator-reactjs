import './App.css';

import { StateProvider } from './contexts/ContextPrimary';

import Header from  './components/Header';
import Calculadora from './components/Calculadora';
import HistoricoContas from './components/HistoricoContas';

const Main = () => {
    return(
      <StateProvider>
        <div className="container">
            <Header />
          <main>
            <Calculadora />
            <HistoricoContas />
          </main>
        </div>
      </StateProvider>
    );
}
export default Main;