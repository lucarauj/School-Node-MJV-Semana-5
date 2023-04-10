import { Product } from "../models/product.model";
import productRepository from "../repositories/product.repository";

class ProductsService {

    getAll() {
        return productRepository.getAll();
    }

    getById(id: number) {        
        return productRepository.getById(id);
    }

    create(product: typeof Product) {
        return productRepository.create(product);
    }

    remove(id: number) {        
        return productRepository.remove(id);
    }

    update(id: number, product: Partial<typeof Product>) {
        return productRepository.update(id, product);
    }
}

export default new ProductsService();