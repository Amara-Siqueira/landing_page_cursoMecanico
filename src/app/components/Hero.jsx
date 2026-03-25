import React from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const Hero = () => {
  return (
<div
className=' relative  w-full  h-screen flex flex-col items-center font-bold 'id='heroImg'
>
    <div className='bg-black/60 w-full z-10 h-screen  absolute inset-0'/>
        <div  className='w-full  h-screen flex flex-col items-center overflow-auto z-20 '  >
    <div className='flex flex-col  w-full  items-center  '  >
            <div className='mx-auto mt-5 mb-10 bg-[#3D1E09]/60 p-2'>   
            <h1 className='text-lg text-[#E26001] font-bold text-center'>MÉTODO COMPROVADO</h1>
        </div>
        <div className='p-4 flex flex-col gap-6 text-center max-w-4xl font-bold'>
            <h1 className='text-6xl '>
                DE <span className='text-[#E26001]'>R$ 0 A R$ 5.000</span> POR MÊS: DESCUBRA O SEGREDO PARA SAIR DO APERTO E SE TORNAR UM MECÂNICO PROCURADO NA SUA CIDADE.
            </h1>
            <h2>Chega de depender de chefe ou gastar dinheiro com conserto caro. Aprenda mecânica na prática e comece a faturar já nos finais de semana.</h2>
        </div>
        <button className='bg-[#FF6B00] hover:bg-[#DC2626] max-w-md mx-auto font-bold  p-4 hover:cursor-pointer'>QUERO ACESSAR O MANUAL AGORA {/* ICON */} </button>
        <p className='mx-auto flex items-center gap-2'>  <IoShieldCheckmarkOutline className='text-green-500' /> Garantia de 7 dias. Sem risco.</p>
    </div>
    </div>
</div>
  )
}

export default Hero