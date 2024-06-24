import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalhesFilmes() {
    console.log(useParams)
    const {id} = useParams()
    const [filmes, setFilmes] = useState({})

    useEffect(() =>{

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response))
        .catch(error => console.log(error))
    },[id])

    return (
        <>
    <div className="flex flex-row">
        <img className="w-[750px] rounded-2xl" src={`https://image.tmdb.org/t/p/w1280${filmes.backdrop_path}`} />
    <div className="font-jost flex flex-col justify-center p-5">
        <h1 className="text-4xl mb-10"> Detalhes do Filme</h1>
        <p className="font-semibold">{filmes.title}</p>
        <p>Votos: {filmes.vote_average}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur dolorem excepturi facere eveniet officiis praesentium soluta dicta, ex perferendis eius neque natus nobis harum obcaecati debitis. Officiis sunt ratione corrupti.</p>
    </div>
    </div>
        </> 
     );
}

export default DetalhesFilmes;