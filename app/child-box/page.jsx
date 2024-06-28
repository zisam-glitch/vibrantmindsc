import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default async function About() {
  return (
    <>
      <Layout>
        <section className="w-full">
          <img
            className="w-full"
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1719533196/Copy_of_Blue_Print_for_webpage_1366_x_440_px_2_unxqtb.png"
            alt=""
          />
        
        </section>
        <section className="container px-10 pb-32 pt-20">
        <img
        className="w-full"
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1719533453/Copy_of_Blue_Print_for_webpage_1000_x_754_px_5_jrbcd1.png"
            alt=""
          />
        </section>
      </Layout>
    </>
  );
}
