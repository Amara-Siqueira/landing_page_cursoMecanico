import React from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="p-4  bg-[#111111] text-white  ">
      <div className="flex  justify-between">
        <div className="mb-5">
          <h1 className="text-2xl font-bold ">
            MECÂNICA<span className="text-amber-600">PRO</span>
          </h1>
          <p>
            Transformando curiosos em profissionais qualificados e donos do
            próprio negócio.
          </p>
        </div>

        <div className="flex flex-col bg-[#1A1A1A] p-4">
         
          <div className="flex flex-row items-center gap-4  ">
          <IoShieldCheckmarkOutline  size={40} className="text-amber-500"/>
          <h1>Garantia Incondicional</h1>
          </div>
          <p>7 dias de satisfação ou seu dinheiro de volta.</p>
        </div>
      </div>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Mecânica Pro. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
