import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import HardSkillsList from "./HardSkillsList";
import SoftSkillsList from "./SoftSkillsList";

const Story = () => {
  return (
    <section
      id="story"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Our Story" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Despu&#233;s de un extenso{" "}
            <span className="text-textGreen">recorrido por el mundo</span> del
            f&#250;tbol en pa&#237;ses como Brasil, Inglaterra, Escocia,
            Portugal e Italia, hemos decidido regresar a Uruguay con el firme
            prop&#243;sito de aplicar todo el{" "}
            <span className="text-textGreen">
              conocimiento y la experiencia
            </span>{" "}
            adquirida en el desarrollo del f&#250;tbol en nuestro pa&#237;s.
          </p>
          <p>
            La trayectoria como entrenadores comenz&#243; desde temprana edad,
            inici&#225;ndonos con un equipo de ni&#241;os menores de 8 a&#241;os
            y r&#225;pidamente ascendiendo al rol de entrenadores principales
            del equipo de primera en un breve lapso de tres a&#241;os. Durante
            este tiempo, logramos enviar a 14 jugadores a pruebas tanto con el
            Chievo Verona como con el Hellas Verona,{" "}
            <span className="text-textGreen">
              destac&#225;ndonos por nuestro compromiso diario y
              metodolog&#237;a de trabajo
            </span>
            .
          </p>
          <p>
            Nuestro enfoque siempre ha sido ofensivo y contempor&#225;neo, lo
            cual se reflej&#243; en el &#233;xito de nuestros equipos,
            incluyendo ascensos y destacadas actuaciones en competencias
            nacionales e internacionales. En Escocia dirigimos los equipos
            sub-15 y sub-16 del Dundee United FC,{" "}
            <span className="text-textGreen">
              compitiendo contra los mejores clubes del mundo
            </span>{" "}
            y contribuyendo al desarrollo de jugadores que ahora forman parte de
            selecciones juveniles.
          </p>
          <p>
            Nuestra formaci&#243;n incluye{" "}
            <span className="text-textGreen">
              certificaciones AUF CONMEBOL, UEFA A, An&#225;lisis de rendimiento
            </span>
            , entrenamientos especializados en diversos pa&#237;ses,
            consolidando nuestro compromiso con la mejora continua.
          </p>
          <p>
            Esta es solo una breve mirada a nuestra trayectoria, marcada por
            a&#241;os de dedicaci&#243;n, &#233;xito y la pasi&#243;n constante
            por el f&#250;tbol.{" "}
            <span className="text-textGreen">
              Estamos emocionados de traer esta experiencia y dedicaci&#243;n al
              desarrollo del f&#250;tbol Uruguayo
            </span>
            .
          </p>

          <p className="text-textLight mt-6">
            Here are a list of soft skills I have gained through my experience:
          </p>
          <SoftSkillsList />
          <p className="text-textLight mt-6">
            Here are a few technologies I have been working with:
          </p>
          <HardSkillsList />
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Story;
