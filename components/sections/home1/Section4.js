import { IoCard } from "react-icons/io5";

export default function Section4() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="container px-4">
        <div className="flex flex-col justify-center justify-items-center align-center mb-16">
          <h3 className="heading-2 text-center mb-8 leading-tight">
            <span className="font-light">
              {" "}
              What's included? / <br />{" "}
            </span>{" "}
            ¿Qué está incluido?
          </h3>
          <p className="mb-12 text-center mx-auto w-2/3 text-neutral-700 text-md font-regular leading-relaxed dark:text-neutral-dark-300">
            20 Dynamic Activities / 20 Actividades Dinámicas Two books / Dos
            libros
          </p>
          <div>
            <form className="max-w-full md:w-[24%] mx-auto overflow-hidden">
              <a
                target="_blank"
                href="https://checkout.square.site/merchant/MLD0DXNJ1MW6V/checkout/KTVJVS4EMCRXCRG6WRVCI7BJ"
                download
                className="w-full sm:w-auto h-14 py-4 px-6 rounded-full bg-neutral-950 transition duration-200 flex items-center justify-center gap-2"
              >
                <IoCard fontSize={18} color="white" />
                <span className="text-neutral-0 font-medium text-xl">
                Purchase now
                </span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
