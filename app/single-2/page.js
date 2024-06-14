
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default async function Single2() {
    return (
        <>
            <Layout>
                <section className="relative py-4 lg:py-12">
                    <div className="container px-4">
                        <div className="flex w-full justify-center item-center mb-16">
                            {/* breadcrumb */}
                            <div className="hidden md:flex gap-2.5  justify-start items-center h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300">
                                <Link href="/" className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium  leading-normal">Home</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} viewBox="0 0 8 12" className="fill-neutral-700 dark:fill-neutral-dark-700">
                                    <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z" />
                                </svg>
                                <Link href="/category" className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium leading-normal">Blog</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} viewBox="0 0 8 12" className="fill-neutral-700 dark:fill-neutral-dark-700">
                                    <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z" />
                                </svg>
                                <span className="text-neutral-900 dark:text-neutral-dark-950 text-base font-bold leading-snug">It seeks
                                    to inspire and motivate individuals </span>
                            </div>
                        </div>
                        <div className="swiper-container post-slider-1 mb-12">
                            <div className="swiper-wrapper pt-4">
                                <div className="swiper-slide">
                                    <img src="/assets/imgs/pages/img-26.png" className="rounded-e-3xl" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="/assets/imgs/pages/img-27.png" className="rounded-3xl" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="/assets/imgs/pages/img-28.png" className="rounded-3xl" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-center text-center">
                            <div className="justify-center items-center gap-4 flex flex-col md:flex-row">
                                <Link href="/category" className="inline-flex  px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300 justify-center items-center gap-2.5">
                                    <span className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">Technology</span>
                                </Link>
                                <div className="justify-start items-center gap-2 flex">
                                    <Link href="/author"><img className="w-9 h-9 rounded-3xl" src="/assets/imgs/avatar/avatar-10.png" /></Link>
                                    <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700"><Link href="/author">M. Azumi</Link> - 28 January 2014</div>
                                </div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-950 dark:text-neutral-dark-950 max-w-5xl leading-snug">
                                Whispers of Creativity: Unveiling the Symphony of Life's Artistic Voyage
                            </h1>
                            <p className="text-base md:text-lg font-medium text-neutral-950 dark:text-neutral-dark-950 max-w-3xl">In the
                                grand tapestry of existence, the journey of life unfolds through the lens of creativity, where each
                                individual becomes an artist, contributing unique brushstrokes to the canvas of existence.</p>
                        </div>
                    </div>
                </section>
                <section className="relative py-12">
                    <div className="container px-4">
                        <div className="flex justify-center">
                            <div className="post-content max-w-[850px]">
                                {/* Single Conttent */}
                                <div className="single-content text-base font-medium text-neutral-950 dark:text-neutral-dark-950 leading-relaxed max-w-[850px]">
                                    <img src="/assets/imgs/pages/img-25.png" className="rounded-3xl mb-8" alt="" />
                                    <p className="mb-4">In the grand tapestry of existence, the journey of life unfolds through the lens
                                        of creativity, where each individual becomes an artist, contributing unique brushstrokes to
                                        the canvas of existence.</p>
                                    <p>In the vast canvas of existence, each individual carries within themselves a unique palette
                                        of experiences, emotions, and aspirations. This intricate tapestry, woven with the threads
                                        of life, becomes the backdrop for an extraordinary journey – a journey where creativity
                                        takes center stage. "Brushstrokes of Life: A Creative Journey Unveiled" is an exploration
                                        into the boundless realms of human imagination and expression.</p>
                                    <h3>The Palette of Beginnings</h3>
                                    <p>At its core, creativity is the manifestation of the human spirit, a vivid portrayal of the
                                        myriad hues that define our existence. This journey begins with the first strokes of
                                        infancy, where curiosity and wonder lay the foundation for the artist within. As we traverse
                                        the landscapes of childhood, adolescence, and adulthood, our experiences become the pigments
                                        that color our canvases.</p>
                                    <blockquote className="block-quote relative pt-8 pb-8 pl-20 overflow-hidden mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={49} height={36} viewBox="0 0 49 36" className="fill-primary-light-950 dark:fill-primary-dark-950 opacity-20 absolute top-8 left-0">
                                            <path d="M10.5 0.5C16.2969 0.5 21 5.20312 21 11V21.5C21 29.2656 14.6562 35.5 7 35.5C5.03125 35.5 3.5 33.9688 3.5 32C3.5 30.1406 5.03125 28.5 7 28.5C10.8281 28.5 14 25.4375 14 21.5V20.9531C12.7969 21.2812 11.7031 21.5 10.5 21.5C4.59375 21.5 0 16.9062 0 11C0 5.20312 4.59375 0.5 10.5 0.5ZM49 11V21.5C49 29.2656 42.6562 35.5 35 35.5C33.0312 35.5 31.5 33.9688 31.5 32C31.5 30.1406 33.0312 28.5 35 28.5C38.8281 28.5 42 25.4375 42 21.5V20.9531C40.7969 21.2812 39.7031 21.5 38.5 21.5C32.5938 21.5 28 16.9062 28 11C28 5.20312 32.5938 0.5 38.5 0.5C44.2969 0.5 49 5.20312 49 11Z" fill="#FFCF01" />
                                        </svg>
                                        <span className="font-normal text-xl block mb-4">Within the strokes of our existence, creativity
                                            is the heartbeat that transforms the mundane into a masterpiece, revealing the
                                            extraordinary tapestry of our shared human journey</span>
                                        <cite>-- Emily Jane</cite>
                                    </blockquote>
                                    <p>The creative journey is a dynamic process, evolving with every stroke, akin to an artist
                                        refining their masterpiece. It encapsulates the courage to embrace vulnerability and the
                                        resilience to learn from failures. Each brushstroke signifies a lesson learned, a challenge
                                        overcome, and a moment of self-discovery. These strokes are not merely about creating art;
                                        they are about forging connections with our inner selves and the world around us.</p>
                                    <h4>Embracing Vulnerability and Resilience</h4>
                                    <p>The canvas of life is vast, encompassing various forms of creativity – be it in the realms of
                                        visual arts, literature, music, or even the art of living. It is a celebration of the human
                                        ability to innovate, adapt, and transform mundane moments into extraordinary expressions.
                                        The dance of creativity unfolds differently for each person, and the beauty lies in the
                                        diversity of perspectives and interpretations.</p>
                                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                                        <img src="/assets/imgs/pages/img-19.png" className="rounded-3xl mb-8" alt="" />
                                        <img src="/assets/imgs/pages/img-24.png" className="rounded-3xl mb-8" alt="" />
                                    </div>
                                    <p>Creativity also serves as a powerful tool for introspection and societal reflection. It has
                                        the capacity to challenge norms, break barriers, and build bridges. The unveiling of this
                                        creative journey is not just a personal revelation but a shared experience that resonates
                                        with others, fostering a sense of collective understanding and empathy.</p>
                                    <h5>The Multifaceted Nature of Creativity</h5>
                                    <p>As we navigate the twists and turns of our creative odyssey, it becomes apparent that the
                                        canvas is not static. It is a living, breathing entity that mirrors our growth, evolution,
                                        and the ever-changing landscapes of our emotions. Embracing the impermanence of the canvas
                                        allows us to appreciate the beauty in each fleeting moment, savoring the essence of our
                                        creative endeavors.</p>
                                </div>
                                {/* Single Conttent */}
                                <div className="single-bottom mt-16 py-8 border-t border-neutral-300 dark:border-neutral-dark-300 text-lg font-bold text-neutral-950 dark:text-neutral-dark-950 leading-relaxed max-w-[850px]">
                                    <div className="flex flex-col md:flex-row justify-between gap-8">
                                        <div>
                                            <h6 className="text-lg font-bold mb-4">Popular Tag</h6>
                                            <div className="flex flex-wrap gap-2">
                                                <Link href="/category" className="hover-up px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-dark-300  text-base font-medium hover:bg-neutral-300  hover:dark:bg-neutral-dark-300 transition-all duration-300">Art</Link>
                                                <Link href="/category-2" className="hover-up px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-dark-300  text-base font-medium hover:bg-neutral-300  hover:dark:bg-neutral-dark-300 transition-all duration-300">Fashion</Link>
                                                <Link href="/category-3" className="hover-up px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-dark-300  text-base font-medium hover:bg-neutral-300  hover:dark:bg-neutral-dark-300 transition-all duration-300">Health</Link>
                                                <Link href="/category-4" className="hover-up px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-dark-300  text-base font-medium hover:bg-neutral-300  hover:dark:bg-neutral-dark-300 transition-all duration-300">Food</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="text-lg font-bold mb-4">Share:</h6>
                                            <div className="flex gap-2">
                                                <div className="size-9 rounded-full flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-neutral-300 dark:hover:bg-neutral-dark-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={9} height={16} viewBox="0 0 9 16" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                        <path d="M8.03125 9H5.6875V16H2.5625V9H0V6.125H2.5625V3.90625C2.5625 1.40625 4.0625 0 6.34375 0C7.4375 0 8.59375 0.21875 8.59375 0.21875V2.6875H7.3125C6.0625 2.6875 5.6875 3.4375 5.6875 4.25V6.125H8.46875L8.03125 9Z" />
                                                    </svg>
                                                </div>
                                                <div className="size-9 rounded-full flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-neutral-300 dark:hover:bg-neutral-dark-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} viewBox="0 0 17 16" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                        <g clipPath="url(#clip0_191_5465)">
                                                            <path d="M10.083 6.77491L15.9113 0H14.5302L9.46951 5.88256L5.42755 0H0.765625L6.87786 8.89547L0.765625 16H2.14682L7.49104 9.78782L11.7596 16H16.4216L10.0827 6.77491H10.083ZM8.1913 8.97384L7.57201 8.08805L2.64448 1.03974H4.76591L8.74248 6.72795L9.36178 7.61374L14.5308 15.0075H12.4094L8.1913 8.97418V8.97384Z" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="size-9 rounded-full flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-neutral-300 dark:hover:bg-neutral-dark-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} viewBox="0 0 15 14" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                        <path d="M7.60938 3.39062C9.57812 3.39062 11.2031 5.01562 11.2031 6.98438C11.2031 8.98438 9.57812 10.5781 7.60938 10.5781C5.60938 10.5781 4.01562 8.98438 4.01562 6.98438C4.01562 5.01562 5.60938 3.39062 7.60938 3.39062ZM7.60938 9.32812C8.89062 9.32812 9.92188 8.29688 9.92188 6.98438C9.92188 5.70312 8.89062 4.67188 7.60938 4.67188C6.29688 4.67188 5.26562 5.70312 5.26562 6.98438C5.26562 8.29688 6.32812 9.32812 7.60938 9.32812ZM12.1719 3.26562C12.1719 2.79688 11.7969 2.42188 11.3281 2.42188C10.8594 2.42188 10.4844 2.79688 10.4844 3.26562C10.4844 3.73438 10.8594 4.10938 11.3281 4.10938C11.7969 4.10938 12.1719 3.73438 12.1719 3.26562ZM14.5469 4.10938C14.6094 5.26562 14.6094 8.73438 14.5469 9.89062C14.4844 11.0156 14.2344 11.9844 13.4219 12.8281C12.6094 13.6406 11.6094 13.8906 10.4844 13.9531C9.32812 14.0156 5.85938 14.0156 4.70312 13.9531C3.57812 13.8906 2.60938 13.6406 1.76562 12.8281C0.953125 11.9844 0.703125 11.0156 0.640625 9.89062C0.578125 8.73438 0.578125 5.26562 0.640625 4.10938C0.703125 2.98438 0.953125 1.98438 1.76562 1.17188C2.60938 0.359375 3.57812 0.109375 4.70312 0.046875C5.85938 -0.015625 9.32812 -0.015625 10.4844 0.046875C11.6094 0.109375 12.6094 0.359375 13.4219 1.17188C14.2344 1.98438 14.4844 2.98438 14.5469 4.10938ZM13.0469 11.1094C13.4219 10.2031 13.3281 8.01562 13.3281 6.98438C13.3281 5.98438 13.4219 3.79688 13.0469 2.85938C12.7969 2.26562 12.3281 1.76562 11.7344 1.54688C10.7969 1.17188 8.60938 1.26562 7.60938 1.26562C6.57812 1.26562 4.39062 1.17188 3.48438 1.54688C2.85938 1.79688 2.39062 2.26562 2.14062 2.85938C1.76562 3.79688 1.85938 5.98438 1.85938 6.98438C1.85938 8.01562 1.76562 10.2031 2.14062 11.1094C2.39062 11.7344 2.85938 12.2031 3.48438 12.4531C4.39062 12.8281 6.57812 12.7344 7.60938 12.7344C8.60938 12.7344 10.7969 12.8281 11.7344 12.4531C12.3281 12.2031 12.8281 11.7344 13.0469 11.1094Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Single pagination */}
                                <div className="relative single-pagination mt-16 p-8 border border-neutral-300 dark:border-neutral-dark-300 rounded-xl text-lg font-bold text-neutral-950 dark:text-neutral-dark-950 leading-relaxed max-w-[850px]">
                                    <div className="flex flex-col md:flex-row justify-between gap-8">
                                        <div className="prev flex gap-4  hover-up">
                                            <Link href="/#" className="text-neutral-950 rounded-full w-12 h-12 min-w-12 bg-primary-light-950 dark:bg-primary-dark-200 flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} viewBox="0 0 18 15" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                    <path d="M17.4922 7.49023C17.4922 8.19336 16.9453 8.74023 16.2812 8.74023H4.28906L8.39062 12.8809C8.89844 13.3496 8.89844 14.1699 8.39062 14.6387C8.15625 14.873 7.84375 14.9902 7.53125 14.9902C7.17969 14.9902 6.86719 14.873 6.63281 14.6387L0.382812 8.38867C-0.125 7.91992 -0.125 7.09961 0.382812 6.63086L6.63281 0.380859C7.10156 -0.126953 7.92188 -0.126953 8.39062 0.380859C8.89844 0.849609 8.89844 1.66992 8.39062 2.13867L4.28906 6.24023H16.2812C16.9453 6.24023 17.4922 6.82617 17.4922 7.49023Z" />
                                                </svg>
                                            </Link>
                                            <Link href="/single">Fashionable Bytes: Blending Style with Tech Savvy</Link>
                                        </div>
                                        <div className="next flex gap-4 text-end hover-up">
                                            <Link href="/single">Living the Art-Tech Dream: My Multifaceted Life</Link>
                                            <Link href="/#" className="text-neutral-950 rounded-full w-12 h-12 min-w-12 bg-primary-light-950  dark:bg-primary-dark-200 flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} viewBox="0 0 18 15" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                    <path d="M0 7.49023C0 8.19336 0.546875 8.74023 1.21094 8.74023H13.2031L9.10156 12.8809C8.59375 13.3496 8.59375 14.1699 9.10156 14.6387C9.33594 14.873 9.64844 14.9902 9.96094 14.9902C10.3125 14.9902 10.625 14.873 10.8594 14.6387L17.1094 8.38867C17.6172 7.91992 17.6172 7.09961 17.1094 6.63086L10.8594 0.380859C10.3906 -0.126953 9.57031 -0.126953 9.10156 0.380859C8.59375 0.849609 8.59375 1.66992 9.10156 2.13867L13.2031 6.24023H1.21094C0.546875 6.24023 0 6.82617 0 7.49023Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="v-divider w-64 h-[1px] md:h-12 md:w-[1px] bg-neutral-300 dark:bg-neutral-dark-300 absolute top-1/2 left-10 md:left-1/2 md:top-10">
                                    </div>
                                </div>
                                {/* Single Comment form */}
                                <div className="relative single-comment-form mt-20 max-w-[850px]">
                                    <h3 className="font-bold text-5xl mb-8 text-neutral-950 dark:text-neutral-dark-950">Leave <span className="font-light"> a reply</span></h3>
                                    <form >
                                        <div className="grid md:grid-cols-3 gap-4 mb-4 md:mb-0">
                                            <input type="text" placeholder="Name" className="input-default" />
                                            <input type="email" placeholder="Email" className="input-default" />
                                            <input type="text" placeholder="Subject" className="input-default" />
                                        </div>
                                        <textarea placeholder="Comment" className="textarea-default" />
                                        <div className="flex items-center mb-8">
                                            <input type="checkbox" id="save-info" className="w-4 h-4 accent-primary-light-950  bg-primary-light-950 text-neutral-0  rounded cursor-pointer mr-2" />
                                            <label htmlFor="save-info" className="text-sm text-neutral-950 dark:text-neutral-dark-950">Save
                                                my name, email, and website in this browser for the next time</label>
                                        </div>
                                        <button type="submit" className="group btn bg-primary-light-950 dark:bg-primary-dark-950 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 flex gap-2 items-center">
                                            <span>Submit</span>
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
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Single 1 Section 3 */}
                <section className="relative py-8 lg:py-12 lg:mb-16">
                    <div className="container px-4">
                        <h3 className="heading-3 text-left mb-8 lg:mb-12 leading-none"><span className="font-light">Related</span> Posts
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                            <div className="flex-col justify-start items-start gap-5 inline-flex hover-up border-2 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden">
                                <Link href="/single" className="rounded-2xl overflow-hidden max-h-[180px]">
                                    <img src="/assets/imgs/pages/img-02.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex px-4 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Trending</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                June 8, 2024</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold leading-snug item-link" href="/single">Globetrotting in Style: A Journey Through My Lens</Link></h3>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-5 inline-flex hover-up border-2 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden">
                                <Link href="/single" className="rounded-2xl overflow-hidden max-h-[180px]">
                                    <img src="/assets/imgs/pages/img-03.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex px-4 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Trending</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                June 8, 2024</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold leading-snug item-link" href="/single">Globetrotting in Style: A Journey Through My Lens</Link></h3>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-5 inline-flex hover-up border-2 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden">
                                <Link href="/single" className="rounded-2xl overflow-hidden max-h-[180px]">
                                    <img src="/assets/imgs/pages/img-04.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex px-4 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Trending</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                June 8, 2024</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold leading-snug item-link" href="/single">Globetrotting in Style: A Journey Through My Lens</Link></h3>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-5 inline-flex hover-up border-2 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden">
                                <Link href="/single" className="rounded-2xl overflow-hidden max-h-[180px]">
                                    <img src="/assets/imgs/pages/img-05.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex px-4 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Trending</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                June 8, 2024</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold leading-snug item-link" href="/single">Globetrotting in Style: A Journey Through My Lens</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
