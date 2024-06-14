export default function Hero() {
  return (
    <>
      <div className="header-bg absolute top-0 left-0 right-0 -z-50 w-full h-[1100px] bg-gradient-to-b from-primary-light-950/15 to-transparent max-h-[1100px] overflow-hidden"></div>
      <section className="relative pt-20 lg:pt-24">
        <div className="container px-4">
          <h3 className="text-3xl text-center md:text-5xl text-neutral-950 dark:text-neutral-dark-950 font-light z-10 relative">
            ¡Somos <span className="font-bold">bilingües!</span>
          </h3>
          <h1 className="heading-1  text-center m-0">
            Vibrant Minds <br/> {""}
            <span className="font-light">Curriculum </span>
          </h1>
        </div>
      </section>
    </>
  );
}
