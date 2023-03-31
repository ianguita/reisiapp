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

export default function Pedraforca() {
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
            Sitges
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Tüüpiline linn Vahemere rannikul
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/sitges/sitges01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
Sitges on väike mereäärne linn Kataloonia piirkonnas Hispaanias, mis on kuulus oma kauni ranna, ajalooliste hoonete ja elavate festivalide poolest. See on populaarne turismisihtkoht, kus külastajad saavad nautida nii linna ajaloolist ja kultuurilist pärandit kui ka kaunist loodust.
        </p>
        <Image
          alt=""
          src="/images/pildid/sitges/sitges02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
Linnas on palju vaatamisväärsusi, üheks huvitavamaks kindlasti kohalik kirik ja kindlus. Samuti on siin palju kunstimuuseume, kus saab tutvuda nii kohaliku kui rahvusvahelise kunstiga. Linn on tuntud ka oma traditsiooniliste festivalide poolest, nagu näiteks Sitgesi karneval, mis toimub igal aastal veebruaris või märtsis ja meelitab tuhandeid külastajaid kogu maailmast.
        </p>
        <Image
          alt=""
          src="/images/pildid/sitges/sitges03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
Sitges on ka ideaalne koht mere- ja rannapuhkuseks. Linna rannad on tuntud oma kauni liivaranna ja selge merevee poolest, mis teeb sellest ideaalse koha ujumiseks, päevitamiseks ja erinevate veespordialade harrastamiseks.
        </p>
        <Image
          alt=""
          src="/images/pildid/sitges/sitges04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
Sitges on tõeliselt kaunis paik, mis pakub palju erinevaid võimalusi nii ajaloo- ja kultuurihuvilistele kui ka neile, kes soovivad lihtsalt rannas lõõgastuda ja päikest nautida.
        </p>
        <Image
          alt=""
          src="/images/pildid/sitges/sitges05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <iframe
          src="https://www.youtube.com/embed/5Y2IpCitXxo" title="Qué hacer en Sitges 4K | Sitges 4K | Sitges by drone | Barcelona day trips"
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
            href="/pildid/#sitges"
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
