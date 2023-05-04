import Image from "next/image";
import caoIcon from "../images/caoIcon.svg";
import gatoIcon from "../images/gatoIcon.svg";
import { Button } from "@/components/Button";

export default function Tabela() {
  return (
    <>
      <div className="tabela_all ">
        <div className="tabela_container  ">
          <div className="sm:container  mx-auto">
            <div className="tabela py-2 flex flex-col items-center md:items-end mx-auto w-full">
              <div className="flex sm:flex-row flex-col items-center w-full">
                <div className="flex items-center">
                  <Image
                    alt="icone de cachorro"
                    className="Icon"
                    src={caoIcon}
                    width={60}
                    height={60}
                  />
                  <div className="mr-0 md:mr-4 md:w-56 sm:w-full sm:text-2xl text-xl text-white">
                    <h1 className="font-semibold w-full">
                      Tabela de valores aproximados
                    </h1>
                    <h2 className="text-base text-slate-200">
                      Fatores de risco
                    </h2>
                  </div>
                </div>
                <div className="Idades">
                  <h1>TODAS AS IDADES</h1>
                </div>
              </div>
              <div className="tabela_div1 ">
                <div className="w-full">
                  <table className="mx-auto w-full max-w-2xl">
                    <thead>
                      <tr>
                        <th>Ingestão de Corpos Estranhos</th>
                        <th>Valores</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Consulta Emergencial</td>
                        <td>
                          <span className="font-semibold">R$ </span> 200
                        </td>
                      </tr>
                      <tr>
                        <td>Ultrassom</td>
                        <td>
                          <span className="font-semibold">R$ </span>160
                        </td>
                      </tr>
                      <tr>
                        <td>Internação x 5 dias (R$ 220 diária)</td>
                        <td>
                          <span className="font-semibold">R$ </span>1.100
                        </td>
                      </tr>
                      <tr>
                        <td>Possibilidade Cirurgia + Anestesia</td>
                        <td>
                          <span className="font-semibold">R$ </span>3.500
                        </td>
                      </tr>
                      <tr>
                        <td>Raio - X</td>
                        <td>
                          <span className="font-semibold">R$ </span>160
                        </td>
                      </tr>
                      <tr>
                        <td>Exames de Sangue</td>
                        <td>
                          <span className="font-semibold">R$ </span>450
                        </td>
                      </tr>
                      <tr className="total">
                        <td> Total</td>
                        <td>
                          <span className="font-semibold">R$ </span>5.570
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-full">
                  <table className="mx-auto w-full max-w-2xl">
                    <thead>
                      <tr>
                        <th>Virose (FIV, Feiv, PIF)</th>
                        <th>Valores</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Consulta Clínico geral</td>
                        <td>
                          <span className="font-semibold">R$ </span>160
                        </td>
                      </tr>
                      <tr>
                        <td>Internação x 7 dias (R$ 220 diária)</td>
                        <td>
                          <span className="font-semibold">R$ </span>1.100
                        </td>
                      </tr>
                      <tr>
                        <td>Exames de Sangue</td>
                        <td>
                          <span className="font-semibold">R$ </span>450
                        </td>
                      </tr>
                      <tr className="total">
                        <td>Total</td>
                        <td>
                          <span className="font-semibold">R$ </span>1.710
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:container sm:mx-auto w-full  mx-auto">
            <div className="tabela py-2 flex flex-col items-center md:items-start mx-auto w-full">
              <div className="flex sm:flex-row flex-col-reverse items-center w-full">
                <div className="Idades">
                  <h1>TODAS AS IDADES</h1>
                </div>
                <div className="flex items-center  ">
                  <div className="ml-0 md:ml-4 md:w-56 sm:w-full text-right sm:text-2xl text-xl text-white">
                    <h1 className="font-semibold w-full">
                      Tabela de valores aproximados
                    </h1>
                    <h2 className="text-base text-slate-200">
                      Fatores de risco
                    </h2>
                  </div>
                  <Image
                    alt="icone de gato"
                    src={gatoIcon}
                    className="Icon -scale-x-100"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <div className="tabela_div2 ">
                <div className="w-full">
                  <table className="mx-auto w-full max-w-2xl">
                    <thead>
                      <tr>
                        <th>Ingestão de Corpos Estranhos</th>
                        <th>Valores</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Consulta Emergencial</td>
                        <td>
                          <span className="font-semibold">R$ </span> 200
                        </td>
                      </tr>
                      <tr>
                        <td>Ultrassom</td>
                        <td>
                          <span className="font-semibold">R$ </span>160
                        </td>
                      </tr>
                      <tr>
                        <td>Internação x 5 dias (R$ 220 diária)</td>
                        <td>
                          <span className="font-semibold">R$ </span>1.100
                        </td>
                      </tr>
                      <tr>
                        <td>Possibilidade Cirurgia + Anestesia</td>
                        <td>
                          <span className="font-semibold">R$ </span>3.500
                        </td>
                      </tr>
                      <tr>
                        <td>Raio - X</td>
                        <td>
                          <span className="font-semibold">R$ </span>160
                        </td>
                      </tr>
                      <tr>
                        <td>Exames de Sangue</td>
                        <td>
                          <span className="font-semibold">R$ </span>450
                        </td>
                      </tr>
                      <tr className="total">
                        <td> Total</td>
                        <td>
                          <span className="font-semibold">R$ </span>5.570
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-full">
                  <table className="mx-auto w-full max-w-2xl">
                    <thead>
                      <tr>
                        <th>Virose (FIV, Feiv, PIF)</th>
                        <th>Valores</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Consulta Clínico geral</td>
                        <td>
                          <span className="font-semibold">R$ </span>160
                        </td>
                      </tr>
                      <tr>
                        <td>Internação x 7 dias (R$ 220 diária)</td>
                        <td>
                          <span className="font-semibold">R$ </span>1.100
                        </td>
                      </tr>
                      <tr>
                        <td>Exames de Sangue</td>
                        <td>
                          <span className="font-semibold">R$ </span>350
                        </td>
                      </tr>
                      <tr className="total">
                        <td>Total</td>
                        <td>
                          <span className="font-semibold">R$ </span>1.610
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button props={"QUERO ECONOMIZAR"} />
      </div>
      <div>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#023373"
            fillOpacity="1"
            d="M0,224L40,208C80,192,160,160,240,149.3C320,139,400,149,480,170.7C560,192,640,224,720,213.3C800,203,880,149,960,117.3C1040,85,1120,75,1200,85.3C1280,96,1360,128,1400,144L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
