import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Regenerating ...");
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  if (!data) {
    redirect: {
      destination: "/";
    }
  }
  if (data.products.length === 0) {
    return {
      notfound: true,
    };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
