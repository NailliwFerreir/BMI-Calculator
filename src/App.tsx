import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import {levels, calculateBMI, Level} from './helpers/imc';
import { GridItem } from './components/GridItem';
import leftArrow from './assets/leftarrow.png';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow,setToShow] = useState<Level|null>(null);

  const handleCalculteButton = () => {
    if(heightField && weightField){
      setToShow(calculateBMI(heightField, weightField));
    }else {
      window.alert("Por favor preencha todos os campos")
    }
  }
  const handleArrow = ()=> {
    setToShow(null);  
    setHeightField(0); 
    setWeightField(0); 
  }
  return (
  <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={poweredImage} alt="Logo" width={150}/>
      </div>
    </header>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule o seu IMC</h1>
        <p>IMC é a singla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>
        <input 
          disabled={toShow? true: false}
          type="number" 
          placeholder='Digite a sua altura. Ex: 1.5 (em metros) '
          value={heightField>0?heightField:''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
         />
         <input
          disabled={toShow? true: false} 
           type="number" 
           placeholder='Digite o seu peso. Ex: 70.5 (em kilos) '
           value={weightField>0?weightField:''}
           onChange={e => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculteButton} disabled={toShow? true: false} >Calcular</button>
      </div>
      <div className={styles.rightSide}>
        {!toShow &&
        <div className={styles.grid}>
          {levels.map((item, key )=>(
            <GridItem key={key} item={item}/>
          ))}
        </div>
        }
        {
          toShow && 
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleArrow}>
              <img src={leftArrow} alt="Left Arrow" width={30}/>
            </div>
            <GridItem item={toShow}/>
          </div>
        }
      </div>
    </div>
  </div>
  );
}

export default App;
