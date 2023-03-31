import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Glass_Antiqua, Limelight, Jost } from "next/font/google";

const glassAntiqua = Glass_Antiqua({
  subsets: ["latin"],
  variable: "--glassAntiqua-font",
  weight: "400",
});

const limelight = Limelight({
  subsets: ["latin"],
  variable: "--limelight-font",
  weight: "400",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--jost-font",
  weight: "400",
});

export default function placaEspanya() {
  return (
    <>
      <Head>
        <title>Reisiäpp</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-secondBG min-h-screen bg-cover px-5 pb-8">
        <Link href="/">
          <div className="py-12" />
        </Link>
        <div
          className={`${glassAntiqua.variable} font-glassAntiqua text-slate-700 text-lg flex mx-auto justify-between w-full px-10`}
        >
          <Link href="/linn">
            <p>Linn</p>
          </Link>
          <Link href="/pildid">
            <p>Pildid</p>
          </Link>
          <Link href="/videod">
        <p>Videod</p>
</Link>
          <Link href="/kohad">
            <p>Kohad</p>
          </Link>
        </div>
        <div className="mb-10">
          <p
            className={`${limelight.variable} font-limelight text-mainBlack text-center mt-8 text-4xl`}
          >
            Plaça d'Espanya
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Mälestus rahvusvahelisest näitusest
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaEspana01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Plaza España ehk Hispaania väljak asub Montjuïci mäe juures. See
          väljak ehitati 1929. aasta maailmanäituse jaoks.
        </p>
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaEspana02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Plaza España on tuntud oma muljetavaldava purskkaevu, mälestusmärgi ja
          kahe uhke torni poolest, mida kutsutakse ka "Kataloonia Vennaskonna
          tornideks". Väljaku kõrval asuvad Las Arenase kaubanduskeskus ja
          Barceló hotell, mis pakuvad külastajatele palju meelelahutust ja
          ostuvõimalusi.
        </p>
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaEspana03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Plaza España on ka oluline metroo-, bussi- ja rongiliikluse sõlpunkt.
          Väljaku lähedal asuvad ka Montjuïci loss, Olümpiastaadion ja Hispaania
          küla, mis on samuti tuntud turismiobjektid.
        </p>
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaEspana04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Plaza España väljakul on palju ajalugu, kultuuri ja ilu. See on
          kindlasti üks kohtadest, mida tasub külastada, kui olete Barcelonas.
        </p>
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaEspana05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Kokkuvõttes on Casa Batlló tõeline Barcelona pärl ja tähtis
          arhitektuuripärand, mida tasub külastada, kui otsite midagi
          ainulaadset ja inspireerivat.
        </p>
        <iframe
          src="https://www.youtube.com/embed/Aj7SRbJQErQ"
          title='Plaza de España, Barcelona Spain ("Spain Square" Barcelona) Evening 4K walk'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <div className="flex w-full mt-8 columns-2 gap-3">
          <Link
            href="/kohad"
            className={`${glassAntiqua.variable} font-glassAntiqua bg-red-600 py-2 w-1/2 text-center text-xl text-amber-50`}
          >
            <p>❮ Kohad</p>
          </Link>
          <Link
            href="/pildid/#placaEspanya"
            className={`${glassAntiqua.variable} font-glassAntiqua bg-red-600 py-2 w-1/2 text-center text-xl text-amber-50`}
          >
            <p>Pildid ❯</p>
          </Link>
        </div>
      </main>
      <div className="bg-slate-100 hidden md:block lg:block xl:block min-h-screen w-full pt-52 landscape:hidden">
        <Image
          alt=""
          src="/images/rotate-smartphone.png"
          width="200"
          height="200"
          className="mx-auto"
        />
        <p
          className={`${limelight.variable} font-limelight text-slate-900 text-2xl text-center mt-12`}
        >
          Palun kasutage või
          <br />
          pöörake oma telefoni
        </p>
      </div>
    </>
  );
}
