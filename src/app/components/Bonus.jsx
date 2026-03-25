import React from "react";
import { LuDownload } from "react-icons/lu";
const Bonus = () => {
  return (
    <div className=" w-full flex flex-col sm:flex-row  bg-[#FF6B00] p-8 items-center justify-center gap-6  ">
      <div className="p-8 w-md">
        <div className="bg-[#a24f14]/80 py-2 px-4 w-xs flex flex-row items-center justify-center gap-2 mb-10">
        < LuDownload size={20}/> 
          <h2 className="text-center"> Bonus Material 100% Gratuito</h2>
        </div>
        <div>
          <h1 className="text-4xl font-bold">BAIXE AGORA O MANUAL DO MECÂNICO INICIANTE</h1>
          <h2>
            Aprenda os 5 diagnósticos mais lucrativos e comece a faturar ainda
            hoje, mesmo sem ter uma oficina montada.
          </h2>
        </div>

      </div>

      <div className="p-4 ">
        <img src="/capaCurso.jpg" alt=""  className="w-100 h-100 border-2 border-red-600 rotate-6 hover:rotate-0 transition duration-300"/>
      </div>
    </div>
  );
};

export default Bonus;
