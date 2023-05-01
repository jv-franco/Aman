import Image from "next/image";
import sobreimg from "../images/sobre.jpg";
export default function Sobre() {
  return (
    <div className="lg:flex-row  flex flex-col  -mt-0 sm:-mt-7 lg:items-start lg:justify-evenly justify-center  items-center ">
      <div className="mx-auto">
        <Image
          className="sobre_img"
          src={sobreimg}
          width={500}
          height={500}
          alt="Cachorro"
        />
      </div>
      <div className="lg:w-1/2 w-full mt-6 px-5 md:px-10 lg:px-0">
        <h1 className="text-4xl font-bold mb-6">QUEM SOMOS NÓS ?</h1>
        <p className="text-lg text-justify pr-0  lg:pr-10  ">
          Somos da Aman Seguros (
          <span className="text-slate-500 font-medium">
            CNPJ: 49045220000120
          </span>
          ) uma empresa de corretagem localizada em Salvador na Bahia.
          Trabalhamos com diversas seguradoras e operadoras de saúde sendo uma
          delas a plamev. Com o crescimento do mercado de planos de saúde para
          pet nos visando trazer uma experiência rápida e prática facilitando
          sua vida estamos dispostos a auxilia-lo a conseguir o melhor plano de
          saúde para seu bichinho além de sanar todas e qualquer dúvida com
          referência à entrada do seu gato ou cachorro na plamev.
        </p>
      </div>
    </div>
  );
}
