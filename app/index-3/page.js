import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/home3/Hero"
import Section1 from "@/components/sections/home3/Section1"
import Section2 from "@/components/sections/home3/Section2"
import Section3 from "@/components/sections/home3/Section3"
import Section4 from "@/components/sections/home3/Section4"
export default async function Home3() {
    return (
        <>
            <Layout headerStyle={2} noHeaderBg>
                <Hero />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </Layout>
        </>
    )
}
