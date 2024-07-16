import { inicial, avanzado, desarrollado, primera } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle
        title="Proyecto Deportivo"
        titleNo="02"
        subtitle="Desarrollo de jugadores nuestro diferencial."
      />

      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <p>
          Hemos recorrido un largo camino y m&#225;s all&#225; de los resultados
          deportivos, los niveles de desarrollo que han alcanzado nuestros
          jugadores han sido fant&#225;sticos. Jugadores que iniciaron en
          equipos provinciales y llegaron a la &#233;lite del f&#250;tbol
          italiano, jugadoras que iniciaron en un equipo profesional y llegaron
          a clubes de primera, y por &#250;ltimo, jugadores de un equipo de
          primera divisi&#243;n que llegaron a jugar en la selecci&#243;n de su
          pa&#237;s. Independientemente del nivel de los jugadores con los que
          hemos trabajado, hemos conseguido que quienes ten&#237;an el talento y
          la determinaci&#243;n para crecer, dieran un paso gigante en sus
          carreras.
          <br />
          La clave de nuestro &#233;xito es la metodolog&#237;a. Mezclamos el
          m&#233;todo global con el m&#233;todo anal&#237;tico y agregamos a
          cualquier elemento un componente objetivo de decisi&#243;n consciente
          que aumenta tanto el poder de toma de decisiones como el foco y la
          concentraci&#243;n.
        </p>
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain opacity-70"
                src={inicial}
                alt="inicial"
              />
              <div className="absolute w-full h-full bg-textGreen/5 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Desde los 6 hasta los 11 a&#241;os
              </p>
              <h3 className="text-2xl font-bold">La etapa Inicial</h3>
            </div>
            <p className="bg-darkGreenColor text-sm md:text-base p-2 md:p-6 rounded-md bg-opacity-50 ">
              En la etapa inicial se dar&aacute; mayor importancia a los
              componentes t&eacute;cnico, t&aacute;ctico individual y mental,
              pero queremos que adem&aacute;s se promueva la alta intensidad.
              Seg&uacute;n las caracter&iacute;sticas f&iacute;sicas y
              coordinativas de los deportistas, se incentivar&aacute; la
              polifuncionalidad y la multi-competici&oacute;n. Los grupos
              tendr&aacute;n n&uacute;meros relativos a las posibilidades reales
              de competici&oacute;n de los atletas. Los atletas de desarrollo
              m&aacute;s r&aacute;pido tendr&aacute;n la posibilidad de competir
              en grupos de edades superiores, aumentando as&iacute; el nivel de
              dificultad y de posibilidades de aprendizaje.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>T&eacute;cnica</li>
              <li>Intensidad</li>
              <li>Polifuncionalidad</li>
              <li>Multi-competici&oacute;n</li>
              <li>Posibilidades</li>
            </ul>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain opacity-70"
                src={avanzado}
                alt="avanzado"
              />
              <div className="absolute w-full h-full bg-textGreen/5 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Desde los 12 hasta los 14 a&#241;os
              </p>
              <h3 className="text-2xl font-bold">
                La etapa de Desarrollo Funcional
              </h3>
            </div>
            <p className="bg-darkGreenColor text-sm md:text-base p-2 md:p-6 rounded-md bg-opacity-50 ">
              En este periodo se comienza con la especializaci&oacute;n,
              otorgando a cada deportista la posibilidad de desempe&ntilde;arse
              en 2 o 3 posiciones, lo cual es clave para determinar su
              posici&oacute;n en la etapa profesional. Comienza a ser m&aacute;s
              importante el componente t&aacute;ctico grupal, incentivando
              especialmente el factor comunicacional y de liderazgo. El
              resultado debe ser incentivado no como objetivo principal, sino
              como un elemento de gran importancia dentro del desarrollo del
              deporte.
              <br />
              En este per&iacute;odo, nuestros jugadores comienzan a tener
              participaci&oacute;n en las selecciones de su respectivo
              pa&iacute;s.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Especializaci&oacute;n</li>
              <li>Grupal</li>
              <li>Relevos</li>
              <li>Liderazgo</li>
              <li>Selecci&oacute;n</li>
            </ul>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain opacity-70"
                src={desarrollado}
                alt="desarrollado"
              />
              <div className="absolute w-full h-full bg-textGreen/5 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Desde los 15 hasta los 18 a&#241;os
              </p>
              <h3 className="text-2xl font-bold">
                La etapa de Profesionalizaci&oacute;n
              </h3>
            </div>
            <p className="bg-darkGreenColor text-sm md:text-base p-2 md:p-6 rounded-md bg-opacity-50 ">
              Cada vez nos acercamos a la curva final o a la recta final,
              dependiendo del camino de cada uno. Los jugadores deber&aacute;n
              llegar a este periodo con la conciencia de c&oacute;mo se juega al
              f&uacute;tbol y de su propia capacidad. Se deben pulir los
              detalles faltantes y proporcionar las herramientas necesarias para
              competir a nivel &eacute;lite. Se deber&aacute;n utilizar
              diferentes sistemas t&aacute;cticos, modelos de juego,
              presi&oacute;n y formas de atacar. El conocimiento de los
              deportistas no debe ser solo ejecucional, sino que tambi&eacute;n
              deben asimilar a nivel te&oacute;rico los principios de
              funcionamiento de un equipo, as&iacute; como el por qu&eacute; de
              cada t&aacute;ctica, estrategia y c&oacute;mo conseguir ventajas
              frente a los rivales. Al final de este proceso, nuestros
              deportistas no solo tendr&aacute;n valor por sus desempe&ntilde;os
              dentro del campo de juego, sino porque ser&aacute;n capaces de
              adaptarse y brillar en cualquier realidad futbol&iacute;stica a la
              que se enfrenten.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Desempe&ntilde;o</li>
              <li>Sistemas T&aacute;cticos</li>
              <li>Modelos de Juego</li>
              <li>Competici&oacute;n</li>
            </ul>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
        {/* ============ project Four Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain opacity-70"
                src={primera}
                alt="primera"
              />
              <div className="absolute w-full h-full bg-textGreen/5 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Mayores
              </p>
              <h3 className="text-2xl font-bold">El primer equipo.</h3>
            </div>
            <p className="bg-darkGreenColor text-sm md:text-base p-2 md:p-6 rounded-md bg-opacity-50 ">
              Esta es la clave de todo el trayecto. El primer equipo no solo
              debe ser competitivo, sino que quien lo entrene no debe tener
              miedo de utilizar estos jugadores y dar oportunidades a quienes
              est&eacute;n preparados, independientemente de la edad. A mayor
              nivel en el que se compita, mayor ser&aacute; el nivel de
              dificultad y aprendizaje. La diferencia es que cuando nuestros
              jugadores lleguen a este nivel, ya habr&aacute;n enfrentado gran
              parte de las dificultades posibles y tendr&aacute;n en su bagaje
              de conocimiento herramientas para solucionar estos problemas.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Valent&iacute;a </li>
              <li>Habilidad</li>
              <li>Responsabilidad</li>
            </ul>
          </div>
        </div>
        {/* ============ project Four End here ================== */}
        <p>
          Estamos listos y preparados para poner en pr&aacute;ctica esta
          estrategia, convencidos de que los resultados futbol&iacute;sticos y
          econ&oacute;micos son solo cuesti&oacute;n de tiempo de.
        </p>
      </div>
    </section>
  );
};

export default Community;
