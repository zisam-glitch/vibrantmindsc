import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/home1/Hero"
import Section1 from "@/components/sections/home1/Section2"
import Section4 from "@/components/sections/home1/Section4"
import Section3 from "@/components/sections/home1/Section3"
export default async function Home2() {
    return (
        <>
            <Layout noHeaderBg>
                <Hero />
                <Section3 />
            </Layout>
        </>
    )
}
