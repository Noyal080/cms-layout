import Layout from "./Components/Common/Layout";
import Hero from "./Components/Hero/default";
import BrandSlider from "./Components/Slider/defaultSlider";
import { InfiniteSlider } from "./Components/Slider/Slider";

function App() {
  const brands = [
    {
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
    },
    {
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    },
    {
      name: "Puma",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Puma_AG.svg/1200px-Puma_AG.svg.png",
    },
    {
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    },
    {
      name: "Puma",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Puma_AG.svg/1200px-Puma_AG.svg.png",
    },
  ];
  return (
    <>
      <Layout>
        <Hero />

        {/* <BrandSlider title="Trusted Brands" brands={brands} />
         */}
        <InfiniteSlider brands={brands} />

        <h1 className="text-3xl font-bold mb-4">
          Welcome to our E-Commerce Store
        </h1>
        <p className="mb-4">Find the best products at great prices!</p>
        {/* Add more content here */}
      </Layout>
    </>
  );
}

export default App;
