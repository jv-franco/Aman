import Image from "next/image";
import joinha from "../images/joinha.svg";
import support from "../images/support.svg";
import dinheiro from "../images/dinheiro.svg";
import gato from "../images/gato.png";
import { Button } from "@/components/Button";
export default function Beneficio() {
  return (
    <div>
      <div className="Beneficio flex flex-col items-center relative ">
        <h1 className="sm:text-4xl text-2xl font-bold">Beneficios</h1>
        <div className="container flex lg:flex-row flex-col mt-14 mb-28 justify-around gap-12 ">
          <div className="beneficio-container">
            <Image alt="joinha" src={joinha} width={70} height={70} />
            <div className="max-w-md mt-4">
              <p className=" text-center break-words sm:h-36">
                O sistema de cadastro e entrada no plano de saúde é fácil e
                rápido. Com dados básicos é possível cadastrar o seu pet na
                Plamev e no mesmo dia o plano dele já estará ativo.
              </p>
            </div>
          </div>
          <div className="beneficio-container">
            <Image alt="suporte" src={support} width={70} height={70} />
            <div className="max-w-md mt-4">
              <p className=" text-center break-words sm:h-36">
                A Plamev visa dar total suporte aos seus clientes e por isso
                disponibiliza um canal de telefonia para que o tutor possa tirar
                qualquer dúvida o SOSpet. Além disso, no aplicativo da Plamev
                você pode acompanhar todas as consultas e dados do seu
                animalzinho, com diversas outras funções que podem ser
                aproveitadas.
              </p>
            </div>
          </div>
          <div className="beneficio-container">
            <Image alt="suporte" src={dinheiro} width={70} height={70} />
            <div className="max-w-md mt-4">
              <p className=" text-center break-words sm:h-36">
                Sabendo que em média as pessoas gastam na área de saúde 1800
                reais ou mais por ano com seus pets, a Plamev possui planos a
                partir de 29,99 reais (mensal) para que todas as pessoas tenham
                direito de cuidar e dar atenção aos seus pets da forma que eles
                merecem.
              </p>
            </div>
          </div>
        </div>
        <Button props={"Tenho Interesse"} />
        <div className="gato ">
          <Image
            alt="gato"
            className="sombra"
            src={gato}
            width={500}
            height={500}
          />
        </div>
      </div>
      <svg
        className="-mb-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0e335e"
          fillOpacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,133.3C384,160,480,224,576,240C672,256,768,224,864,186.7C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
