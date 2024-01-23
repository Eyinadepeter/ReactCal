import { useState } from 'react'
import "./app.css"


function App() {

const [Value,setValue]=useState("")

  return (
    <>
      <div className=" container w-[100%] h-[100vh] flex items-center justify-center bg-blue-200 ">
        <div className="calculator p-[20px] rounded-sm bg-red-400">
         <form action="" className='display'>
          <div className="display">
          <input type="text" value={Value} />
          </div>
          <div className="numbers">
            <div className="container">
            <input type="button" value="AC" onClick={e => setValue('')} />
            <input type="button" value="DC" onClick={e=>setValue(Value.slice(0,-1))} />
            <input type="button" value="." onClick={e =>setValue(Value + e.target.value)} />
            <input type="button" value="+" onClick={e =>setValue(Value + e.target.value)} />
            </div>
            <div className="container">
            <input type="button" value="9" onClick ={e=>setValue(Value + e.target.value)} />
            <input type="button" value="8" onClick={e=>setValue(Value + e.target.value)}/>
            <input type="button" value="7" onClick={e=>setValue(Value + e.target.value)}/>
            <input type="button" value="-" onClick={e=>setValue(Value + e.target.value)}/>
            </div>
            <div className="container">
            <input type="button" value="6" onClick={e=>setValue(Value + e.target.value)}/>
            <input type="button" value="5"onClick={e=>setValue(Value + e.target.value)} />
            <input type="button" value="4"onClick={e=>setValue(Value + e.target.value)} />
            <input type="button" value="/" onClick={e=>setValue(Value + e.target.value)}/>
            </div>
            <div className="container">
            <input type="button" value="3"onClick={e=>setValue(Value + e.target.value)} />
            <input type="button" value="2" onClick={e=>setValue(Value + e.target.value)}/>
            <input type="button" value="1"onClick={e=>setValue(Value + e.target.value)} />
            <input type="button" value="*"onClick={e=>setValue(Value + e.target.value)} />
            </div>
            <div className="container">
            <input type="button" value="00"onClick={e=>setValue(Value + e.target.value)} />
            <input type="button" value="0" onClick={e=>setValue(Value + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={e=>setValue(eval(Value))}/>
            </div>
            
          </div>
         </form>
          <div className="numbers">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
