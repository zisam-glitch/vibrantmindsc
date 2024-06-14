import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default async function Category() {
  return (
    <>
      <Layout>
        <div className="header-bg absolute top-0 left-0 right-0 -z-50 w-full h-[1100px] bg-gradient-to-b from-primary-light-950/15 to-transparent max-h-[1100px] overflow-hidden"></div>
        <div>
          <section className="relative py-20 lg:py-12">
            <div className="container px-4">
              <div className="flex flex-col gap-8 items-center justify-center text-center">
                {/* breadcrumb */}
                <div className="hidden md:flex gap-2.5  justify-start items-center h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300">
                  <Link
                    href="/"
                    className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium  leading-normal"
                  >
                    Home
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    className="fill-neutral-700 dark:fill-neutral-dark-700"
                  >
                    <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z" />
                  </svg>
                  <Link
                    href="/category"
                    className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium leading-normal"
                  >
                    Blog
                  </Link>
                </div>
                <h1 className="heading-1 mb-0">
                  <span className="font-light">Vibrant Minds </span>
                  {""}Blog
                </h1>
                <p className="text-base md:text-lg font-medium text-neutral-950 dark:text-neutral-dark-950 max-w-3xl">
                  Exploring Early Childhood Education: Insights, Tips, and
                  Resources
                </p>
              </div>
            </div>
          </section>
          {/* Category 1 Section 2 */}
          <section className="relative py-4 lg:py-12">
            <div className="container px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                {/*Left col*/}
                <div className="flex-col justify-start items-start gap-5 inline-flex hover-up">
                  <Link
                    href="/of-course-i-have-to-introduce-myself"
                    className="rounded-3xl overflow-hidden max-h-[370px]"
                  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718402810/rs_w_1280_nchzli.webp" />
                  </Link>
                  <div className="flex-col justify-start items-start gap-3.5 flex">
                    <div className="justify-start items-center gap-5 inline-flex">
                      {/* <Link
                        href="/category"
                        className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex"
                      >
                        <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                          Trending
                        </div>
                      </Link> */}
                      <div className="justify-start items-center gap-2 flex">
                        <Link href="/author">
                          <img
                            className="w-9 h-9 rounded-3xl"
                            src="https://res.cloudinary.com/db1i46uiv/image/upload/c_crop,h_645,w_522,x_103,y_106/v1718402810/rs_w_1280_nchzli.webp"
                          />
                        </Link>
                        <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                          <Link href="/author">Karina Ozuna</Link> - May 9, 2024
                        </div>
                      </div>
                    </div>
                    <h3>
                      <Link
                        className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug item-link"
                        href="/single"
                      >
                        Of course I have to Introduce myself!
                      </Link>
                    </h3>
                    <p className="text-neutral-700 text-sm md:text-base font-medium leading-relaxed dark:text-neutral-dark-600">
                      With much grace and gratitude, I present to you all
                      Vibrant Minds Curriculum. We are a team of experienced
                      early learning educators contributing towards...
                    </p>
                  </div>
                </div>
                {/*Right col*/}
                <div className="flex flex-col gap-[30px]">
                  {/*small post*/}
                  {/* <BlogPost showItem={3} style={9} startFrom={7} toEnd={17} /> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
