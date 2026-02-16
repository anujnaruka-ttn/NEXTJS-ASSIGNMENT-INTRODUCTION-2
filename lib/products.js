class ProductsApi {
    constructor(){
        this.baseUrl = "https://dummyjson.com/products";
    }

    async get10Products(){
        const response = await fetch(this.baseUrl);
        if(!response.ok) throw new Error('Failed to fetch products.');
        const apiData = await response.json();
        return apiData.products.slice(0,10);
    }
}

export const productsApi = new ProductsApi();
