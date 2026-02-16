import { productsApi } from "@/lib/products";
import Link from "next/link";
import { ProductsTable } from "@/components/products/ProductsTable";

export const revalidate = 60; //ISR After every 60 seconds

export default async function Products({}) {

    const data = await productsApi.get10Products();
    return (
        <section className="w-full h-[80%] bg-[#36b752be] flex justify-center-safe items-center-safe border-2
        rounded-md flex-col-reverse gap-2 overflow-hidden p-3">

            <Link href={'/'} className="rounded-md px-6 py-3 text-shadow-white border-2 bg-[#82e928cc]">
                GO TO HOME
            </Link>

            <ProductsTable products={data}/>
        </section>
    )
};
