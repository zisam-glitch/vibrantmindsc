import PostCard11 from "@/components/blog/PostCard11";

export default function Section1() {
  return (
    <>
      <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
        <div className="container px-4">
          <h3 className="heading-2 text-center mb-16">
            <span className="font-light">
              Unlock Your Child's Potential with
            </span>
            <br /> Vibrant Minds Curriculum
          </h3>
          {/*Post list 1*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[65px]">
            <div className="flex-col justify-start items-start gap-5 inline-flex mb-4">
              <div className="flex-col justify-start items-start gap-3.5 flex">
                <div className="justify-start items-center gap-5 inline-flex"></div>
                <h3 className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug ">
                  Parents Curriculum
                </h3>
                <p className="text-neutral-700 text-md font-regular leading-relaxed dark:text-neutral-dark-300">
                  Elevate your child's learning experience with Vibrant Minds'
                  monthly themed Parents Box. Our intuitive platform allows
                  parents to monitor their child's academic growth and explore
                  diverse learning resources. Take the first step towards
                  vibrant education and unlock your child's full potential.
                </p>
              </div>
            </div>{" "}
            <div className="flex-col justify-start items-start gap-5 inline-flex mb-4">
              <div className="flex-col justify-start items-start gap-3.5 flex">
                <div className="justify-start items-center gap-5 inline-flex"></div>
                <h3 className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug ">
                    Day Care Providers/Teachers
                </h3>
                <p class="text-neutral-700 text-md font-regular leading-relaxed dark:text-neutral-dark-300">
                  Daycare providers and educators, elevate your curriculum with
                  Vibrant Minds' monthly themed box. Access educational tools
                  and resources to support early childhood development. Join our
                  community to streamline teaching for a more engaging and
                  effective learning environment.
                </p>
              </div>
            </div>{" "}
            <div className="flex-col justify-start items-start gap-5 inline-flex mb-4">
              <div className="flex-col justify-start items-start gap-3.5 flex">
                <div className="justify-start items-center gap-5 inline-flex"></div>
                <h3 className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug ">
                    Bilingüe
                </h3>
                <p class="text-neutral-700 text-md font-regular leading-relaxed dark:text-neutral-dark-300">
                  Ofrecemos todos nuestros productos en inglés y español para tu
                  conveniencia. Asegúrate de seleccionar la opción de idioma al
                  momento de realizar tu compra para disfrutar de la experiencia
                  en el idioma de tu preferencia. ¡Gracias por elegirnos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
