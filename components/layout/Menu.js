import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
      <ul className="xl:flex hidden">
        <li className="relative group">
          <Link className="menu-item px-6" href="/">
            Home
          </Link>
        </li>
        <li className="relative group">
          <Link className="menu-item px-6" href="/providers-curriculum">
            Providers Curriculum
          </Link>
        </li>
        <li className="relative group">
          <Link className="menu-item px-6" href="/parents-curriculum">
            Parents Curriculum
          </Link>
        </li>
        <li className="group">
          <Link href="/blogs" className="menu-item px-6 group-hover:border-white">
            Blog
          </Link>
          {/* MEGA MENU CONTENT */}
          {/* <div className="w-full px-12 py-12 rounded-2xl bg-neutral-0 dark:bg-neutral-dark-0 shadow-sm absolute top-full left-0 mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
            <h3 className="text-5xl mb-8 text-neutral-950 dark:text-neutral-dark-950">
              Featured <span className="font-bold">Posts</span>
            </h3>
            <div className="grid grid-cols-3 w-full gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex gap-6 content-center hover-up">
                  <div className="max-w-28">
                    <Link
                      className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                      href="/single"
                    >
                      <img src="/assets/imgs/pages/thumb-01.png" alt="ideko" />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                      href="/single"
                    >
                      Beyond the Pixels: My Art-Tech Lifestyle Journey
                    </Link>
                    <p className="text-sm font-medium text-neutral-700">
                      2 min read - June 8, 2024
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 content-center hover-up">
                  <div className="max-w-28">
                    <Link
                      className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                      href="/single"
                    >
                      <img src="/assets/imgs/pages/thumb-02.png" alt="ideko" />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                      href="/single"
                    >
                      Globetrotting in Style: A Journey Through My Lens
                    </Link>
                    <p className="text-sm font-medium text-neutral-700">
                      2 min read - June 8, 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-6 content-center hover-up">
                  <div className="max-w-28">
                    <Link
                      className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                      href="/single"
                    >
                      <img src="/assets/imgs/pages/thumb-03.png" alt="ideko" />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                      href="/single"
                    >
                      Canvas and Keyboard: An Art-Tech Affair
                    </Link>
                    <p className="text-sm font-medium text-neutral-700">
                      2 min read - June 8, 2024
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 content-center hover-up">
                  <div className="max-w-28">
                    <Link
                      className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                      href="/single"
                    >
                      <img src="/assets/imgs/pages/thumb-04.png" alt="ideko" />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                      href="/single"
                    >
                      Beyond the Pixels: My Art-Tech Lifestyle Journey
                    </Link>
                    <p className="text-sm font-medium text-neutral-700">
                      2 min read - June 8, 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-6 content-center hover-up">
                  <div className="max-w-28">
                    <Link
                      className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                      href="/single"
                    >
                      <img src="/assets/imgs/pages/thumb-05.png" alt="ideko" />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                      href="/single"
                    >
                      Chasing Sunsets: A Lifestyle in Living Color
                    </Link>
                    <p className="text-sm font-medium text-neutral-700">
                      2 min read - June 8, 2024
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 content-center hover-up">
                  <div className="max-w-28">
                    <Link
                      className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                      href="/single"
                    >
                      <img src="/assets/imgs/pages/thumb-06.png" alt="ideko" />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                      href="/single"
                    >
                      Exploring Life's Canvas: Style, Tech, and Beyond
                    </Link>
                    <p className="text-sm font-medium text-neutral-700">
                      2 min read - June 8, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* END MEGA MENU CONTENT */}
        </li>
        <li className="relative">
          <Link href="/contact" className="menu-item px-6">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
