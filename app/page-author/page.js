
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default async function Author() {
    return (
        <>
            <Layout>
                <section className="py-12">
                    <div className="container px-4">
                        <div className="w-full rounded-[26px] bg-gradient-to-t from-primary-light-950 via-primary-light-300 to-primary-light-200 p-1.5">
                            <div className="flex flex-col md:flex-row rounded-[21px] h-full w-full items-center justify-center bg-neutral-0 dark:bg-neutral-dark-0 back p-2 md:p-2 lg:p-16">
                                <div className="md:pr-16 md:min-w-72 lg:min-w-96 rounded-3xl overflow-hidden">
                                    <img className="rounded-3xl md:min-w-96" src="/assets/imgs/pages/img-30.png" alt="" />
                                </div>
                                <div className="p-2 md:p-2 lg:py-12 md:pl-8 lg:pl-16">
                                    <h3 className="heading-3 mb-4">Sarah Emily</h3>
                                    <p className="text-neutral-950 dark:text-neutral-dark-950 text-base font-medium lg:max-w-[810px]">
                                        You should write because you love the shape of stories and sentences and the creation of
                                        different words on a page. Graduating from a top accelerator or incubator can be as
                                        career-defining for a startup founder as an elite university diploma.</p>
                                    <div className="flex gap-2 mt-12">
                                        <div className="flex gap-2">
                                            <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200 dark:hover:bg-primary-dark-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={9} height={16} viewBox="0 0 9 16" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                    <path d="M8.03125 9H5.6875V16H2.5625V9H0V6.125H2.5625V3.90625C2.5625 1.40625 4.0625 0 6.34375 0C7.4375 0 8.59375 0.21875 8.59375 0.21875V2.6875H7.3125C6.0625 2.6875 5.6875 3.4375 5.6875 4.25V6.125H8.46875L8.03125 9Z" />
                                                </svg>
                                            </div>
                                            <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} viewBox="0 0 17 16" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                    <g clipPath="url(#clip0_191_5465)">
                                                        <path d="M10.083 6.77491L15.9113 0H14.5302L9.46951 5.88256L5.42755 0H0.765625L6.87786 8.89547L0.765625 16H2.14682L7.49104 9.78782L11.7596 16H16.4216L10.0827 6.77491H10.083ZM8.1913 8.97384L7.57201 8.08805L2.64448 1.03974H4.76591L8.74248 6.72795L9.36178 7.61374L14.5308 15.0075H12.4094L8.1913 8.97418V8.97384Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} viewBox="0 0 15 14" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                    <path d="M7.60938 3.39062C9.57812 3.39062 11.2031 5.01562 11.2031 6.98438C11.2031 8.98438 9.57812 10.5781 7.60938 10.5781C5.60938 10.5781 4.01562 8.98438 4.01562 6.98438C4.01562 5.01562 5.60938 3.39062 7.60938 3.39062ZM7.60938 9.32812C8.89062 9.32812 9.92188 8.29688 9.92188 6.98438C9.92188 5.70312 8.89062 4.67188 7.60938 4.67188C6.29688 4.67188 5.26562 5.70312 5.26562 6.98438C5.26562 8.29688 6.32812 9.32812 7.60938 9.32812ZM12.1719 3.26562C12.1719 2.79688 11.7969 2.42188 11.3281 2.42188C10.8594 2.42188 10.4844 2.79688 10.4844 3.26562C10.4844 3.73438 10.8594 4.10938 11.3281 4.10938C11.7969 4.10938 12.1719 3.73438 12.1719 3.26562ZM14.5469 4.10938C14.6094 5.26562 14.6094 8.73438 14.5469 9.89062C14.4844 11.0156 14.2344 11.9844 13.4219 12.8281C12.6094 13.6406 11.6094 13.8906 10.4844 13.9531C9.32812 14.0156 5.85938 14.0156 4.70312 13.9531C3.57812 13.8906 2.60938 13.6406 1.76562 12.8281C0.953125 11.9844 0.703125 11.0156 0.640625 9.89062C0.578125 8.73438 0.578125 5.26562 0.640625 4.10938C0.703125 2.98438 0.953125 1.98438 1.76562 1.17188C2.60938 0.359375 3.57812 0.109375 4.70312 0.046875C5.85938 -0.015625 9.32812 -0.015625 10.4844 0.046875C11.6094 0.109375 12.6094 0.359375 13.4219 1.17188C14.2344 1.98438 14.4844 2.98438 14.5469 4.10938ZM13.0469 11.1094C13.4219 10.2031 13.3281 8.01562 13.3281 6.98438C13.3281 5.98438 13.4219 3.79688 13.0469 2.85938C12.7969 2.26562 12.3281 1.76562 11.7344 1.54688C10.7969 1.17188 8.60938 1.26562 7.60938 1.26562C6.57812 1.26562 4.39062 1.17188 3.48438 1.54688C2.85938 1.79688 2.39062 2.26562 2.14062 2.85938C1.76562 3.79688 1.85938 5.98438 1.85938 6.98438C1.85938 8.01562 1.76562 10.2031 2.14062 11.1094C2.39062 11.7344 2.85938 12.2031 3.48438 12.4531C4.39062 12.8281 6.57812 12.7344 7.60938 12.7344C8.60938 12.7344 10.7969 12.8281 11.7344 12.4531C12.3281 12.2031 12.8281 11.7344 13.0469 11.1094Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <button className="h-12 px-4 rounded-[5px] flex justify-center items-center bg-primary-light-950 dark:bg-primary-dark-950 cursor-pointer hover-up text-neutral-950 dark:text-neutral-dark-950 text-xl font-medium">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
                    <div className="container px-4">
                        <div className="mb-16">
                            <h3 className="heading-2 text-left mb-4 lg:mb-4"><span className="font-light">Posted by</span> Sarah</h3>
                            <p className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium lg:max-w-[460px]">Feeling
                                inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-[58px]">
                            <div className="flex flex-col gap-16">
                                <div className="flex flex-col gap-[30px] max-w-[850px]">
                                    <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                        <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                            <img src="/assets/imgs/pages/img-01.png" />
                                        </Link>
                                        <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                            <div className="justify-start items-center gap-5 inline-flex">
                                                <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                    <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                        Technology</div>
                                                </Link>
                                                <div className="justify-start items-center gap-2 flex">
                                                    <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        January 15, 2024 - 3 mins read</div>
                                                </div>
                                            </div>
                                            <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">Transformative Learning: Adapting to Educational
                                                Innovations</Link></h3>
                                        </div>
                                    </div>
                                    <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                        <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                            <img src="/assets/imgs/pages/img-02.png" />
                                        </Link>
                                        <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                            <div className="justify-start items-center gap-5 inline-flex">
                                                <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                    <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                        Science</div>
                                                </Link>
                                                <div className="justify-start items-center gap-2 flex">
                                                    <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        February 22, 2024 - 4 mins read</div>
                                                </div>
                                            </div>
                                            <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">Unraveling the Mysteries of Dark Matter</Link></h3>
                                        </div>
                                    </div>
                                    <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                        <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                            <img src="/assets/imgs/pages/img-03.png" />
                                        </Link>
                                        <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                            <div className="justify-start items-center gap-5 inline-flex">
                                                <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                    <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                        Travel</div>
                                                </Link>
                                                <div className="justify-start items-center gap-2 flex">
                                                    <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        March 10, 2024 - 5 mins read</div>
                                                </div>
                                            </div>
                                            <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">A Journey Through the Enchanting Landscapes of New
                                                Zealand</Link></h3>
                                        </div>
                                    </div>
                                    <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                        <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                            <img src="/assets/imgs/pages/img-04.png" />
                                        </Link>
                                        <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                            <div className="justify-start items-center gap-5 inline-flex">
                                                <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                    <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                        Health</div>
                                                </Link>
                                                <div className="justify-start items-center gap-2 flex">
                                                    <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        April 5, 2024 - 2 mins read</div>
                                                </div>
                                            </div>
                                            <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">The Importance of Mental Health in Modern Society</Link></h3>
                                        </div>
                                    </div>
                                    <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                        <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                            <img src="/assets/imgs/pages/img-05.png" />
                                        </Link>
                                        <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                            <div className="justify-start items-center gap-5 inline-flex">
                                                <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                    <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                        Fashion</div>
                                                </Link>
                                                <div className="justify-start items-center gap-2 flex">
                                                    <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        May 20, 2024 - 4 mins read</div>
                                                </div>
                                            </div>
                                            <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">Trends to Watch: Fashion Forecast for the Next Season</Link>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                        <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                            <img src="/assets/imgs/pages/img-14.png" />
                                        </Link>
                                        <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                            <div className="justify-start items-center gap-5 inline-flex">
                                                <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                    <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                        Food</div>
                                                </Link>
                                                <div className="justify-start items-center gap-2 flex">
                                                    <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        June 8, 2024 - 3 mins read</div>
                                                </div>
                                            </div>
                                            <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">Culinary Delights: Exploring Exotic Flavors Around the
                                                World</Link></h3>
                                        </div>
                                    </div>
                                    <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                        <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                            <img src="/assets/imgs/pages/img-15.png" />
                                        </Link>
                                        <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                            <div className="justify-start items-center gap-5 inline-flex">
                                                <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                    <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                        Sports</div>
                                                </Link>
                                                <div className="justify-start items-center gap-2 flex">
                                                    <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        July 14, 2024 - 5 mins read</div>
                                                </div>
                                            </div>
                                            <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">The Rise of E-Sports: A New Era in Competitive Gaming</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    {/* pagination */}
                                    <div className="flex items-center justify-start">
                                        <nav className="flex items-center gap-2" aria-label="Pagination">
                                            <Link href="/#" className="text-neutral-950 rounded-full w-12 h-12 bg-primary-light-200 hover:bg-primary-light-300 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-300 flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} viewBox="0 0 18 15" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                    <path d="M17.4922 7.49023C17.4922 8.19336 16.9453 8.74023 16.2812 8.74023H4.28906L8.39062 12.8809C8.89844 13.3496 8.89844 14.1699 8.39062 14.6387C8.15625 14.873 7.84375 14.9902 7.53125 14.9902C7.17969 14.9902 6.86719 14.873 6.63281 14.6387L0.382812 8.38867C-0.125 7.91992 -0.125 7.09961 0.382812 6.63086L6.63281 0.380859C7.10156 -0.126953 7.92188 -0.126953 8.39062 0.380859C8.89844 0.849609 8.89844 1.66992 8.39062 2.13867L4.28906 6.24023H16.2812C16.9453 6.24023 17.4922 6.82617 17.4922 7.49023Z" />
                                                </svg>
                                            </Link>
                                            <Link href="/#" className="active text-xl font-bold text-neutral-950 bg-primary-light-950 dark:text-neutral-dark-950 dark:bg-primary-dark-950 rounded-full w-12 h-12 flex items-center justify-center">1</Link>
                                            <Link href="/#" className="text-xl font-bold text-neutral-950 rounded-full bg-primary-light-200 hover:bg-primary-light-300 dark:text-neutral-dark-950 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-300 w-12 h-12 flex items-center justify-center">2</Link>
                                            <Link href="/#" className="text-xl font-bold text-neutral-950 rounded-full bg-primary-light-200 hover:bg-primary-light-300 dark:text-neutral-dark-950 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-300 w-12 h-12 flex items-center justify-center">3</Link>
                                            <Link href="/#" className="text-xl font-bold text-neutral-950 rounded-full bg-primary-light-200 hover:bg-primary-light-300 dark:text-neutral-dark-950 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-300 w-12 h-12 flex items-center justify-center">4</Link>
                                            <Link href="/#" className="text-neutral-950 rounded-full w-12 h-12 bg-primary-light-200 hover:bg-primary-light-300 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-300  flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} viewBox="0 0 18 15" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                    <path d="M0 7.49023C0 8.19336 0.546875 8.74023 1.21094 8.74023H13.2031L9.10156 12.8809C8.59375 13.3496 8.59375 14.1699 9.10156 14.6387C9.33594 14.873 9.64844 14.9902 9.96094 14.9902C10.3125 14.9902 10.625 14.873 10.8594 14.6387L17.1094 8.38867C17.6172 7.91992 17.6172 7.09961 17.1094 6.63086L10.8594 0.380859C10.3906 -0.126953 9.57031 -0.126953 9.10156 0.380859C8.59375 0.849609 8.59375 1.66992 9.10156 2.13867L13.2031 6.24023H1.21094C0.546875 6.24023 0 6.82617 0 7.49023Z" />
                                                </svg>
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* SIDEVER */}
                            <div className="sidebar flex flex-col gap-12 md:max-w-[380px]">
                                {/* about box */}
                                <div className="about p-12 rounded-3xl bg-primary-light-300 dark:bg-primary-dark-300">
                                    <h1 className="mb-8">
                                        <Link href="/index">
                                            <img src="/assets/imgs/template/logo.svg" alt="logo" className="flex-shrink-0 relative dark:hidden" />
                                            <img src="/assets/imgs/template/logo-white.svg" alt="logo" className="flex-shrink-0 relative hidden dark:inline-block" />
                                        </Link>
                                    </h1>
                                    <p className="font-medium text-neutral-950 dark:text-neutral-dark-950 mb-8 lg:mb-12 max-w-[350px]">
                                        It involves entrepreneurship, management, marketing, finance, and many other aspects.
                                        Businesses aim to generate
                                    </p>
                                    <div className="flex gap-2">
                                        <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200 dark:hover:bg-primary-dark-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={9} height={16} viewBox="0 0 9 16" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                <path d="M8.03125 9H5.6875V16H2.5625V9H0V6.125H2.5625V3.90625C2.5625 1.40625 4.0625 0 6.34375 0C7.4375 0 8.59375 0.21875 8.59375 0.21875V2.6875H7.3125C6.0625 2.6875 5.6875 3.4375 5.6875 4.25V6.125H8.46875L8.03125 9Z" />
                                            </svg>
                                        </div>
                                        <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} viewBox="0 0 17 16" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                <g clipPath="url(#clip0_191_5465)">
                                                    <path d="M10.083 6.77491L15.9113 0H14.5302L9.46951 5.88256L5.42755 0H0.765625L6.87786 8.89547L0.765625 16H2.14682L7.49104 9.78782L11.7596 16H16.4216L10.0827 6.77491H10.083ZM8.1913 8.97384L7.57201 8.08805L2.64448 1.03974H4.76591L8.74248 6.72795L9.36178 7.61374L14.5308 15.0075H12.4094L8.1913 8.97418V8.97384Z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} viewBox="0 0 15 14" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                <path d="M7.60938 3.39062C9.57812 3.39062 11.2031 5.01562 11.2031 6.98438C11.2031 8.98438 9.57812 10.5781 7.60938 10.5781C5.60938 10.5781 4.01562 8.98438 4.01562 6.98438C4.01562 5.01562 5.60938 3.39062 7.60938 3.39062ZM7.60938 9.32812C8.89062 9.32812 9.92188 8.29688 9.92188 6.98438C9.92188 5.70312 8.89062 4.67188 7.60938 4.67188C6.29688 4.67188 5.26562 5.70312 5.26562 6.98438C5.26562 8.29688 6.32812 9.32812 7.60938 9.32812ZM12.1719 3.26562C12.1719 2.79688 11.7969 2.42188 11.3281 2.42188C10.8594 2.42188 10.4844 2.79688 10.4844 3.26562C10.4844 3.73438 10.8594 4.10938 11.3281 4.10938C11.7969 4.10938 12.1719 3.73438 12.1719 3.26562ZM14.5469 4.10938C14.6094 5.26562 14.6094 8.73438 14.5469 9.89062C14.4844 11.0156 14.2344 11.9844 13.4219 12.8281C12.6094 13.6406 11.6094 13.8906 10.4844 13.9531C9.32812 14.0156 5.85938 14.0156 4.70312 13.9531C3.57812 13.8906 2.60938 13.6406 1.76562 12.8281C0.953125 11.9844 0.703125 11.0156 0.640625 9.89062C0.578125 8.73438 0.578125 5.26562 0.640625 4.10938C0.703125 2.98438 0.953125 1.98438 1.76562 1.17188C2.60938 0.359375 3.57812 0.109375 4.70312 0.046875C5.85938 -0.015625 9.32812 -0.015625 10.4844 0.046875C11.6094 0.109375 12.6094 0.359375 13.4219 1.17188C14.2344 1.98438 14.4844 2.98438 14.5469 4.10938ZM13.0469 11.1094C13.4219 10.2031 13.3281 8.01562 13.3281 6.98438C13.3281 5.98438 13.4219 3.79688 13.0469 2.85938C12.7969 2.26562 12.3281 1.76562 11.7344 1.54688C10.7969 1.17188 8.60938 1.26562 7.60938 1.26562C6.57812 1.26562 4.39062 1.17188 3.48438 1.54688C2.85938 1.79688 2.39062 2.26562 2.14062 2.85938C1.76562 3.79688 1.85938 5.98438 1.85938 6.98438C1.85938 8.01562 1.76562 10.2031 2.14062 11.1094C2.39062 11.7344 2.85938 12.2031 3.48438 12.4531C4.39062 12.8281 6.57812 12.7344 7.60938 12.7344C8.60938 12.7344 10.7969 12.8281 11.7344 12.4531C12.3281 12.2031 12.8281 11.7344 13.0469 11.1094Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* Featured box */}
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-2xl text-neutral-950 font-bold dark:text-neutral-dark-950">Featured <span className="font-light">Posts</span></h4>
                                    <div className="flex flex-col gap-6">
                                        <div className="w-full flex items-center gap-2.5  hover-up">
                                            <div className="justify-start items-center gap-4 inline-flex">
                                                <Link href="/single" className="rounded-2xl overflow-hidden max-h-[90px] max-w-[106px]">
                                                    <img src="/assets/imgs/pages/thumb-01.png" />
                                                </Link>
                                                <div className="flex-col justify-start items-start gap-4 inline-flex">
                                                    <h4>
                                                        <Link className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold item-link" href="/single">Canvas and Keyboard: An Art-Tech Affair</Link>
                                                    </h4>
                                                    <p className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        12 mins read - June 8, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center gap-2.5  hover-up">
                                            <div className="justify-start items-center gap-4 inline-flex">
                                                <Link href="/single" className="rounded-2xl overflow-hidden max-h-[90px] max-w-[106px]">
                                                    <img src="/assets/imgs/pages/thumb-02.png" />
                                                </Link>
                                                <div className="flex-col justify-start items-start gap-4 inline-flex">
                                                    <h4>
                                                        <Link className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold item-link" href="/single">Tech Threads and Culinary Canvas: Lifestyle
                                                            Palette</Link>
                                                    </h4>
                                                    <p className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        22 mins read - June 18, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center gap-2.5  hover-up">
                                            <div className="justify-start items-center gap-4 inline-flex">
                                                <Link href="/single" className="rounded-2xl overflow-hidden max-h-[90px] max-w-[106px]">
                                                    <img src="/assets/imgs/pages/thumb-03.png" />
                                                </Link>
                                                <div className="flex-col justify-start items-start gap-4 inline-flex">
                                                    <h4>
                                                        <Link className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold item-link" href="/single">Living the Art-Tech Dream: My Multifaceted Life</Link>
                                                    </h4>
                                                    <p className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        14 mins read - Aug 23, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center gap-2.5  hover-up">
                                            <div className="justify-start items-center gap-4 inline-flex">
                                                <Link href="/single" className="rounded-2xl overflow-hidden max-h-[90px] max-w-[106px]">
                                                    <img src="/assets/imgs/pages/thumb-04.png" />
                                                </Link>
                                                <div className="flex-col justify-start items-start gap-4 inline-flex">
                                                    <h4>
                                                        <Link className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold item-link" href="/single">Globetrotting in Style: A Journey Through My Lens</Link>
                                                    </h4>
                                                    <p className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                        14 mins read - June 8, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Category box */}
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-2xl text-neutral-950 dark:text-neutral-dark-950 font-bold">Explore <span className="font-light">Categories</span></h4>
                                    <div className="justify-start items-start gap-2 inline-flex flex-wrap">
                                        <Link className="button-7 hover-up" href="/category">Art</Link>
                                        <Link className="button-7 hover-up" href="/category">Fashion</Link>
                                        <Link className="button-7 hover-up" href="/category">Health</Link>
                                        <Link className="button-7 hover-up" href="/category">Food</Link>
                                        <Link className="button-7 hover-up" href="/category">Travel</Link>
                                        <Link className="button-7 hover-up" href="/category">Technology</Link>
                                        <Link className="button-7 hover-up" href="/category">Sports</Link>
                                    </div>
                                </div>
                                {/* Banner box */}
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-2xl text-neutral-950 font-bold dark:text-neutral-dark-950">Sponsored <span className="font-light">Ads</span></h4>
                                    <div className="w-72 h-96 relative rounded-2xl">
                                        <img className="w-72 h-96 left-0 top-0 absolute rounded-2xl" src="/assets/imgs/pages/banner1.png" />
                                        <div className="w-72 h-96 left-0 bottom-0 absolute bg-gradient-to-t from-neutral-950/50 to-transparent rounded-2xl">
                                        </div>
                                        <div className="w-full px-8 bottom-12 absolute text-center">
                                            <span className="text-xl text-neutral-0 font-bold">
                                                <span className="font-light">It seeks to inspire and</span> motivate individuals
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
