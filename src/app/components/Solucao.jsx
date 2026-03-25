import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
const Solucao = () => {
  return (
    <div className='flex flex-col sm:flex-row  mt-10 w-full gap-50  p-4'>
      <div className='max-w-md'> 
        <h1 className='text-3xl font-bold mb-4'>
          AGORA IMAGINE ISSO...
        </h1>
        <p
        className=' text-lg'
        >Imagine ganhar <span className=' text-[#E26001] '>R$ 300, R$ 500 ou mais </span> em poucas horas, resolvendo problemas simples que ninguém mais sabe como consertar.</p>
        <div className='mt-10 flex flex-col gap-4  '>
          <h1 className='text-2xl font-bold'>O QUE VOCÊ VAI APRENDER NA PRÁTICA:</h1>
          <div className='mt-5 bg-[#121212] w-sm text-center p-4 flex items-center gap-2 '><CiCircleCheck className='text-[]'  />Troca de óleo e filtros com segurança </div>
          <div className='mt-5 bg-[#121212] w-sm text-center p-4 flex items-center gap-2'><CiCircleCheck className='text-[]' /> Manutenção de freios e suspensão</div>   
          <div className='mt-5 bg-[#121212] w-sm text-center p-4 flex items-center gap-2'><CiCircleCheck className='text-[]' />Diagnóstico preciso com scanner automotivo </div>   
          <div className='mt-5 bg-[#121212] w-sm text-center p-4 flex items-center gap-2'><CiCircleCheck className='text-[]' />  Fundamentos de injeção eletrônica</div>            
        </div>
      </div>
      <div  className='max-w-md relative flex flex-col justify-center' > 
        <div className=''>
          <img src={'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop'} alt="" className='w-155 ' />
        </div>
        <div className='bg-red-600 w-45 h-15 absolute top-55 left-20  transform -translate-x-1/2 -translate-y-1/2  text-center  sm:left-5'>
          <h1 className='font-bold'>100%</h1>
          <h2>PRÁTICO & DIRETO</h2>
        </div>
      </div>
    </div>
  )
}

export default Solucao