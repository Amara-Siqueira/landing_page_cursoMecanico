"use client";
import React from "react";
import { useRouter } from "next/navigation";
const CadsLead = () => {
  const router = useRouter();
  const handlerSubmit = async (e) => {
  e.preventDefault();
    const formData = new FormData(e.target);
    const dados = {
      nome: formData.get("nome"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      status:'Pendente',
      data: formData.get('data'),
      horario: formData.get('horario'),
      origem:formData.get('origem')
    };
console.log(dados)
try {
    const enviando=   await fetch("/api/enviar", {
      method: "POST",
      body: JSON.stringify(dados),
    });
    console.log("Enviado para o Google Sheets");
    router.push("/");
} catch (error) {
    console.error("Erro ao enviar para o Google Sheets:", error);
}
  };

  return (
    <div
      className="flex
     flex-col  w-full p-8 
     mt-10 bg-[#111111] text-white "
    >
      <div className=" mx-auto bg-[#1A1A1A] p-8 mt-10 sm:w-3xl border-t-5 border-amber-600  ">
        <h1 className="  text-3xl text-center mb-5  ">
          DÊ O PRIMEIRO PASSO AGORA
        </h1>
        <h2 className=" sm:max-w-2xl mx-auto text-justify">
          Preencha os dados abaixo para receber o manual gratuito no seu
          WhatsApp e garantir sua vaga com desconto especial.
        </h2>

        <div>
          <form
            onSubmit={handlerSubmit}
            className="max-w-xs sm:max-w-5xl flex flex-col gap-4   mt-10"
          >
            <label htmlFor="nome" className="flex flex-col text-lg ">
              Digite seu nome
              <input
                name="nome"
                type="text"
                placeholder="Seu nome"
                className="sm:max-w-lg p-2 bg-black focus:border-2 focus:border-amber-600 focuus focus:outline-none"
              />
            </label>

            <label htmlFor="email" className="flex flex-col text-lg ">
              Digite seu email
              <input
                name="email"
                type="email"
                placeholder="Seu email"
                className="sm:max-w-lg p-2 bg-black focus:border-2 focus:border-amber-600 focuus focus:outline-none"
              />
            </label>

            <label htmlFor="whatsapp" className="flex flex-col text-lg ">
              Whatsapp
              <input
                type="tel"
                placeholder="(00)00000-0000"
                className="max-w-lg p-2 bg-black  focus:border-2 focus:border-amber-600 focuus focus:outline-none"
                name="whatsapp"
              />
            </label>
            <input
              type="submit"
              className="  sm:w-full bg-red-600 py-4 px-4 mt-5  "
              value={"QUERO SER UM MÊCANICO VALORIZADO"}
            />
            <input type="hidden"  value={new Date().toLocaleDateString('PT-BR')} name="data" />
            <input type="hidden"  value={new Date().toLocaleTimeString('PT-BR')} name="horario" />
            <input type="hidden"  value={'Landing Page'} name="origem" />
          </form>
          <p className="text-center text-xs text-gray-500 mt-2">
            Suas informações estão 100% seguras. Não enviamos spam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CadsLead;
