import ProductCard from "./ProductCard";
import sulguniImg from "@/assets/products/sulguni.jpg";
import smokedSulguniImg from "@/assets/products/smoked-sulguni.jpg";
import gudaImg from "@/assets/products/guda.jpg";
import imeruliImg from "@/assets/products/imeruli.jpg";
import nadughiImg from "@/assets/products/nadughi.jpg";
import khachoImg from "@/assets/products/khacho.jpg";
import matsoniImg from "@/assets/products/matsoni.jpg";
import butterImg from "@/assets/products/butter.jpg";
import erboImg from "@/assets/products/erbo.jpg";

const products = [
  {
    image: sulguniImg,
    name: "სულგუნი",
    description: "ტრადიციული ქართული ყველი, ნაზი და ელასტიური ტექსტურით",
  },
  {
    image: smokedSulguniImg,
    name: "შებოლილი სულგუნი",
    description: "ბუნებრივად შებოლილი სულგუნი უნიკალური არომატით და გემოთი",
  },
  {
    image: gudaImg,
    name: "ქართული ყველი (გუდა)",
    description: " ყველი ინტენსიური და მდიდარი გემოთი",
  },
  {
    image: imeruliImg,
    name: "იმერული ყველი",
    description: "რბილი და კრემისებრი ტექსტურის ყველი, იდეალური ხაჭაპურისთვის",
  },
  {
    image: nadughiImg,
    name: "ნადუღი",
    description: "ნაზი და კრემისებრი რძის პროდუქტი, მდიდარი პროტეინით",
  },
  {
    image: khachoImg,
    name: "ხაჭო",
    description: "ახალი ხაჭო, იდეალური საუზმისთვის ან ცომეულში გამოსაყენებლად",
  },
  {
    image: matsoniImg,
    name: "მაწონი",
    description: "ტრადიციული ქართული მაწონი პრობიოტიკური თვისებებით",
  },
  {
    image: butterImg,
    name: "კარაქი",
    description: "ნატურალური კარაქი, დამზადებული ახალი რძის ნაღებისგან",
  },
  {
    image: erboImg,
    name: "ერბო",
    description: "გამდნარი კარაქი ტრადიციული რეცეპტით, იდეალური სამზარეულოში",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ჩვენი პროდუქცია
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ყველა პროდუქტი მზადდება ხელით, ტრადიციული მეთოდებით და მხოლოდ ნატურალური ინგრედიენტებით
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
