import { categories } from "@/app/components/CateFile";
import Related from "@/app/components/Related";


export default function Page({ params }) {
  const detailProduct = categories.find(detail => detail.name.split(' ').join('').toLowerCase() === params.odin);

  return (
    <div>
      <h2 className="text-[20px] text-pretty font-semibold text-gray-600 md:px-28 sm:px-4 px-28 pt-10">{detailProduct.name}</h2>
      {detailProduct.class && (
        <Related
          currentProductName={detailProduct.name}
          currentProductClasses={[detailProduct.class]}
        />
      )}
    </div>
  );
}
