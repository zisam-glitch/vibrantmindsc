import { FaDownload } from "react-icons/fa6";

export default function Section4() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="container px-4">
        <div className="flex flex-col justify-center justify-items-center align-center mb-16">
          <h3 className="heading-2 text-center mb-8 leading-tight">
            Download
            <span className="font-light"> our Free </span>May{" "}
            <span className="font-light">Activity</span>{" "}
          </h3>
          <p className="mb-12 text-center mx-auto w-2/3 text-neutral-700 text-md font-regular leading-relaxed dark:text-neutral-dark-300">
            Each month we will provide a FREE downloadable activity for you to
            implement at home with your child. Our treat to you guys! Please
            subscribe to receive emails and hear about all of the fun surprises
            we have in store for you and your little ones!
          </p>
          <div>
            <form className="max-w-full md:w-[38%] mx-auto overflow-hidden">
              <div className="flex flex-col md:flex-row mb-4 md:bg-neutral-0 dark:bg-neutral-dark-200 rounded-full p-1 md:border border-neutral-300 dark:border-neutral-dark-300">
                <input
                  className="cursor-default focus:outline-none transition duration-200 py-4 bg-neutral-0 dark:bg-neutral-dark-200 rounded-full pl-6 w-full mb-2 md:mb-0 md:border-0 border border-neutral-300 dark:border-neutral-dark-300 "
                  type="text"
                  placeholder="ShapeSorting Mail Adventure (pdf)"
                  readOnly
                />
                <a
                  target="_blank"
                  href="https://img1.wsimg.com/blobby/go/1b32361f-a045-472e-96a6-15577fbec600/downloads/ShapeSorting%20Mail%20Adventure.pdf?ver=1717518670069"
                  download
                  className="w-full sm:w-auto h-14 py-4 px-6 rounded-full bg-neutral-950 transition duration-200 flex items-center justify-center gap-2"
                >
                  <FaDownload fontSize={18} color="white" />
                  <span className="text-neutral-0 font-medium text-xl">
                    Download
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
