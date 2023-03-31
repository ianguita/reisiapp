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
            La Boqueria
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Turg, kust saab kõike osta
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          La Boqueria on Barcelona kuulsaim turg, mis asub Las Rambla ääres. See
          on üks linna külastatumaid kohti, pakkudes värskeid mereande, puu- ja
          köögivilju, liha, juustu ja pagaritooteid.
        </p>
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Turul ajalugu ulatub tagasi 1217. aastasse, kui seal asus lihaturg.
          Tänapäeval on La Boqueria muutunud mitmekesisemaks, pakkudes lisaks
          värskele toidule ka rikkalikku valikut erinevatest toiduainetest,
          vürtsidest, oliividest ja igasugustest gurmeetoodetest.
        </p>
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          La Boqueria on külastajate seas populaarne ka rikkaliku kultuurilise
          õhustiku tõttu. Seal on alati palju rahvast ja sagimist, tulvil
          maitseid, lõhnu ja värve. Turu värsked toidud on populaarsed nii
          kohalike kui ka turistide seas.
        </p>
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Lisaks oma peamisele funktsioonile pakub La Boqueria ka toiduelamusi.
          Seal on palju väikesi toidukioskeid, kus saab nautida traditsioonilist
          Katalaani toitu, nagu tapaseid, paellat ja erinevaid mereande. Samuti
          on turul võimalik osaleda näiteks toiduvalmistamise töötubades ja
          degusteerimisüritustel.
        </p>
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          La Boqueria on koht, kus kohalikud ja külastajad saavad üksteisega
          segunedes nautida linna rikkalikku toidukultuuri. See on tõeline
          kulinaarne sihtkoht, kus saab kogeda Barcelona elavat atmosfääri.
        </p>
        <iframe
          src="https://www.youtube.com/embed/qoAHIu3h49M"
          title="La Boqueria Market Barcelona 4k Full Tour Video"
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
            href="/pildid/#boqueria"
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
