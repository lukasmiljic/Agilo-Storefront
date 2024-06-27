'use client';

import { useRouter } from "next/navigation";

const ProductCard = ({
  id,
  title,
  image,
}: {
  id: number;
  title: string;
  image: string;
}) => {
  const router = useRouter();

  return (
    <div
      className="relative flex aspect-square cursor-pointer bg-slate-100 transition-transform hover:-translate-y-1"
      onClick={() => router.push(`/products/${id}`)}
    >
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="max-w-9/10 absolute bottom-2 left-3 truncate">{title}</p>
    </div>
  );
};

export default ProductCard;
