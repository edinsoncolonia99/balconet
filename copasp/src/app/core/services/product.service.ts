import { Injectable} from '@angular/core';
import { product } from '../models/product.model'


@Injectable({
    providedIn: 'root'
})

export class productservice{
    public readonly products:product[];

    constructor(){
        this.products = this.getProduct();
    }

    getContactByType(type: string): product[] {
        return this.products.filter((item: { tipo: string }) => item.tipo === type);
      }

    getProduct(): product[] {
        return[
            new product('norealce', '1', 'SUIZA', "assets/productos/IMG_1202.jpeg", 'producto 1'),
            new product('realce', '2', 'ITALIA', "assets/productos/IMG_1202.jpeg", 'producto 2'),
            new product('norealce', '3', 'ESPAÑA', "assets/productos/IMG_1202.jpeg", 'producto 3'),
            new product('realce', '4', 'FRANCIA',"assets/productos/IMG_1202.jpeg", 'producto 4'),
            new product('realce', '4', 'INGLATERRA',"assets/productos/IMG_1202.jpeg", 'producto 5'),
            new product('norealce', '4', 'RUSIA',"assets/productos/IMG_1202.jpeg", 'producto 6'),
            new product('norealce', '4', 'EEUU',"assets/productos/IMG_1202.jpeg", 'producto 7'),
            new product('realce', '4', 'REPUBLICA',"assets/productos/IMG_1202.jpeg", 'producto 8'),
            new product('realce', '4', 'INGLATERRA',"assets/productos/IMG_1202.jpeg", 'producto 5'),
            new product('norealce', '4', 'RUSIA',"assets/productos/IMG_1202.jpeg", 'producto 6'),
            new product('norealce', '4', 'EEUU',"assets/productos/IMG_1202.jpeg", 'producto 7'),
            new product('realce', '4', 'REPUBLICA',"assets/productos/IMG_1202.jpeg", 'producto 8'),
            new product('realce', '4', 'INGLATERRA',"assets/productos/IMG_1202.jpeg", 'producto 5'),
            new product('norealce', '4', 'RUSIA',"assets/productos/IMG_1202.jpeg", 'producto 6'),
            new product('norealce', '4', 'EEUU',"assets/productos/IMG_1202.jpeg", 'producto 7'),
            new product('realce', '4', 'REPUBLICA',"assets/productos/IMG_1202.jpeg", 'producto 8'),
        ]
    }

    
}


