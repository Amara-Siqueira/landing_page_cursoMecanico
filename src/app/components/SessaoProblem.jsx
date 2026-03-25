import React from 'react'
import { GrConfigure } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { TbAlertTriangle } from "react-icons/tb";
const SessaoProblem = () => {
  return (
    <div className='container mx-auto px-4 py-8 flex flex-col bg-[#111111] 
    max-w-full
    '>
      <div>
        <h1 className='text-5xl font-bold text-center mt-20'>VOCÊ ESTÁ <span className=' relative inline-block'>PASSANDO  <span className="absolute left-5 -bottom-1 w-1/2   bg-red-600"></span>    </span> POR ISSO?</h1>
      </div>
{/* cards */}
      <div className='flex flex-col sm:flex-row gap-4 mt-15  '>

        <div className=' group  hover:border hover:border-red-600 p-6 bg-[#1A1A1A] ' >
          
          <div className='group-hover:bg-red-600/10 flex  w-15 h-15 items-center justify-center bg-black'>
          <GrConfigure size={30} className='text-red-600' />
          </div>

          <h1 className='text-2xl mb-5 text-center mt-5 font-bold '>CARRO QUEBRADO</h1>
          <p className='text-justify'>Seu carro vive dando problema e o mecânico sempre cobra uma fortuna por serviços simples.</p>
        </div>
        <div className="group text-center  hover:border hover:border-red-600 p-4 bg-[#1A1A1A]">
          
          <div className='group-hover:bg-red-600/10  flex  w-15 h-15 items-center justify-center bg-black'>
                    <LuWallet size={30} className=' text-red-600' />         
                     </div>


          <h1 className='mb-5 text-2xl mt-5 font-bold  '>FALTA DE DINHEIRO</h1>
          <p className='text-justify'>O mês acaba e o dinheiro não dá. Você precisa de uma renda extra urgente para sair do sufoco.</p>
        </div>
        <div className=" group  text-center hover:border hover:border-red-600 p-4 bg-[#1A1A1A] ">
        <div className='group-hover:bg-red-600/10 w-15 h-15 flex items-center justify-center bg-black'>
          <TbAlertTriangle  size={30} className=' text-red-600'  />
        </div>
          <h1 className='mb-5 text-2xl  mt-5 font-bold  '>SEM CONHECIMENTO</h1>
          <p className='text-justify'>Tem vontade de trabalhar por conta própria e ser seu próprio chefe, mas não sabe por onde começar.</p>
        </div>
      </div>
    </div>
  )
}

export default SessaoProblem