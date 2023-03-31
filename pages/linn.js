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

export default function Linn() {
  return (
    <>
      <Head>
        <title>Reisiäpp</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-secondBG min-h-screen bg-cover px-5 pb-24">
        <Link href="/">
          <div className="py-12" />
        </Link>
        <div
          className={`${glassAntiqua.variable} font-glassAntiqua text-slate-700 text-lg flex mx-auto justify-between w-full px-10`}
        >
          <Link href="/linn">
            <p className="font-black">Linn</p>
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
        <div>
          <p
            className={`${limelight.variable} font-limelight text-mainBlack text-center mt-8 text-4xl`}
          >
            Barcelona
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Modernismi ja kultuuri linn
          </p>
        </div>
        <Image
          alt=""
          src="/images/barcelona.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Barcelona on Kataloonia pealinn ning üks Hispaania suurimaid linnu.
          Linna ajalugu ulatub tagasi Rooma impeeriumi aega, kui asula oli
          tuntud nime all Barcino. Arheoloogiliste leidude kohaselt asutasid
          roomlased asula aastal 15 eKr. Aastate jooksul on Barcelona olnud osa
          erinevatest kultuuridest, sealhulgas visigootidest, araablastest ja
          karolingidest.
        </p>
        <Image
          alt=""
          src="/images/linn/romano.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <Image
          alt=""
          src="/images/linn/columnas.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Keskajal oli Barcelona kaubandus- ja merenduskeskuseks. Sellest ajast
          pärineb ka Barri Gòtic, Barcelona vanalinn. 19. sajandil kujunes
          Barcelonast oluline tööstuslinn, kus valmistati tekstiili, masinaid ja
          toiduaineid. 20. sajandil kujunes linna majanduslikus arengus
          oluliseks turism, samuti kultuur ja spordiüritused.
        </p>
        <Image
          alt=""
          src="/images/linn/bisbe.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <Image
          alt=""
          src="/images/linn/medieval.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Keskajal oli Barcelona kaubandus- ja merenduskeskuseks. Sellest ajast
          pärineb ka Barri Gòtic, Barcelona vanalinn. 19. sajandil kujunes
          Barcelonast oluline tööstuslinn, kus valmistati tekstiili, masinaid ja
          toiduaineid. 20. sajandil kujunes linna majanduslikus arengus
          oluliseks turism, samuti kultuur ja spordiüritused.
        </p>
        <Image
          alt=""
          src="/images/linn/guerra.webp"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <Image
          alt=""
          src="/images/linn/guerra2.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Tänapäeval on Barcelona tuntud oma rikkaliku ajaloo ja kultuuripärandi
          poolest. Linna arhitektuur on silmapaistev, sealhulgas Antoni Gaudí
          looming nagu Sagrada Família, Casa Batlló ja Park Güell. Barcelona on
          ka tuntud oma ranniku, tänavaelu ja köögi poolest. La Boqueria turg on
          linna kuulsaim turg, kus müüakse värskeid mereande, puu- ja köögivilju
          ning traditsioonilisi Kataloonia toite.
        </p>
        <Image
          alt=""
          src="/images/linn/batllo.webp"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <Image
          alt=""
          src="/images/linn/batllo2.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <Image
          alt=""
          src="/images/linn/parcguell.webp"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Lisaks sellele on Barcelona tuntud ka oma spordi- ja
          meelelahutusürituste poolest. Camp Nou staadion, mis on FC Barcelona
          kodumängude toimumiskoht, on üks suurimaid staadione maailmas.
          Igasuguste muusikaürituste, festivalide ja rannapidude korraldamine on
          linna üks tugevamaid külgi. Barcelona on ka koduks mitmetele
          muuseumidele ja kunstigaleriidele, sealhulgas Picasso muuseumile ja
          Kataloonia kaasaegsele kunstimuuseumile.
        </p>
        <Image
          alt=""
          src="/images/linn/portvell.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <Image
          alt=""
          src="/images/linn/portvell2.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <Image
          alt=""
          src="/images/linn/campnou.webp"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Barcelona on tõeliselt mitmekesine linn, kus on midagi igale maitsele.
          Olgu tegemist ajaloo, arhitektuuri, kultuuri, toidu või
          meelelahutusega, Barcelona pakub alati midagi põnevat.
        </p>
        <Image
          alt=""
          src="/images/linn/boqueria.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <Image
          alt=""
          src="/images/linn/tapas.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <Image
          alt=""
          src="/images/linn/churros.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
        />
        <iframe
          src="https://www.youtube.com/embed/_UfPnTskuAk"
          title="BARCELONA, España 4K - Recorrido a pie por la ciudad - Episodio n.º 1 - Explorando ciudades europeas"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-48 border-4 border-amber-50 shadow-lg mt-5"
        ></iframe>
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
