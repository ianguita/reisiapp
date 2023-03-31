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
            Pedraforca
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Riskantne mägironimine
          </p>
        </div>
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca01.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Pedraforca on mägi Kataloonia piirkonnas Hispaanias. Selle kõrgus on
          lausa 2 506 meetrit. Oma erilise kahtetipulise kujuga on see üks
          Kataloonia kõige ikoonilisemaid mägesid.
        </p>
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca02.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Pedraforca on populaarne sihtkoht matkajate ja seiklejate seas,
          pakkudes mitmeid matkaradasid nii algajatele kui ka juba kogenud
          matkajatele. Seal saab nautida kaunist loodust ja vaateid ümbritsevale
          piirkonnale.
        </p>
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca03.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Lisaks matkamisele on Pedraforca mägi ka ideaalne koht
          loodushuvilistele. Jalutades võib siin kohata erinevaid loomaliike,
          näiteks hirvi, karusid või kotkaid. Pedraforca mäel on tähtis koht ka
          kohalikus kultuuripärandis, see on inspireerinud paljusid katalaani
          kirjanikke ja kunstnikke.
        </p>
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca04.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Pedraforca mägi on ka suurepärane koht talispordi harrastajatele.
          Talvel muutuvad mäed lumiseks paradiisiks, kus saab nautida
          suusatamist, lumelauasõitu ja muid talispordialasid.
        </p>
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca05.jpg"
          width="500"
          height="500"
          priority
          className="border-4 border-amber-50 shadow-lg mt-5"
        />
        <p
          className={`${jost.variable} font-jost mt-5 bg-amber-50 shadow-lg p-5`}
        >
          Pedraforca mägi pakub küllaldaselt avastamisvõimalusi nii
          loodushuvilistele kui seiklejatele. See on kindlasti üks Hispaania
          ilusamaid kohti!{" "}
        </p>
        <iframe
          src="https://www.youtube.com/embed/F867G2CKLzw"
          title="Pedraforca- drone view 4K"
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
            href="/pildid/#pedraforca"
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
