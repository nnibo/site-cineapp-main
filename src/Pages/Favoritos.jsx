import favoritos from '../../favoritos.json'

function Favoritos() {
    return(
        <>
        
        <h1 className="font-jost text-4xl flex justify-center mt-10">MEUS FILMES FAVORITOS</h1>
       <div className='flex flex-row flex-wrap w-full justify-center ml-5 mt-10'>
        {favoritos.map((fav)=>(
            <>        
            <div className='flex flex-col w-[300px] mt-3'>
            <img src={fav.image} alt='' className="w-[240px] h-[374.41px]"/>
               

            <div className='flex flex-row'>
                <p className="font-jost" >{fav.title}</p>
                <img className="w-6 p-1" src="coracaoVermelho.webp" alt="" />
            </div>
            </div>
            
         </>
        ))}
        </div>

        <div className='mb-[-30px] flex justify-end'>
            <img src="adicionarSimbolo.png" alt="" className='w-12' />
        </div>
        </>
    )
}

export default Favoritos;