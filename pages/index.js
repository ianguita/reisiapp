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

export default function Home() {
  return (
    <>
      <Head>
        <title>Reisiäpp</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-mainBG min-h-screen bg-cover px-5 py-24 md:hidden lg:hidden xl:hidden">
        <div
          className={`${glassAntiqua.variable} font-glassAntiqua text-slate-700 text-lg flex mx-auto justify-between w-full px-10`}
        >
          <Link href="/linn"><p>Linn</p></Link>
          <p>Pildid</p>
          <p>Toit</p>
          <p>Kohad</p>
        </div>
        <div>
          <p className={`${limelight.variable} font-limelight text-mainBlack text-center mt-8 text-4xl`}>Hei Reenika,<br />lähme risile!</p>
          <p className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}>Kas sa tahad tulla?</p>
        </div>
        <div className="flex justify-end">
          <div className="w-2/3 flex flex-wrap mt-24 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Tibidabo</p>
            <p className={`${jost.variable} font-jost text-xs`}>Mäe tipus asuvad Sagrat Cori kirik ja külgnev Tibidabo lõbustuspark. Torre de Collserola telekommunikatsioonitorn on lühikese jalutuskäigu kaugusel. Kõik kolm on suurest osast Barcelona linnast silmapaistvalt nähtavad.</p>
            <Image alt="" src="/images/tibidabo.jpeg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-2/3 flex flex-wrap mt-3 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Sant Pau</p>
            <p className={`${jost.variable} font-jost text-xs`}>Sant Pau on suurim juugendstiilis ehitatud kompleks, mis koosneb 12 paviljonist, mis on ühendatud suurte maa-aluste galeriidega.</p>
            <Image alt="" src="/images/santPau.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-2/3 flex flex-wrap mt-8 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Sagrada Familia</p>
            <p className={`${jost.variable} font-jost text-xs`}>Sagrada Família on lõpetamata kirik Hispaanias Kataloonias Barcelonas Eixample&apos;i linnaosas. See on suurim lõpetamata katoliku kirik maailmas. Kujundanud katalaani arhitekt Antoni Gaudí</p>
            <Image alt="" src="/images/sagradaFamilia.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-2/3 flex flex-wrap mt-8 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Boqueria</p>
            <p className={`${jost.variable} font-jost text-xs`}>See on munitsipaalturg, mis asub Barcelonas Rambla tänaval. Lisaks sellele, et see on koht, kust saab osta igasuguseid värskeid tooteid, on see ka turismimagnet.</p>
            <Image alt="" src="/images/boqueria.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-2/3 flex flex-wrap mt-8 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>La Rambla</p>
            <p className={`${jost.variable} font-jost text-xs`}>See on tänav Barcelona kesklinnas. Jalakäijate tänav, mis ühendab selle keskel asuvat Plaça de Catalunyat Port Velli Christopher Columbuse monumendiga. La Rambla moodustab piiri idas Barri Gòticu ja läänes El Ravali linnaosade vahel.</p>
            <Image alt="" src="/images/rambla.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-2/3 flex flex-wrap mt-5 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Catedral</p>
            <p className={`${jost.variable} font-jost text-xs`}>Praegune katedraal ehitati 13. ja 15. sajandi vahel vana romaani stiilis katedraali peale, mis on ise ehitatud visigooti ajast pärit kirikule, millele eelnes varakristlik basiilika, mille jäänused on näha keldris, aastal. linna ajaloomuuseum.</p>
            <Image alt="" src="/images/catedral.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-2/3 flex flex-wrap mt-8 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Arc del Triomf</p>
            <p className={`${jost.variable} font-jost text-xs`}>Erinevalt teistest tugeva sõjalise iseloomuga triumfikaarest on Barcelona Triumfikaarel suurem tsiviilkomponent, mida iseloomustab kunstiline, teaduslik ja majanduslik areng.</p>
            <Image alt="" src="/images/triunfo.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-2/3 flex flex-wrap mt-6 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Barri Gòtic</p>
            <p className={`${jost.variable} font-jost text-xs`}>Gooti kvartal on linna vanim tuum ja selle ajalooline keskus, mis vastab suures osas Vana-Rooma linnale Barcinole. Varem oli see tuntud kui &quot;katedraali piirkond&quot;.</p>
            <Image alt="" src="/images/gotico.jpeg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-2/3 flex flex-wrap mt-5 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Casa Batlló</p>
            <p className={`${jost.variable} font-jost text-xs`}>Casa Batlló on Gaudí kunstilise täiuse peegeldus: see kuulub tema naturalistlikku etappi, perioodi, mil arhitekt täiustas oma isiklikku stiili, mis on inspireeritud looduse orgaanilistest vormidest.</p>
            <Image alt="" src="/images/batllo.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-2/3 flex flex-wrap mt-5 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Plaça d&apos;Espanya</p>
            <p className={`${jost.variable} font-jost text-xs`}>Barcelona Plaza de España on tuntud oma muljetavaldava purskkaevu ja kuulsa hispaania arhitektuuri poolest. See on oluline turismisihtkoht, kus korraldatakse sageli suuri sündmusi ja festivalid. Plaza de España on ka oluline transpordisõlm, kust saab metrooga hõlpsasti juurdepääsu teistele linnaosadele.</p>
            <Image alt="" src="/images/espana.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-2/3 flex flex-wrap mt-4 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Montserrat</p>
            <p className={`${jost.variable} font-jost text-xs`}>Montserrat on Kataloonia mägi, mis asub Barcelonast umbes 30 kilomeetri kaugusel. See on kuulus oma karmide kaljude, kloostri ja kabelite poolest, mida peetakse ristiusu pühapaigaks. Montserratil on ka oluline roll Kataloonia kultuuris, eriti muusikas, kuna kloostris asub kuulus poistekoor.</p>
            <Image alt="" src="/images/montserrat.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-2/3 flex flex-wrap mt-3 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Pedraforca</p>
            <p className={`${jost.variable} font-jost text-xs`}>Pedraforca on kaunis mägi Kataloonia piirkonnas, mida iseloomustavad selle iseloomulikud kaheharulised tippud. See on populaarne matkamise sihtkoht, millel on mitmeid matkaradasid ja spektakulaarseid vaateid. Pedraforca on ka tuntud oma geoloogilise eripära poolest, mille tõttu on see looduslikult kaitse all.</p>
            <Image alt="" src="/images/pedraforca.jpg" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-2/3 flex flex-wrap mt-4 pl-2">
            <p className={`${limelight.variable} font-limelight text-green-900 text-2xl text-left`}>Sitges</p>
            <p className={`${jost.variable} font-jost text-xs`}>Sitges on ilus mereäärne linn Barcelonast lõunas, mida iseloomustavad liivarannad, ajaloolised hooned ja särav ööelu. Linnas on palju kultuurilisi sündmusi ja festivalid, sealhulgas rahvusvaheline filmifestival. Sitges on ka tuntud oma rikkaliku kultuuripärandi ja kaunite randade poolest ning pakub külastajatele laia valikut restorane ja kaupluseid.</p>
            <Image alt="" src="/images/sitges.png" width="500" height="500" className="mt-2 border-4 shadow-lg" />
          </div>
        </div>
      </main>
      <div className="bg-slate-100 hidden md:block lg:block xl:block min-h-screen w-full pt-52">
        <Image alt="" src="/images/rotate-smartphone.png" width="200" height="200" className="mx-auto"/>
        <p className={`${limelight.variable} font-limelight text-slate-900 text-2xl text-center mt-12`}>Palun kasutage või<br />pöörake oma telefoni</p>
      </div>
    </>
  );
}