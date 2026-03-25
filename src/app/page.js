import Image from "next/image";
import Hero from "./components/Hero";
import SessaoProblem from "./components/SessaoProblem";
import Solucao from "./components/Solucao";
import PorqueEntrar from "./components/PorqueEntrar";
import ProvaSocial from "./components/ProvaSocial";
import Bonus from "./components/Bonus";
import CadsLead from "./components/CadsLead";
import AvisoDemo from "./components/Aviso";
export default function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#111111] dark:bg-black">
      <main className="flex flex-1 w-full  flex-col items-center justify-between  bg-[#111111] text-white dark:bg-black sm:items-start">
        <AvisoDemo/>
       <Hero />
       <SessaoProblem />
       <Solucao />
       <PorqueEntrar /> 
       <ProvaSocial />
       <Bonus />
       <CadsLead/>
      </main>
    </div>
  );
}
