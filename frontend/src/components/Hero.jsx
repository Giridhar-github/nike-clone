import { Link } from "react-router-dom"
import TwoGrid from "./TwoGrid"
import trendingImage1 from '../assets/trending1.jpg'
import trendingImage2 from '../assets/trending2.jpg'
import latestImage from '../assets/latest.jpg'
import OneGrid from "./OneGrid"
import AddOn from "./AddOn"
import featuredImage1 from '../assets/featured1.jpg'
import featuredImage2 from '../assets/featured2.jpg'
import gearUpImage from '../assets/gearUp.jpg'
import dontMissImage from '../assets/dontMiss.jpg'
import mensImage from '../assets/mens.jpg'
import womensImage from '../assets/womens.jpg'
import kidsImage from '../assets/kids.jpg'
import ThreeGrid from "./ThreeGrid"

const Hero = () => {
    const trending1 = {
        title: "Trending",
        bgImage: trendingImage1,
        subtitle: "Shop the Retro Edit",
        buttonTitle: "Shop the Look"
    }
    const trending2 = {
        title: "Trending",
        bgImage: trendingImage2,
        subtitle: "On-Trend Retro Sneakers",
        buttonTitle: "Shop Sneakers"
    }
    const latest = {
        title: "The Latest",
        bgImage: latestImage,
    }
    const featured1 = {
        title: "Featured",
        bgImage: featuredImage1,
        subtitle: "Complete The Look",
        buttonTitle: "Shop"
    }
    const featured2 = {
        title: "Featured",
        bgImage: featuredImage2,
        addon: "Nike Tech Hera",
        subtitle: "Step Up Your Style",
        buttonTitle: "Shop"
    }
    const gearUp = {
        title: "Gear Up",
        bgImage: gearUpImage,
    }
    const addOnData1 = {
        miniTitle: "Nike InfinityRN 4",
        title: "YOUR SUPPORT SYSTEM",
        subtitle: "All-new ReactX foam, stretchy Flyknit and a wider midsole offer a system of support that moves you smoothly through every stride",
        buttonTitle1: "Shop"
    }
    const addOnData2 = {
        title: "NIKE TECH",
        subtitle: "Engineered to the Exact Specifications of Championship Athletes.",
        buttonTitle1: "Suit Up",
        buttonTitle2: "Shop Lifestyle"
    }
    const addOnData3 = {
        title: "NIKE METCON 9",
        subtitle: "Durability and stability for your strength training.",
        buttonTitle1: "Shop"
    }
    const dontMiss = {
        title: "Don't Miss",
        bgImage: dontMissImage,
    }
    const addOnData4 = {
        miniTitle: "Jordan Apparel",
        title: "MATCHING SETS",
        subtitle: "Keep the same energy with matching fits for every occasion.",
        buttonTitle1: "Shop"
    }
    const mensEssentials = {
        title: "The Essentials",
        bgImage: mensImage,
        buttonTitle: "Men's"
    }
    const womensEssentials = {
        title: "The Essentials",
        bgImage: womensImage,
        buttonTitle: "Women's"
    }
    const kidsEssentials = {
        title: "The Essentials",
        bgImage: kidsImage,
        buttonTitle: "Kid's"
    }
    const icons = ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95', 'Air Max 97', 'Air Max 270', 'Air Max 720', 'All Air Max', 'Vapormax']
    const shoes = ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes', 'Basketball Shoes', 'Football Shoes', 'Hym & Training Shoes', 'Lifestyle Shoes']
    const clothing = ['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops', 'Jackets', 'Compression & Nike Pro', 'Trousers & Leggings', 'Shorts']
    const kids = ['Infant & Toddler Shoes', 'Kids Shoes', 'Kids Jordan Shoes', 'Kids Basketball Shoes', 'Kids Running Shoes', 'Kids Clothing', 'Kids Backpacks', 'Kids Socks']
    return (
        <div className='block'>
            <div className="flex justify-center flex-col items-center bg-zinc-200">
                <p className="font-normal text-lg">Hello Nike App</p>
                <p className="font-semibold text-xs mb-2">Download the app to access everything Nike. <Link to={''}>Get Your Great</Link></p>
            </div>
            <div className="w-full flex justify-center mb-16">
                <img className="h-[350px] md:h-[950px]" src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <AddOn addOnData={addOnData1} />
            <TwoGrid grid1={trending1} grid2={trending2} />
            <OneGrid gridData={latest} />
            <AddOn addOnData={addOnData2} />
            <TwoGrid grid1={featured1} grid2={featured2} />
            <OneGrid gridData={gearUp} />
            <AddOn addOnData={addOnData3} />
            <OneGrid gridData={dontMiss} />
            <AddOn addOnData={addOnData4} />
            <ThreeGrid grid1={mensEssentials} grid2={womensEssentials} grid3={kidsEssentials} />
            <div className="hidden md:mb-40 md:flex md:gap-x-16 md:justify-center md:h-48 md:overflow-hidden hover:overflow-visible md:transition md:ease-in-out hover:translate-y-0 hover:delay-300">
                <div className="flex flex-col gap-y-3">
                    <p className="font-bold mb-5">Icons</p>
                    {icons.map((item) => <Link key={} to={''}>{item}</Link>)}
                </div>
                <div className="flex flex-col gap-y-3">
                <p className="font-bold mb-5">Shoes</p>
                    {shoes.map(shoe => <Link key={} to={''}>{shoe}</Link>)}
                </div>
                <div className="flex flex-col gap-y-3">
                <p className="font-bold mb-5">Clothing</p>
                    {clothing.map(cloth => <Link key={} to={''}>{cloth}</Link>)}
                    </div>
                <div className="flex flex-col gap-y-3">
                <p className="font-bold mb-5">Kids'</p>
                    {kids.map(kid=><Link key={} to={''}>{kid}</Link>)}
                </div>
            </div>
        </div>
    )
}

export default Hero