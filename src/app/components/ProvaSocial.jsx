import React from "react";

const ProvaSocial = () => {
  const testimonials = [
    {
      name: "Carlos Souza",
      city: "São Paulo, SP",
      text: "Fiz o curso em 1 mês e já fiz R$ 1.200 em um fim de semana só trocando óleo e pastilha de freio dos vizinhos. O método é direto ao ponto.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Rafael Lima",
      city: "Rio de Janeiro, RJ",
      text: "Nunca tinha mexido com mecânica na vida. Hoje tenho minha renda própria e já estou montando minha pequena oficina na garagem de casa.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  ];
  return (
    <div className="flex flex-col  w-full items-center gap-4 py-12 ">
      <h1 className="mx-auto text-5xl  text-center font-bold  ">
        QUEM APLICOU, <span className="text-[#FF6B00]">APROVA</span>.
      </h1>
      <p>Resultados reais de homens que decidiram mudar de vida.</p>

      <div className="flex flex-col sm:flex-row gap-4 max-w-5xl justify-center items-center">
        
    
   
          <div className="bg-[#1A1A1A] p-4 flex flex-col sm:flex-row gap-4">
            <div>{/* icon  */}</div>
            {
              testimonials.map((testimonial, index) => (
                <div key={index} className="flex items-start gap-4 mt-4 flex-col">
                  <p className="mt-2 italic mb-5 ">&quot; {testimonial.text}&quot; </p>
                  <div className="flex flex-row  gap-4 items-center  ">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-15 h-15 rounded-full object-cover grayscale border-2 border-gray-500"
                  />
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.city}</p>
                  </div>
                </div>
              ))
            }
          </div>
        
      </div>
    </div>
  );
};

export default ProvaSocial;
