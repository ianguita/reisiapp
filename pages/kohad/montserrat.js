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

export default function Montserrat() {
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
            Montserrat
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Püha mägi
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Montserrat on populaarne mägi Kataloonia piirkonnas Hispaanias. Selle
          kõrgus ulatub 1236 meetrini. Seda imelist kohta külastavad igal aastal
          kümned tuhanded turistid, kes soovivad imetleda looduse võrratut ilu
          ja avastada Montserrati piirkonna ajaloolist ja kultuurilist pärandit.
        </p>
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Üks peamisi vaatamisväärsusi Montserratil on kindlasti klooster, mis
          asub mäe tipus. Sellel on oluline koht nii Kataloonia ajaloos kui ka
          katoliikluses. Klooster pärineb 11. sajandist ja on olnud spirituaalne
          keskus kohalikele inimestele juba aastasadu.
        </p>
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Lisaks kloostrile pakub Montserrat ka hämmastavaid vaateid loodusele.
          Mägi on kuulus oma imepäraste kaljude poolest, mida on tuhandeid
          aastaid vorminud tuuled, vihmad ja kõikvõimalikud
          loodusjõud.Montserrati matkarajad pakuvad külastajatele võimalust
          nautida looduse rikkust ja avastada salapäraseid paiku, mis jäävad
          tavaliste turistide silma alt varjatuks.
        </p>
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Montserrat on tõeliselt unikaalne koht, kus loodus ja kultuur põimuvad
          omavahel ühtseks tervikuks. See on ideaalne koht neile, kes soovivad
          puhata linnakärast ja nautida vaikset loodust.
        </p>
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <iframe
          src="https://www.youtube.com/embed/eh2l1koJAgc"
          title="Montserrat, Catalonia Spain 4K Drone"
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
            href="/pildid/#montserrat"
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
