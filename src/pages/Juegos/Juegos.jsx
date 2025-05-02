import { useEffect } from "react"

const Juegos = () => {

    const getJuegos = async () =>{
        const juegosResultado = await fetch('https://68140b69225ff1af1627c46b.mockapi.io/api/v1/items')

    const juegosParsed = await juegosResultado.json()

    console.log(juegosParsed)
    }

    useEffect(() => {
        getJuegos();
    }, [])


    return <h1>Juegos</h1>
}


export default Juegos;

//          <Route path="/juegos" element={<Juegos />} />
