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

export default function barriGotic() {
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
            Barri Gòtic
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Kus ajalugu toimub
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/barriGotic/barriGotic01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Barri Gòtic ehk Barcelona gooti kvartal on üks ajaloolisemaid
          piirkondi linnas. See on tuntud oma kitsaste tänavate, ajalooliste
          hoonete ja monumentide poolest ning seda peetakse üheks kõige
          olulisemaks kultuuripärandiks Euroopas.
        </p>
        <Image
          alt=""
          src="/images/pildid/barriGotic/barriGotic02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Barri Gòtic on täis vaatamisväärsusi, näiteks Barcelona katedraal,
          Plaça Sant Jaume, Santa Maria del Pi kirik ja paljud teised. Kvartalis
          on palju kauplusi, kohvikuid ja restorane, mis pakuvad autentset
          Kataloonia toitu.
        </p>
        <Image
          alt=""
          src="/images/pildid/barriGotic/barriGotic03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Lisaks ajaloolisele tähtsusele on Barri Gòtic ka elav kunsti- ja
          kultuuri piirkond. Seal asuvad mitmed kunstigaleriid, muuseumid ja
          teatrid, mis pakuvad külastajatele unustamatuid kogemusi.
        </p>
        <Image
          alt=""
          src="/images/pildid/barriGotic/barriGotic04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Barri Gòtic on suurepärane koht ka lihtsalt jalutamiseks. Kvartalis on
          palju vaikseid tänavaid ja salajasi nurgataguseid, kus ootavad
          avastamis peidetud aarded ja salapärased ajaloolised paigad.
        </p>
        <Image
          alt=""
          src="/images/pildid/barriGotic/barriGotic05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Kokkuvõttes on Barri Gòtic Barcelonas üks kõige tähtsamaid piirkondi,
          mis pakub külastajatele ajaloolist ja kultuurilist elamust. See on
          kindlasti koht, kus tuleks Barcelonat külastades aega veeta.
        </p>
        <iframe
          src="https://www.youtube.com/embed/LyiBKHCJubw"
          title="BARCELONA - Gothic Quarter - Barrio Gotico - Waliking Tour - Spain - 4K"
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
            href="/pildid/#barriGotic"
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
