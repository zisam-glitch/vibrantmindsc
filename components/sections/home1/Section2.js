import Image from "next/image";
import Link from "next/link";

export default function Section2() {
  return (
    <>
      <section className="relative py-10 lg:py-12">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
            <h3 className="heading-2 text-left mb-4 lg:mb-0">
              <span className="font-light">Educational </span>Resources
            </h3>
           
          </div>
          <div className="grid lg:grid-cols-3 gap-[30px]">
            {/*Author box*/}
            <div className="relative w-full min-w-[310px] border-2 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl bg-neutral-0 dark:bg-neutral-dark-0 py-12 px-4 overflow-hidden max-h-[425px]">
              <div className="bg-primary-light-950 absolute top-0 left-0 right-0 h-28 w-full z-1" />
              <div className="w-full relative z-2 text-center flex flex-col justify-center content-center justify-items-center justify-self-center items-center">
                <div className="w-36 h-36 rounded-full border-4 border-neutral-0 dark:border-neutral-dark-300 overflow-hidden mb-8">
                  <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718384485/meg-wagener-M7fbJyBuAag-unsplash_1_bm4ueu.jpg" />
                </div>
                <div className="flex-col justify-start items-center gap-4 inline-flex">
                  <Link
                    className="text-center text-neutral-950 dark:text-neutral-dark-950 text-4xl font-bold"
                    href="/author"
                  >
                    Emelina Vida
                  </Link>
                  <div className="text-center text-neutral-700 text-base font-medium leading-normal">
                    "Vibrant Minds Curriculum is engaging, bilingual, and
                    perfect for both parents and daycare providers. Highly
                    recommend!"
                  </div>
                </div>
              </div>
            </div>
            {/*Post list 2*/}
            <div className="col-span-2">
              <div className="flex flex-col gap-8">
                <div className="w-full p-2.5 lg:pr-8 rounded-3xl border-2 border-neutral-300 dark:border-neutral-dark-300 flex-col justify-start items-start gap-2.5 inline-flex  hover-up">
                  <div className="justify-start items-center gap-11 flex flex-col md:flex-row">
                    <Link
                      href="/parents-curriculum"
                      className="rounded-[18px] overflow-hidden max-h-44 md:max-w-72"
                    >
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718393246/Untitled_288_x_175_px_1440_x_875_px_iuxmwa.png"
                        alt=""
                      />
                    </Link>
                    <div className="flex-col inline-flex items-center md:items-start">
                      <h3 className="text-center md:text-start mb-4 md-mb-0">
                        <Link
                          className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug item-link"
                          href=""
                        >
                          Parents Curriculum
                        </Link>
                      </h3>
                      <p>
                        May's Subscription: Dive into "Saying Bye to Winter and
                        Welcoming Spring" with 20 dynamic activities and two
                        captivating books. Curated for effortless enjoyment and
                        boundless exploration!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2.5 lg:pr-8 rounded-3xl border-2 border-neutral-300 dark:border-neutral-dark-300 flex-col justify-start items-start gap-2.5 inline-flex  hover-up">
                  <div className="justify-start items-center gap-11 flex flex-col md:flex-row">
                    <Link
                      href="/parents-curriculum"
                      className="rounded-[18px] overflow-hidden max-h-44 md:max-w-72"
                    >
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718393282/Untitled_288_x_175_px_1440_x_875_px_1_zlzvnd.png"
                        alt=""
                      />
                    </Link>
                    <div className="flex-col inline-flex items-center md:items-start">
                      <h3 className="text-center md:text-start mb-4 md-mb-0">
                        <Link
                          className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug item-link"
                          href="/parents-curriculum"
                        >
                          Day Care Providers Only{" "}
                        </Link>
                      </h3>
                      <p>
                        Explore STEM, bilingual mini lessons, sensory
                        activities, and creative enrichment. Choose Basic for
                        essentials or Premium for expanded resources including
                        books and STEM activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
