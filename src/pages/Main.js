import cao from "../images/cao.png";
import { Button } from "@/components/Button";
import Image from "next/image";

export default function Main() {
  return (
    <div>
      <div className="main">
        <div className="cao ">
          <Image
            alt="cachorro"
            className="sombra"
            src={cao}
            width={500}
            height={500}
          />
        </div>

        <h1 className="text-white md:text-4xl text-2xl font-bold mb-4">
          Descubra como ECONOMIZAR muito dinheiro com o seu pet
        </h1>
        <h2 className="text-gray-200 md:text-xl text-lg mb-4">
          A forma mais prática e rápida do mercado!
        </h2>
        <div className="div_video ">
          <div class="container_video">
            <iframe
              class="responsive-iframe"
              frameborder="0"
              allowfullscreen="1"
              title="CUIDE DO SEU PET E TRANSFORME A VIDA DELE"
              src="https://www.youtube.com/embed/QQlWTSrP1Y8?controls=1&loop=1"
            ></iframe>
          </div>
        </div>
        <Button props={"Quero adquirir um plano"} />

        <div className="flex flex-col  items-center justify-center">
          <div className=" px-3  pr-3  text-center font-bold  w-full  text-blue-100 text-xl md:text-3xl">
            <h1 className="">Transforme agora a vida do seu peludinho!</h1>
          </div>
          <div className=" px-3  text-center font-bold  w-full text-white md:text-lg">
            <span className="font-normal   text-blue-100">
              Planos à partir de
            </span>
            <h1 className="text-4xl ">R$ 29,99</h1>
          </div>
        </div>
      </div>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0e335e"
          fill-opacity="1"
          d="M0,224L40,208C80,192,160,160,240,149.3C320,139,400,149,480,170.7C560,192,640,224,720,213.3C800,203,880,149,960,117.3C1040,85,1120,75,1200,85.3C1280,96,1360,128,1400,144L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
