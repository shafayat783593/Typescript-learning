// utility 



type Product = {
    id:number;
    name:string;
    price:string;
    stock:number
    color?:string
}


type productSummary = Pick<Product , "id"|"name"|"price">


type ProductWithoutStock = Omit<Product, "stock"|"color">

type ProductWithColor = Required<Product>

const products : ProductWithColor = {
    id:222,
    name:"Mouse",
    price:"20",
    stock:100
}


type OptionProduct = Partial<Product>


type ProductReadonly = Readonly<Product>



const emtyObj: Record<string,unknown>={}




