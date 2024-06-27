import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/home2/Hero"
import Section1 from "@/components/sections/home2/Section1"
import Section1s from "@/components/sections/home1/Section1.jsx"
import Section2 from "@/components/sections/home2/Section2"
import Section3 from "@/components/sections/home1/Section2"
import Section4 from "@/components/sections/home2/Section4"

export default async function Home2() {
    return (
        <>
            <Layout noHeaderBg>
                {/* <Hero /> */}
                <Section1 />
                <Section1s />
                {/* <Section2 /> */}
                

            </Layout>
        </>
    )
}
