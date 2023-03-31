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

export default function Boqueria() {
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
            La Rambla
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Linna süda
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/rambla/rambla01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Barcelona kuulus Las Ramblas ehk Rambla tänav on üks linna kõige
          ikoonilisemaid piirkondi. See on umbes 1,2 kilomeetri pikkune
          tänavaala, mis kulgeb Kataloonia väljaku ja Vahemere ranna vahel.
        </p>
        <Image
          alt=""
          src="/images/pildid/rambla/rambla02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Rambla tänav on tuntud oma elava atmosfääri ja erinevate
          vaatamisväärsuste poolest. Seal on palju kohvikuid, restorane,
          kauplusi ja turge, kus kohalikud ja turistid saavad nautida linna
          eluolu. Tänaval on ka mitmeid tähtsaid ajaloolisi hooneid, nagu Liceu
          teater ja Boqueria turg.
        </p>
        <Image
          alt=""
          src="/images/pildid/rambla/rambla03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Rambla tänaval on ka palju tänavakunstnikke, muusikuid ja muid
          esinejaid, mis lisavad atmosfäärile veelgi elavust. Seal on alati
          midagi huvitavat vaadata ja kogeda.
        </p>
        <Image
          alt=""
          src="/images/pildid/rambla/rambla04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Rambla tänav on ka linna ajalooline keskus. Seal on mitmeid Barcelona
          ajaloost aimu andvaid hooneid ja mälestisi. Parimaks näiteks on
          kindlasti Antoni Gaudi modernistlikud arhitektuurimälestised Casa
          Batlló, Casa Milà ja Palau Güell.
        </p>
        <Image
          alt=""
          src="/images/pildid/rambla/rambla05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Rambla tänav on tõeline sümbol Barcelona elavast kultuurist ja
          kaasahaaravast atmosfäärist. See on koht täis tõelist suurlinna melu.
        </p>
        <iframe
          src="https://www.youtube.com/embed/PT5h7WnSCcQ"
          title="BARCELONA La Rambla 4K FULL TOUR 🔥🇪🇸"
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
            href="/pildid/#rambla"
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
