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

export default function SagradaFamilia() {
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
            Sagrada Familia
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Euroopa ilusaim kirik
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradaFamilia01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Barcelona kuulus ja maailmakuulus kirik Sagrada Familia on
          arhitektuuri meistriteos, mis on üks kõige külastatavamaid
          turismiatraktsioone linnas. Selle välisilme kuulsus tuleneb selle
          gooti ja modernistlike elementide segu. Ehitus algas 1882. aastal,
          kuid siiani pole see valmis ja tööd jätkuvad.
        </p>
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradaFamilia02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Sagrada Familia arhitektuur on tuntud oma ainulaadsete fassaadide,
          tornide ja vitraažide poolest, mis kujutavad Piiblist tuntud stseene.
          Kirikus on ka suur rist ja kõrged aknad, mis loovad interjööris
          unikaalse valguse mängu. Sagrada Familia on tõeliselt vapustav kogemus
          kõigile, kes külastavad seda linna.
        </p>
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradaFamilia03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Kui Sagrada Familia on teie reisiplaanides, peaksite kindlasti ootama
          mõningast järjekorda, kuna selle suurejoonelise struktuuri külastajate
          arv on alati kõrge. Kuid see on kindlasti väärt ootamist ja vaeva.
          Kiriku sisekujundus ja arhitektuuriline stiil on kindlasti midagi,
          mida tuleks kogeda ja näha oma silmaga.
        </p>
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradaFamilia04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Sagrada Familia on ka Barcelonas populaarne märgistuskoht ning see on
          üks parimaid kohti, kus saab nautida suurepäraseid vaateid linnale.
          See on kindlasti koht, mida ei tohiks külastamata jätta, kui otsite
          midagi erilist ja muljetavaldavat oma reisil.
        </p>
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradaFamilia05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <iframe
          src="https://www.youtube.com/embed/78cWSG2m3fw"
          title="SAGRADA FAMILIA (Barcelona) | Full tour in 4K (exterior + interior)"
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
            href="/pildid/#sagradaFamilia"
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
