import Layout from "./Components/Common/Layout";
import Hero from "./Components/Hero/default";

function App() {
  return (
    <>
      <Layout>
        <Hero />
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
