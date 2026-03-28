import React from "react";
import { CiMoneyBill } from "react-icons/ci";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { IoHammerOutline } from "react-icons/io5";
const PorqueEntrar = () => {
  return (
    <div className="flex flex-col  mt-10 w-full p-8  bg-[#111111]">
      <div className="mb-10 mt-10 text-center">
        <h1 className="text-3xl font-bold text-white">POR QUE ENTRAR PARA O MERCADO AUTOMOTIVO?</h1>
      </div>
  
      <div className="flex flex-col sm:flex-row gap-6 max-w-5xl mx-auto ">

        <div className="ganharDinheiro bg-[#0a0a0a] hover:bg-[#1a1919] p-4  border-l-4 border-orange-500">
          <div className="text-orange-500 mb-5 ">
            <CiMoneyBill size={60} />
          </div>
          <div>
            <h1 className="text-center mb-5 text-2xl font-bold  ">GANHAR DINHEIRO RÁPIDO</h1>
            <p>
              Serviços rápidos que colocam dinheiro no seu bolso no mesmo dia.
            </p>
          </div>
        </div>

        <div className="TrabalharPorConta  bg-[#0a0a0a] hover:bg-[#1a1919]  p-4 border-l-4 border-orange-500">
          <div className="text-orange-500 mb-5">
            <BsFillPersonCheckFill size={40}  />
          </div>
          <div>
            <h1 className="text-center mb-5 text-2xl  font-bold ">TRABALHAR POR CONTA</h1>
            <p>
              Faça seus próprios horários. Atenda clientes na garagem de casa.
            </p>
          </div>
        </div>

        <div className="naoDependerPatrao bg-[#0a0a0a] hover:bg-[#1a1919] p-4 border-l-4 border-orange-500">
          <div className="text-orange-500 mb-5 ">
            <FaRegClock  size={40} />
          </div>
          <div>
            <h1 className="text-center mb-5 text-2xl font-bold">NÃO DEPENDER DE PATRÃO</h1>

            <p>Seja o dono do seu negócio e construa sua própria clientela.</p>
          </div>
        </div>

        <div className="aprenderNaPratica bg-[#0a0a0a] hover:bg-[#1a1919]  p-4 border-l-4 border-orange-500">
          <div className="text-orange-500 mb-5 ">
            <IoHammerOutline  size={40} />
          </div>
          <div>
            <h1 className="text-center mb-5 text-2xl font-bold">APRENDER NA PRÁTICA</h1>
            <p>
              Sem enrolação teórica. Direto ao ponto, sujando as mãos de graxa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorqueEntrar;
