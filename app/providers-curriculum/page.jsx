import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default async function About() {
  return (
    <>
      <Layout>
        <section className="w-full">
          <img
            className="w-full"
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1719532352/Copy_of_Blue_Print_for_webpage_1366_x_440_px_1_blnuot.png"
            alt=""
          />
        
        </section>
        <section className="container px-10 py-20">
        <img
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1719532974/Copy_of_Blue_Print_for_webpage_1366_x_440_px_1366_x_977_px_asrbj1.png"
            alt=""
          />
        </section>
      </Layout>
    </>
  );
}
