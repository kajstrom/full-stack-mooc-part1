import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (<h1>{props.kurssi}</h1>)
}

const Osa = (props) => {
    return (<p>{props.osa} {props.tehtavia}</p>)
}

const Sisalto = (props) => {
    return(
        <div>
            {props.osat.map(osa => (<Osa osa={osa.nimi} tehtavia={osa.tehtavia} />))}
        </div>    
    )
}

const Yhteensa = (props) => {
    return (<p>yhteensä {props.osat.reduce((acc, osa) => {return acc + osa.tehtavia}, 0)} tehtävää</p>)
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }

  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat}/>
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)