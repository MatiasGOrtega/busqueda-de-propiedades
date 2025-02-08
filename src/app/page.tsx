import SearchBar from "@/components/home/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-96px)] laptop:h-[calc(100vh-96px)]">
      <div className="flex-[3]">
        <div className="flex flex-col justify-start p-5 laptop:p-0 laptop:justify-center gap-10 h-full desktop:pr-[80px] tablet:pr-[20px]  mobile:justify-start">
          <h1 className="text-4xl laptop:text-6xl">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="hidden tablet:flex justify-between">
            <div className="box">
              <h1 className="text-3xl laptop:text-4xl">16+</h1>
              <h2 className="text-xl font-light">Años de Experiencia</h2>
            </div>
            <div className="box">
              <h1 className="text-3xl laptop:text-4xl">200</h1>
              <h2 className="text-xl font-light">Premios Ganados</h2>
            </div>
            <div className="box">
              <h1 className="text-3xl laptop:text-4xl">2000+</h1>
              <h2 className="text-xl font-light">Propiedades Listas</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] relative hidden laptop:flex items-center bg-yellow-100">
        <Image
          width={800}
          height={1000}
          className="absolute right-0 h-[100%] object-cover"
          src="/bg.png"
          alt="background"
          priority
        />
      </div>
    </main>
  );
}
