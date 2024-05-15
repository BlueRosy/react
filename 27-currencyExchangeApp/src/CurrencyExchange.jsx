
import React, {useState, useEffect, useRef} from 'react'

function CurrencyExchange() {

    const [baseCurrency, setBaseCurrency] = useState("usd");
    const [quoteCurrency, setQuoteCurrency] = useState("usd");
    const [exchangeAmount, setExchangeAmount] = useState(0);
    const [convertedCurrency, setCovertedCurrency] = useState(0);
    let [currencyOptions, setCurrencyOptions] = useState();

    useEffect(() =>{
        getExchangeCurrencyList();
    }, []);


    async function getExchangeCurrencyList(){
        const api = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
        
        try {
            const response = await fetch(api);
        
            if (!response.ok) {
                throw new Error("Sorry, cannot find the currency resource!");
            }
            else {
                const data = await response.json();
                let currencies = []
                for (let key in data){
                    currencies.push(key);
                }

                const options = currencies.map((c, index) => <option key={index} value={c}>{c}</option>);
                
                setCurrencyOptions(
                    options
                );
                
            }
    
        }
        catch(error){
            console.error(error);
        }
    
    }

    async function getQuote(){
        const api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${quoteCurrency}.json`;

        try{
            const response = await fetch(api);
            if (!response.ok){
                throw new Error("Cannot quote today's price list!!");
            }
            else {
                const data = await response.json();
                if (!data[quoteCurrency][baseCurrency]){
                    throw new Error("Cannot find the desired exchange rate!!");
                }
                else{
                    // console.log(data[quoteCurrency][baseCurrency]);
                    const totalExChanges = Number(data[quoteCurrency][baseCurrency]) * exchangeAmount;
                    setCovertedCurrency(totalExChanges.toFixed(6));
                }
            }
        }
        catch(error){
            console.error(error);
        }
    }

    function swapCurrency() {
        const [tmpbc, tmpqc] = [quoteCurrency, baseCurrency];
        setBaseCurrency(tmpbc);
        setQuoteCurrency(tmpqc);
        setExchangeAmount(0);
        setCovertedCurrency(0);
    }


  return (
    <div className="text-center w-5/6 max-w-md backdrop-blur-xl ml-auto mr-auto p-8 rounded-lg ">
        <div className='relative mb-4'>
            <div className='bg-white rounded-lg flex flex-row justify-between p-4 mb-4'>
                <div className='text-left' >
                    <p className='text-sky-300  mb-3'>From</p>
                    <input className=' text-sm rounded-md p-0.5 w-4/6 border-2 border-slate-200' autoFocus type="number" value={exchangeAmount} onChange={(event) => setExchangeAmount(event.target.value)} />
                </div>
                <div className='text-right'>
                    <p className='text-sky-300 mb-3 whitespace-nowrap'>Currency Type</p>
                    <select className='rounded-md p-0.5 text-sm bg-slate-100 border-2 cursor-pointer' name="quoteCurrencyType" value={quoteCurrency} onChange={(event) => setQuoteCurrency(event.target.value)}>
                        {currencyOptions}
                    </select>
                </div>
            </div> 
            <div className='bg-white rounded-lg flex flex-row justify-between p-4'>
                <div className='text-left' >
                    <p className='text-sky-300 mb-3'>To</p>
                    <input className=' text-sm rounded-md p-0.5 w-4/6 border-2 border-dashed border-orange-400 text-orange-400' type="number" value={convertedCurrency} readOnly />
                </div>
                <div className='text-right'>
                    <p className='text-sky-300 mb-3 whitespace-nowrap'>Currency Type</p>
                    <select className='rounded-md p-0.5 text-sm bg-slate-100 border-2 cursor-pointer' name="QuoteCurrencyType" value={baseCurrency} onChange={(event) => {setBaseCurrency(event.target.value)}}>
                        {currencyOptions}
                    </select>
                </div>
            
            </div> 
            <button className='text-orange-500 font-bold p-2 rounded-lg absolute border-4 border-dashed bg-sky-200 hover:bg-sky-100 transition-colors swapButton' onClick={swapCurrency}>swap</button>
        </div>
        
        <button className='w-full bg-sky-200 p-3 rounded-lg font-bold text-center text-orange-500 hover:bg-sky-100 transition-colors' onClick={getQuote}>Convert {quoteCurrency} to {baseCurrency}</button>
    </div>
  )
}

export default CurrencyExchange