import './App.css'

export default function App ()
{

  const matriz=new Array(1,2,3,4,5,6,7,8,9)

    return (
      <>
        <h1>TA TE TI</h1>
        {
            matriz.map((...) => {
            return (<div>{index}</div>)
            
          })
        }
      </>
      
  )
}


