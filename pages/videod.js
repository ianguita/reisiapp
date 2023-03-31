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

export default function Pildid() {
  return (
    <>
      <Head>
        <title>Reisiäpp</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-secondBG min-h-screen bg-cover px-5 pb-24 md:hidden lg:hidden xl:hidden landscape:hidden">
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
            <p className="font-bold">Videod</p>
          </Link>
          <Link href="/kohad">
            <p>Kohad</p>
          </Link>
        </div>
        <div>
          <p
            className={`${limelight.variable} font-limelight text-mainBlack text-center mt-8 text-4xl`}
          >
            Videod
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Linna parimad stseenid
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/_UfPnTskuAk"
          title="BARCELONA, España 4K - Recorrido a pie por la ciudad - Episodio n.º 1 - Explorando ciudades europeas"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/LyiBKHCJubw"
          title="BARCELONA - Gothic Quarter - Barrio Gotico - Waliking Tour - Spain - 4K"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/qoAHIu3h49M"
          title="La Boqueria Market Barcelona 4k Full Tour Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/TnvwuELRPes"
          title="video Barcelona 4k CASA BATLLO Gaudi Relax"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/qHM8jKGMowc"
          title="CATEDRAL DE BARCELONA - España [4K]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/eh2l1koJAgc"
          title="Montserrat, Catalonia Spain 4K Drone"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/F867G2CKLzw"
          title="Pedraforca- drone view 4K"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/Aj7SRbJQErQ"
          title='Plaza de España, Barcelona Spain ("Spain Square" Barcelona) Evening 4K walk'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/PT5h7WnSCcQ"
          title="BARCELONA La Rambla 4K FULL TOUR 🔥🇪🇸"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/78cWSG2m3fw"
          title="SAGRADA FAMILIA (Barcelona) | Full tour in 4K (exterior + interior)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/-zHW7GuuHHk"
          title="Love Barcelona | Sant Pau Art Nouveau Site 😍 | November 2021 - 4K"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/5Y2IpCitXxo"
          title="Qué hacer en Sitges 4K | Sitges 4K | Sitges by drone | Barcelona day trips"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/OMzpcBwamyI"
          title="Tibidabo Barcelona Drone 4K"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
      </main>
      <div className="bg-slate-100 hidden md:block lg:block xl:block min-h-screen w-full pt-52">
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
