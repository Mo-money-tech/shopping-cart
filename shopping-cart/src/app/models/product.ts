export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: String;

    constructor(id, name, description = '', price = 0, imageUrl = 'https://i.pinimg.com/736x/96/f0/fb/96f0fb51d0cffe958989f6c05f382942--nike-air-jordan-retro-air-jordan-shoes.jpg') {

        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl

    }
}
