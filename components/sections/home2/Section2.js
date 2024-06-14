import BlogPost from "@/components/blog/BlogPost";
import Link from "next/link";

export default function Section2() {
  return (
    <>
      <section className="relative pt-20 py-10 lg:pt-12 lg:pb-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-[64px] gap-y-[65px] ">
              <a href="/parents-curriculum">
                <div className="relative cursor-pointer overflow-hidden group rounded-xl shadow-lg">
                  <div>
                    <img
                      className="w-full object-cover h-[460px] transform transition-transform duration-300 scale-100 group-hover:scale-105"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718382558/Untitled_design_21_bto7kz.png"
                      alt="Your Image"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-95 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h2 className="text-neutral-0 text-center text-6xl font-bold">
                      Providers <br /> Curriculum
                    </h2>
                  </div>
                </div>
              </a>
              <a href="/providers-curriculum">
                <div className="relative cursor-pointer overflow-hidden group rounded-xl shadow-lg">
                  <div>
                    <img
                      className="w-full object-cover h-[460px] transform transition-transform duration-300 scale-100 group-hover:scale-105"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718382709/Untitled_design_20_gpcgr6.png"
                      alt="Your Image"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-95 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h2 className="text-neutral-0 text-center text-6xl font-bold">
                      Day Care <br /> Providers Only
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
