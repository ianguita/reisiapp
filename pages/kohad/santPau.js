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

export default function SantPau() {
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
            Sant Pau
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Juugendstiili ja teaduse keskus
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/santPau/santpau01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Sant Pau on moodsa arhitektuuri meistriteos, mis asub Barcelonas
          Eixample linnaosas. See on endine haigla, mis on nüüd muudetud
          kultuurikeskuseks ja turismiatraktsiooniks. Sant Pau modernistlik
          kompleks koosneb 12 hoonest, mis on ehitatud ajavahemikus 1901 kuni
          1930. aastani. Need hooned on ühendatud 2 km pikkuse tunneliga, mis
          ulatub kogu kompleksi vahel.
        </p>
        <Image
          alt=""
          src="/images/pildid/santPau/santpau02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Sant Pau juurde kuulub ka väike park, kus saab nautida suurepärast
          vaadet Barcelona linnale. Hoone arhitektuuril on selged modernistlikud
          jooned ning selles on tunda Gaudí mõju, kuna hoone põhiehitaja, Lluís
          Domènech i Montaner, oli tema kaasaegne.
        </p>
        <Image
          alt=""
          src="/images/pildid/santPau/santpau03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Sant Pau kõige silmatorkavamad omadused on selle unikaalne
          mosaiikdekoratsioon ja vitraažaknad, mis on valmistatud kohalike
          kunstnike poolt. Interjööris on kasutatud erinevaid materjale,
          sealhulgas marmorit, keraamikat ja klaasi.
        </p>
        <Image
          alt=""
          src="/images/pildid/santPau/santpau04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Sant Pau kompleks on tõeline arhitektuuriline aare Barcelonas, mis
          köidab igal aastal tuhandeid turiste ja arhitektuurisõpru. See on
          suurepärane koht, kus tutvuda Kataloonia modernismi ajalooga ja
          nautida üht kõige unikaalsemat arhitektuurilist kogemust Barcelonas.
        </p>
        <Image
          alt=""
          src="/images/pildid/santPau/santpau05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <iframe
          src="https://www.youtube.com/embed/-zHW7GuuHHk"
          title="Love Barcelona | Sant Pau Art Nouveau Site 😍 | November 2021 - 4K"
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
            href="/pildid/#santPau"
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
