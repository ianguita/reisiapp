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

export default function Tibidabo() {
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
            Tibidabo
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Parimad vaated linnale
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Tibidabo on üks Barcelonas asuvaid mägesid, mis on tuntud oma
          vaateplatvormi ja meelelahutusparki poolest. Mägi asub linna lääneosas
          ja ulatub kõrguseni 512 meetrit merepinnast. Sellest kõrgusest avaneb
          vapustav vaade linna ja selle ümbruskonna üle.
        </p>
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Tibidabo nime juured ulatuvad tagasi ladina keelde, mis tähendab
          "Jumala majapidamist". Legendi kohaselt pidi Jeesus Kristus kutsunud
          kurja saatana Tibidabo mäele ja käsutanud teda lahkuma. Pärast seda
          olevat ingel teinud mäele tempel.
        </p>
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Tänapäeval on Tibidabo kõrgus meeldiv koht, kuhu minna jalutama,
          sportima ja nautima vaadet. Vaateplatvormil asuvad Barcelona kõige
          kõrgemad vaated, ja sealt saab näha ka linna kõige tähtsamaid ehitisi.
          Samuti on mäel meelelahutuspark, mis on loodud vanade atraktsioonide
          ümber. Park on eriti populaarne laste seas, kuid sobib hästi ka
          täiskasvanutele.
        </p>
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Tibidabo on üks kohustuslikest kohtadest, mida külastada Barcelonas.
          See pakub mitmekesist ja meeldejäävat kogemust nii kohalikele kui ka
          turistidele.
        </p>
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <iframe
          src="https://www.youtube.com/embed/OMzpcBwamyI"
          title="Tibidabo Barcelona Drone 4K"
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
            href="/pildid/#tibidabo"
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
