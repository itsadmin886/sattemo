interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

const ProductCard = ({ image, name, description }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
