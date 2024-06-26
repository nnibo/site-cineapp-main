import data from '../../artigos.json'

function Home() {
    console.log(data)
    return ( 
        <>
        <div className='font-jost'>
             <h1 className='flex justify-center mt-5 mb-5 font-bold text-3xl'>NOTICIA PRINCIPAL DO DIA</h1>

                    <div className="flex flex-row mt-4  ">

                        <div className='flex flex-col w-3/4 p-5 '>
                            <img src='divertidamente2_1.jpeg'/>                      
                        </div>

                        <div className="flex flex-col w-2/4 items-center p-5 justify-center">
                        <h2 className='mb-5 font-bold text-2xl flex justify-center'>DIVERTIDAMENTE 2</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis omnis unde voluptatibus dicta, assumenda quo et minus, autem illum consequatur nihil reprehenderit at similique voluptates earum non? Neque, praesentium quia.</p>
                        </div>

                    </div>


                    <h2 className='my-12 font-bold text-3xl flex justify-center'>MAIS NOTICIAS SOBRE FILMES...</h2>
                    <div className='flex flex-wrap justify-center'>
                        {
                            (data.map)(
                                (filme) => (
                                    <>
                                    
                                    <div className=" flex flex-row p-5 ml-5 ">
                                        <div>
                                            <img className="w-80 h-56" src={filme.image} alt="" />
                                            <div className='flex justify-center mt-5'>
                                             <p>NOTICIA SOBRE O FILME</p>
                                             </div>
                                        </div>                            
                                    </div>
                                    
                                    </>
                                )
                            )
                        }
                        
                
                    </div>

                    <h2 className='mb-12 mt-12 font-bold text-3xl flex justify-center text-center'>LANCAMENTOS - TRAILER</h2>
                   
                        <div className="flex flex-row w-full justify-center">
                            <div className='flex flex-col'>
                            <img className=' h-80 mr-16' src="deadpoolTrailer.webp" alt="" />
                            <p className='flex justify-center mr-24 mt-4'>DEADPOOL TRAILER</p>
                            </div>

                            <div className='flex flex-col'>
                            <img className=' h-80' src="sonicTrailer.jpg" alt="" />
                            <p className='flex justify-center mt-4'>SONIC TRAILER</p>
                            </div>
                        </div>

                    

</div>
        </>
    );
}

export default Home;