import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

export const ProductsTable = ({products}) => {

    const tableColumns = ["id","title","description","category","price"];
    return (
        <div className="w-full h-full bg-[#282429ee] flex flex-col justify-center-safe items-center-safe
        font-bold text-2xl rounded-sm gap-2 p-1.5">
            <p className="mt-2">
                <span>!!! </span> {products.length} PRODUCTS <span> !!!</span>
            </p>
            <Table className="bg-[#0a060d95] rounded-md border">
                <Thead>
                    <Tr className="capitalize gap-x-4">
                        {
                            tableColumns.map(
                                (column,index) => <Th key={index} className="border-[#e6e2e2] border-2 p-3">
                                {column}
                            </Th>
                            )
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        products.map((product) => 
                            <Tr key={product.id}>
                                <Td className="[&>.tdBefore]:hidden border-[#e6e2e2] border-2 p-1.5"> 
                                    {product.id}
                                </Td>
                                <Td className="[&>.tdBefore]:hidden border-[#e6e2e2] border-2 p-1.5">
                                    {product.title}
                                </Td>
                                <Td className="[&>.tdBefore]:hidden border-[#e6e2e2] border-2 p-1.5">
                                    {product.description}
                                </Td>
                                <Td className="[&>.tdBefore]:hidden border-[#e6e2e2] border-2 p-1.5">
                                    {product.category}
                                </Td>
                                <Td className="[&>.tdBefore]:hidden border-[#e6e2e2] border-2 p-1.5">
                                    ${product.price}
                                </Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
    </div>
    );
};
