import Hero from "../componentes/Hero"
import HorseGrid from "../componentes/HorseGrid";

const Home = () => {
    return (
        <div className="min-h-screen bg-[#f5f5dc]">
            <Hero />
            <div id="catalogo">
                <HorseGrid />
            </div>
        </div>
    )
}
export default Home