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
            <p className="font-bold">Pildid</p>
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
            Pildid
          </p>
          <p
            className={`${glassAntiqua.variable} font-glassAntiqua text-red-600 text-center mt-3 text-xl`}
          >
            Parimad pildid Barcelonast
          </p>
        </div>
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="tibidabo"
        >
          Tibidabo
        </p>
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/tibidabo/tibidabo05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="santPau"
        >
          Sant Pau
        </p>
        <Image
          alt=""
          src="/images/pildid/santPau/santpau01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/santPau/santpau02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/santPau/santpau03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/santPau/santpau04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/santPau/santpau05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="sagradaFamilia"
        >
          Sagrada Familia
        </p>
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradafamilia01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradafamilia02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradafamilia03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradafamilia04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/sagradaFamilia/sagradafamilia05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="boqueria"
        >
          La Boqueria
        </p>
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/boqueria/boqueria05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="rambla"
        >
          La Rambla
        </p>
        <Image
          alt=""
          src="/images/pildid/rambla/rambla01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/rambla/rambla02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/rambla/rambla03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/rambla/rambla04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/rambla/rambla05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="catedral"
        >
          La Catedral
        </p>
        <Image
          alt=""
          src="/images/pildid/catedral/catedral01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/catedral/catedral02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/catedral/catedral03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/catedral/catedral04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/catedral/catedral05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="arcTriomf"
        >
          Arc del Triomf
        </p>
        <Image
          alt=""
          src="/images/pildid/arcTriomf/arcTriomf01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/arcTriomf/arcTriomf02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/arcTriomf/arcTriomf03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/arcTriomf/arcTriomf04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/arcTriomf/arcTriomf05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="barriGotic"
        >
          Barri Gòtic
        </p>
        <Image
          alt=""
          src="/images/pildid/barriGotic/barrigotic01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/barriGotic/barrigotic02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/barriGotic/barrigotic03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/barriGotic/barrigotic04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/barriGotic/barrigotic05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="casaBatllo"
        >
          Casa Batlló
        </p>
        <Image
          alt=""
          src="/images/pildid/casaBatllo/casabatllo01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/casaBatllo/casabatllo02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/casaBatllo/casabatllo03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/casaBatllo/casabatllo04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/casaBatllo/casabatllo05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="placaEspanya"
        >
          Plaça d'Espanya
        </p>
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaespana01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaespana02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaespana03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaespana04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/plazaEspana/plazaespana05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="montserrat"
        >
          Montserrat
        </p>
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/montserrat/montserrat05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="pedraforca"
        >
          Pedraforca
        </p>
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/pedraforca/pedraforca05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <p
          className={`${limelight.variable} font-limelight text-mainBlack mt-8 text-2xl`}
          id="sitges"
        >
          Sitges
        </p>
        <Image
          alt=""
          src="/images/pildid/sitges/sitges01.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/sitges/sitges02.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/sitges/sitges03.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/sitges/sitges04.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
        <Image
          alt=""
          src="/images/pildid/sitges/sitges05.jpg"
          width="500"
          height="500"
          className="mt-8 border-4 border-amber-50 shadow-lg"
          priority
        />
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
