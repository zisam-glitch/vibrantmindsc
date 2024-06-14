
import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default async function Category4() {
    return (
        <>
            <Layout>
                <section className="relative py-20 lg:py-12">
                    <div className="container px-4">
                        <div className="flex flex-col gap-8 items-center justify-center text-center">
                            {/* breadcrumb */}
                            <div className="hidden md:flex gap-2.5  justify-start items-center h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300">
                                <Link href="/" className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium  leading-normal">Home</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} viewBox="0 0 8 12" className="fill-neutral-700 dark:fill-neutral-dark-700">
                                    <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z" />
                                </svg>
                                <Link href="/category" className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium leading-normal">Blog</Link>
                            </div>
                            <h1 className="heading-1 mb-0">
                                News  <span className="font-light">Articles</span>
                            </h1>
                            <p className="text-base md:text-lg font-medium text-neutral-950 dark:text-neutral-dark-950 max-w-3xl">Tech,
                                fashion, lifestyle – your daily dose of innovation, style, and living. Explore the intersection in a
                                byte-sized journey.</p>
                        </div>
                    </div>
                </section>
                {/* Category 1 Section 3 */}
                <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
                    <div className="container px-4">
                        <div className="flex flex-col gap-16">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[65px]">
                                <BlogPost showItem={6} style={4} startFrom={1} toEnd={12} showPagination />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Category 1 Section 3 */}
                <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
                    <div className="container px-4">
                        <div className="mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-center max-w-[1070px] bg-primary-light-300 dark:bg-primary-dark-300 rounded-3xl px-8 py-12 md:px-16 md:py-24 overflow-hidden relative">
                            <h2 className="text-5xl leading-tight md:text-6xl lg:text-6xl font-bold text-neutral-950 dark:text-neutral-dark-950 mb-0">
                                <span className="font-light">Let's</span> explore, share, and inspire <span className="font-light">together!</span></h2>
                            <div className="flex flex-col gap-8">
                                <p className="text-lg font-medium text-neutral-700 dark:text-neutral-dark-300">Ready to dive into the
                                    blend of tech, fashion, and lifestyle? Join our vibrant community and be part of the
                                    conversation.</p>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Link href="/page-login" className="group btn bg-primary-light-950 dark:bg-primary-dark-950 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 flex gap-2 items-center">
                                        <span>Get Started</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" className="fill-neutral-950 dark:fill-neutral-dark-950 group-hover:translate-x-1 transition-all duration-300">
                                            <g clipPath="url(#clip0_253_4238)">
                                                <path d="M23.6164 11.0663L14.9491 2.39884C14.7017 2.15143 14.372 2.01562 14.0204 2.01562C13.6684 2.01562 13.3388 2.15162 13.0914 2.39884L12.3045 3.18596C12.0573 3.43298 11.9211 3.76293 11.9211 4.11473C11.9211 4.46634 12.0573 4.80741 12.3045 5.05443L17.3608 10.1219H1.29657C0.572288 10.1219 0 10.6889 0 11.4134V12.5262C0 13.2507 0.572288 13.8748 1.29657 13.8748H17.4182L12.3047 18.9706C12.0575 19.218 11.9213 19.539 11.9213 19.8908C11.9213 20.2422 12.0575 20.5679 12.3047 20.8151L13.0916 21.5997C13.339 21.8471 13.6686 21.9819 14.0206 21.9819C14.3722 21.9819 14.7019 21.8453 14.9493 21.5979L23.6166 12.9307C23.8646 12.6825 24.001 12.3512 24 11.999C24.0008 11.6456 23.8646 11.3141 23.6164 11.0663Z">
                                                </path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_253_4238">
                                                    <rect width={24} height={24} />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                    <Link href="/page-contact" className="btn border border-neutral-950 dark:bg-neutral-dark-0 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 items-center">Contact
                                        Us</Link>
                                </div>
                            </div>
                            <img src="/assets/imgs/template/shape-1.svg" alt="" className="absolute top-0 left-0 opacity-10 " />
                            <img src="/assets/imgs/template/shape-2.svg" alt="" className="absolute bottom-0 right-0 opacity-10 " />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
