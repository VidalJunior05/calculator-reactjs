import { useStateValue } from '../contexts/ContextPrimary';

export default ()=>{
    const [state, dispatch] = useStateValue();

    return(
        <div>
            <section className="historicoContas scrollHistory">
                <h2 className="titleHistorico">Histórico de Contas</h2>
                <hr/>
                {state.calculate.history.map((item, index)=>(
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </section>
        </div>
    );
};
