import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default async function Contact() {
  return (
    <>
      <Layout>
        {/* <section className="py-12">
          <div className="container px-4">
            <div className="flex flex-col gap-8 items-center justify-center text-center">
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
                  Contact Us
                </Link>
              </div>
              <h1 className="heading-1 mb-0">
                Let’s Stay <span className="font-light">Connected</span>
              </h1>
              <p className="text-2xl font-medium text-center text-neutral-700 dark:text-neutral-dark-700 lg:max-w-[715px]">
                Let us know how many kids you have, along with any questions you
                may have.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container px-4">
            <div className="max-w-[850px] mx-auto bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl p-8 md:p-12 lg:p-20 border border-neutral-200 dark:border-neutral-dark-200">
              <h4 className="text-neutral-950 dark:text-neutral-dark-950 text-3xl font-bold mb-8">
                <span className="font-light">Get In</span> Touch
              </h4>
              <form>
                <div className="grid md:grid-cols-3 gap-4 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-default"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-default"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input-default"
                  />
                </div>
                <textarea placeholder="Message" className="textarea-default" />
                <div className="flex items-center mb-8">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="w-4 h-4 accent-primary-light-950  bg-primary-light-950 text-neutral-0  rounded cursor-pointer mr-2"
                  />
                  <label
                    htmlFor="save-info"
                    className="text-sm text-neutral-950 dark:text-neutral-dark-950"
                  >
                    Save my name, email, and website in this browser for the
                    next time
                  </label>
                </div>
                <button
                  type="submit"
                  className="group btn bg-primary-light-950 dark:bg-primary-dark-950 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 flex gap-2 items-center"
                >
                  <span>Send Message</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    className="fill-neutral-950 dark:fill-neutral-dark-950 group-hover:translate-x-1 transition-all duration-300"
                  >
                    <g clipPath="url(#clip0_253_4238)">
                      <path d="M23.6164 11.0663L14.9491 2.39884C14.7017 2.15143 14.372 2.01562 14.0204 2.01562C13.6684 2.01562 13.3388 2.15162 13.0914 2.39884L12.3045 3.18596C12.0573 3.43298 11.9211 3.76293 11.9211 4.11473C11.9211 4.46634 12.0573 4.80741 12.3045 5.05443L17.3608 10.1219H1.29657C0.572288 10.1219 0 10.6889 0 11.4134V12.5262C0 13.2507 0.572288 13.8748 1.29657 13.8748H17.4182L12.3047 18.9706C12.0575 19.218 11.9213 19.539 11.9213 19.8908C11.9213 20.2422 12.0575 20.5679 12.3047 20.8151L13.0916 21.5997C13.339 21.8471 13.6686 21.9819 14.0206 21.9819C14.3722 21.9819 14.7019 21.8453 14.9493 21.5979L23.6166 12.9307C23.8646 12.6825 24.001 12.3512 24 11.999C24.0008 11.6456 23.8646 11.3141 23.6164 11.0663Z"></path>
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
        </section> */}
        <section className="container px-10 pb-32 pt-20">
          <img
            className="w-full"
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1719533690/Copy_of_Blue_Print_for_webpage_1000_x_754_px_6_hcn6yq.png"
            alt=""
          />
        </section>
      </Layout>
    </>
  );
}
