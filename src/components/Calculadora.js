import { useState } from 'react';
import {useStateValue} from '../contexts/ContextPrimary';



export default ()=>{
    const [screen, setScreen] = useState('0');

    const [state, dispatch] = useStateValue();

    const addScreen = (itemKeyBoard) => {

        if(screen === '0'){
            setScreen(itemKeyBoard);
        }else{
            setScreen(screen + itemKeyBoard);
        }
    }
    const calculateResult = () => {
        let resultOperation = eval(screen.toString());
        
        
        dispatch({
            type: 'addCalculateNew',
            calculate: `${screen} = ${resultOperation}`
           
        });
     
        setScreen(resultOperation);
    }

    return(
        <div>
            <section className={`calculadora calculo`}>
                <div className="inputCalculadora">
                    {screen}
                </div>
                <br/>
                <div class="gridButtons">
                    <button className="itemButton" onClick={()=>setScreen('0')}>C</button>
                    <button className="itemButton buttonOperator" onClick={()=>addScreen('/')}>÷</button>
                    <button className="itemButton buttonOperator"  onClick={()=>addScreen('*')}>x</button>
                    <button className="itemButton buttonOperator" onClick={()=>addScreen('-')}>-</button>

                    <button className="itemButton" onClick={()=>addScreen('7')}>7</button>
                    <button className="itemButton" onClick={()=>addScreen('8')}>8</button>
                    <button className="itemButton" onClick={()=>addScreen('9')}>9</button>
                    <button className="itemButton gridRow2 buttonOperator" onClick={()=>addScreen('+')}>+</button>

                    <button className="itemButton" onClick={()=>addScreen('4')}>4</button>
                    <button className="itemButton" onClick={()=>addScreen('5')}>5</button>
                    <button className="itemButton" onClick={()=>addScreen('6')}>6</button>

                    <button className="itemButton" onClick={()=>addScreen('1')}>1</button>
                    <button className="itemButton" onClick={()=>addScreen('2')}>2</button>
                    <button className="itemButton" onClick={()=>addScreen('3')}>3</button>
                    <button className="itemButton  gridRow2 buttonOperator" onClick={()=>calculateResult()}>=</button>

                    <button className="itemButton zeroButton" onClick={()=>addScreen('0')}>0</button>
                    <button className="itemButton" onClick={()=>addScreen('.')}>,</button>
                    
                    
                </div>
            </section>
        </div>
    );
};
