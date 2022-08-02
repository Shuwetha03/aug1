export class Product {

    constructor(public id : number,
        public sku : string,
        public name: string,
        public description: string,
        public unitprice: string,
        public url: string,
        public active : number,
        public unitsinstock: number, 
        public datecreated: Date,
        public lastupdated : Date,
        public categoryid: number
    ){
        
    }

}
