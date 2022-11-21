import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-full max-w-[450px] mx-auto flex flex-col md:gap-5 justify-center px-5 py-10">
        <div className="h-3/4 md:h-fit flex items-center animate-menuSlide">
          <h1 className="text-white text-5xl font-bold">
            A CARTEIRA DA NOVA <span className="text-primary">GERAÇÃO.</span>
          </h1>
        </div>
        <div className="text-right md:text-left  animate-buttonSlideUp">
          <Link
            href="/cadastrar-se"
            className="inline-block text-center bg-primary text-white py-4 w-full rounded-full md:rounded-md font-semibold"
          >
            Iniciar
          </Link>
        </div>
      </div>
    </div>
  );
}
