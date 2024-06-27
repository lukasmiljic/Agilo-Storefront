const ProductCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="relative flex aspect-square cursor-pointer bg-slate-100 transition-transform hover:-translate-y-1">
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="max-w-9/10 absolute bottom-2 left-3">{title}</p>
    </div>
  );
};

export default ProductCard;
