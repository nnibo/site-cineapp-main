
import filmesComedia from '../../filmesComedia.json'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Filmes() {
    const [filmes, setFilmes] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
   
      };

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    console.log(filmes)
    return(
        <>
        <img className=' w-full h-[600px] mt-[-17px]' src="jokerImg.jpg" alt="" />

        <h2 className="flex justify-center mt-9 mb-9 font-jost text-3xl font-bold">MAIS ASSISTIDOS</h2>

        <div className="w-3/4 m-auto">
            <div className="mt-20">
            <Slider {...settings}>
                {filmes.map((f) => (
                    <>
                    <div>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w342${f.poster_path}`} alt='' className="w-[240px] h-[374.41px]"/>
                        </div>

                    <div className='flex flex-col'>
                        <div className="flex flex-row mb-8">
                            <p className="font-jost" >{f.title}</p>
                            <img className="w-6 p-1" src="coracaoFavoritos.png" alt="" />
                        </div>
                        <Link to={`${f.id}`} className="hover:bg-gray-400 hover:duration-200">                        Detalhes do Filme
                        </Link>
                        </div>
                    </div>
                    
                    </>
                ))}
                </Slider>
            </div>
        </div>

        <div className="w-10/12 h-[1px] bg-zinc-800 mt-16 mb-12 ml-36"></div>

        <h2 className="flex justify-center font-jost text-3xl font-bold">POR CATEGORIA</h2>   

        <div className="w-3/4 m-auto">  
            <div className="mt-10">
                <p className="font-jost text-xl mb-4">COMEDIA</p>

                <Slider {...settings}>
                {filmesComedia.map((fc) => (
                    <>
                    <div>
                        <div>
                            <img src={fc.image} alt='' className="w-[240px] h-[374.41px]"/>
                        </div>

                        <div className="flex mb-8">
                            <p className="font-jost" >{fc.title}</p>
                            <img className="w-6 p-1" src="coracaoFavoritos.png" alt="" />
                        </div>
                    </div>
                    </>
                ))}
                </Slider>
            
            </div>
        </div>
        </>
    )
                }
export default Filmes;