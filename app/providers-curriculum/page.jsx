import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default async function About() {
  return (
    <>
      <Layout>
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="md:w-full lg:w-full">
              <h1 className="heading-2 text-center pb-30 max-w-7xl mb-12 text-neutral-950 dark:text-neutral-dark-950">
                <span className="font-light">Introducing this month </span>{" "}
                subscription!
              </h1>
            </div>

            <img
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718398701/Beth_Ellen_1_xgkhb5.png"
              alt=""
              className="mt-12 rounded-3xl"
            />
          </div>
        </section>
        <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
          <div className="container px-4">
            <h3 className="heading-2 text-center mb-16">
              <span className="font-light">What's included in the</span> <br />{" "}
              curriculum
            </h3>
            {/*Post list 1*/}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[65px]">
              <div className="flex-col justify-start items-start gap-5 inline-flex mb-4">
                <div className="flex-col justify-start items-start gap-3.5 flex">
                  <div className="">
                    <img
                      className="w-full mb-4 rounded-[50%]"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718399748/rs_w_365_h_365_cg_true_m148ok.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="text-center w-full text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug ">
                    STEM Inspired
                  </h3>
                  <p className="text-neutral-700 text-center text-md font-regular leading-relaxed dark:text-neutral-dark-300">
                    Engage young minds with hands-on exploration through our
                    curated STEM lessons, fostering a lifelong love for science,
                    technology, engineering, and math.
                  </p>
                </div>
              </div>{" "}
              <div className="flex-col justify-start items-start gap-5 inline-flex mb-4">
                <div className="flex-col justify-start items-start gap-3.5 flex">
                  <div className="">
                    <img
                      className="w-full mb-4 rounded-[50%]"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718399748/cr_w_365_h_365_txbivk.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="text-center w-full text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug ">
                    Circle Time mini lesson
                  </h3>
                  <p className="text-neutral-700 text-center text-md font-regular leading-relaxed dark:text-neutral-dark-300">
                    Dive into bilingual adventures with our engaging mini
                    lessons, where captivating books and interactive anchor
                    chart discussions ignite curiosity and learning in both
                    languages.
                  </p>
                </div>
              </div>{" "}
              <div className="flex-col justify-start items-start gap-5 inline-flex mb-4">
                <div className="flex-col justify-start items-start gap-3.5 flex">
                  <div className="">
                    <img
                      className="w-full mb-4 rounded-[50%]"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718399710/rs_w_365_h_365_cg_true_1_hzyxli.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="text-center w-full text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug ">
                    Exploration
                  </h3>
                  <p className="text-neutral-700 text-center text-md font-regular leading-relaxed dark:text-neutral-dark-300">
                    Stimulate young senses with our sensory-seeking exploration
                    activities, designed to inspire curiosity and foster
                    development through hands-on sensory experiences.
                  </p>
                </div>
              </div>{" "}
              <div className="flex-col justify-start items-start gap-5 inline-flex mb-4">
                <div className="flex-col justify-start items-start gap-3.5 flex">
                  <div className="">
                    <img
                      className="w-full mb-4 rounded-[50%]"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718399748/rs_w_365_h_365_cg_true_2_r4mjyl.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="text-center w-full text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug ">
                    Enrichment{" "}
                  </h3>
                  <p className="text-neutral-700 text-center text-md font-regular leading-relaxed dark:text-neutral-dark-300">
                    Immerse little learners in pre-academic enrichment
                    activities and dramatic experiences, cultivating creativity
                    and foundational skills for their educational journey ahead.
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
        </section>
        <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
          <div className="container px-4 ">
            <h3 className="heading-2 text-center mb-16">
              <span className="font-light">Package /</span> Paquete
            </h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-20">
              <div className="md:p-16 p-6 shadow-lg bg-neutral-100 rounded-3xl">
                <h4 className="text-center w-full text-neutral-950 dark:text-neutral-dark-950 text-3xl font-bold leading-snug ">
                  Basic Package
                </h4>
                <p className="text-center text-lg py-4 leading-loose">
                  {" "}
                  Materials for Activities / Materiales para Actividades <br />
                  Guide Book / Libro Guía <br />
                  Providers Newsletter / Boletín para Proveedores <br />
                  Parents Newsletter / Boletín para Padres <br />
                  Worksheet Activities / Actividades de Hojas de Trabajo <br />
                  Materials for activities / Materiales para Actividades <br />
                  STEM Activities / Actividades STEM <br />
                  <b>2 Books / 2 Libros</b>{" "}
                </p>
                <div className="w-2/3 md:w-1/2 mx-auto pt-4">
                  <a
                    target="_blank"
                    href="https://checkout.square.site/merchant/MLD0DXNJ1MW6V/checkout/QXXKDWGB77UH7YFPJOCAHQGT"
                    download
                    className="w-full sm:w-auto h-14 py-4 px-6 rounded-full bg-neutral-950 transition duration-200 flex items-center justify-center gap-2"
                  >
                    <span className="text-neutral-0 font-medium text-xl">
                      Subscribe now
                    </span>
                  </a>
                </div>
              </div>
              <div className="md:p-16 p-6 shadow-lg bg-[#e7b636] rounded-3xl">
                <h4 className="text-center w-full text-neutral-950 dark:text-neutral-dark-950 text-3xl font-bold leading-snug ">
                  Premium Package
                </h4>
                <p className="text-center text-lg py-4 leading-loose">
                  {" "}
                  Materials for Activities / Materiales para Actividades Guide
                  Book / Libro Guía <br />
                  Providers Newsletter / Boletín para Proveedores <br />
                  Parents Newsletter / Boletín para Padres <br />
                  Worksheet Activities / Actividades de Hojas de Trabajo <br />
                  Materials for activities / Materiales para Actividades <br />
                  STEM Activities / Actividades STEM <br />
                  <b> 6-8 Books / 6-8 Libros</b>{" "}
                </p>
                <div className="w-2/3 md:w-1/2 mx-auto pt-4">
                  <a
                    target="_blank"
                    href="https://checkout.square.site/merchant/MLD0DXNJ1MW6V/checkout/MYOG5WMKSBX664PH5JFXBQ66"
                    download
                    className="w-full sm:w-auto h-14 py-4 px-6 rounded-full bg-neutral-100 transition duration-200 flex items-center justify-center gap-2"
                  >
                    <span className="text-neutral-950 font-medium text-xl">
                      Subscribe now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
