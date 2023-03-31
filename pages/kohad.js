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

export default function Kohad() {
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
        <p>Videod</p>
</Link>
          <Link href="/kohad">
            <p className="font-bold">Kohad</p>
          </Link>
        </div>
        <div>
          <p
            className={`${limelight.variable} font-limelight text-mainBlack text-center mt-8 text-4xl`}
          >
            Kohad
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            On aeg neid kohti uurida!
          </p>
        </div>
        <Link href="/kohad/tibidabo">
          <div className="p-5 bg-amber-50 my-10">
            <Image
              alt=""
              src="/images/tibidabo.jpeg"
              width="500"
              height="500"
              priority
            />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Tibidabo
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Mäe tipus asuvad Sagrat Cori kirik ja külgnev Tibidabo
              lõbustuspark. Torre de Collserola telekommunikatsioonitorn on
              lühikese jalutuskäigu kaugusel. Kõik kolm on suurest osast
              Barcelona linnast silmapaistvalt nähtavad.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/santPau">
          <div className="p-5 bg-amber-50 my-10">
            <Image alt="" src="/images/santPau.jpg" width="500" height="500" priority />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Sant Pau
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Sant Pau on suurim juugendstiilis ehitatud kompleks, mis koosneb
              12 paviljonist, mis on ühendatud suurte maa-aluste galeriidega.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/sagradaFamilia">
          <div className="p-5 bg-amber-50 my-10">
            <Image
              alt=""
              src="/images/sagradaFamilia.jpg"
              width="500"
              height="500"
              priority
            />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Sagrada Familia
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Sagrada Família on lõpetamata kirik Hispaanias Kataloonias
              Barcelonas Eixample&apos;i linnaosas. See on suurim lõpetamata
              katoliku kirik maailmas. Kujundanud katalaani arhitekt Antoni
              Gaudí
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="kohad/boqueria">
          <div className="p-5 bg-amber-50 my-10">
            <Image alt="" src="/images/boqueria.jpg" width="500" height="500" priority />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              La Boqueria
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              See on munitsipaalturg, mis asub Barcelonas Rambla tänaval. Lisaks
              sellele, et see on koht, kust saab osta igasuguseid värskeid
              tooteid, on see ka turismimagnet.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/rambla">
          <div className="p-5 bg-amber-50 my-10">
            <Image alt="" src="/images/rambla.jpg" width="500" height="500" priority />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              La Rambla
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              See on tänav Barcelona kesklinnas. Jalakäijate tänav, mis ühendab
              selle keskel asuvat Plaça de Catalunyat Port Velli Christopher
              Columbuse monumendiga. La Rambla moodustab piiri idas Barri Gòticu
              ja läänes El Ravali linnaosade vahel.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/catedral">
          <div className="p-5 bg-amber-50 my-10">
            <Image alt="" src="/images/catedral.jpg" width="500" height="500" priority />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              La Catedral
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Praegune katedraal ehitati 13. ja 15. sajandi vahel vana romaani
              stiilis katedraali peale, mis on ise ehitatud visigooti ajast
              pärit kirikule, millele eelnes varakristlik basiilika, mille
              jäänused on näha keldris, aastal. linna ajaloomuuseum.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/arcTriomf">
          <div className="p-5 bg-amber-50 my-10">
            <Image alt="" src="/images/triunfo.jpg" width="500" height="500" priority />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Arc del Triomf
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Erinevalt teistest tugeva sõjalise iseloomuga triumfikaarest on
              Barcelona Triumfikaarel suurem tsiviilkomponent, mida iseloomustab
              kunstiline, teaduslik ja majanduslik areng.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/barriGotic">
          <div className="p-5 bg-amber-50 my-10">
            <Image alt="" src="/images/gotico.jpeg" width="500" height="500" priority />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Barri Gòtic
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Gooti kvartal on linna vanim tuum ja selle ajalooline keskus, mis
              vastab suures osas Vana-Rooma linnale Barcinole. Varem oli see
              tuntud kui &quot;katedraali piirkond&quot;.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/casaBatllo">
          <div className="p-5 bg-amber-50 my-10">
            <Image alt="" src="/images/batllo.jpg" width="500" height="500" priority />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Casa Batlló
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Casa Batlló on Gaudí kunstilise täiuse peegeldus: see kuulub tema
              naturalistlikku etappi, perioodi, mil arhitekt täiustas oma
              isiklikku stiili, mis on inspireeritud looduse orgaanilistest
              vormidest.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/placaEspanya">
          <div className="p-5 bg-amber-50 my-10">
            <Image alt="" src="/images/espana.jpg" width="500" height="500" priority />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Plaça d&apos;Espanya
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Barcelona Plaza de España on tuntud oma muljetavaldava purskkaevu
              ja kuulsa hispaania arhitektuuri poolest. See on oluline
              turismisihtkoht, kus korraldatakse sageli suuri sündmusi ja
              festivalid. Plaza de España on ka oluline transpordisõlm, kust
              saab metrooga hõlpsasti juurdepääsu teistele linnaosadele.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/montserrat">
          <div className="p-5 bg-amber-50 my-10">
            <Image
              alt=""
              src="/images/montserrat.jpg"
              width="500"
              height="500"
              priority
            />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Montserrat
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Montserrat on Kataloonia mägi, mis asub Barcelonast umbes 30
              kilomeetri kaugusel. See on kuulus oma karmide kaljude, kloostri
              ja kabelite poolest, mida peetakse ristiusu pühapaigaks.
              Montserratil on ka oluline roll Kataloonia kultuuris, eriti
              muusikas, kuna kloostris asub kuulus poistekoor.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/pedraforca">
          <div className="p-5 bg-amber-50 my-10">
            <Image
              alt=""
              src="/images/pedraforca.jpg"
              width="500"
              height="500"
              priority
            />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Pedraforca
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Pedraforca on kaunis mägi Kataloonia piirkonnas, mida
              iseloomustavad selle iseloomulikud kaheharulised tippud. See on
              populaarne matkamise sihtkoht, millel on mitmeid matkaradasid ja
              spektakulaarseid vaateid. Pedraforca on ka tuntud oma geoloogilise
              eripära poolest, mille tõttu on see looduslikult kaitse all.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
        <Link href="/kohad/sitges">
          <div className="p-5 bg-amber-50 my-10">
            <Image alt="" src="/images/sitges.png" width="500" height="500" priority />
            <p
              className={`${limelight.variable} font-limelight text-mainBlack mt-5 text-xl mb-2`}
            >
              Sitges
            </p>
            <p className={`${jost.variable} font-jost text-sm`}>
              Sitges on ilus mereäärne linn Barcelonast lõunas, mida
              iseloomustavad liivarannad, ajaloolised hooned ja särav ööelu.
              Linnas on palju kultuurilisi sündmusi ja festivalid, sealhulgas
              rahvusvaheline filmifestival. Sitges on ka tuntud oma rikkaliku
              kultuuripärandi ja kaunite randade poolest ning pakub
              külastajatele laia valikut restorane ja kaupluseid.
            </p>
            <p
              className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 mt-3 text-md`}
            >
              Loe rohkem ➙
            </p>
          </div>
        </Link>
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
