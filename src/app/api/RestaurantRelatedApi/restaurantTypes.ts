export interface RestaurantItem {
    itemid: string;
    restaurantid: string;
    itemname: string;
    itemdescription: string;
    baseprice: number;
    discount: number;
    available: boolean;
    status: string;
    rating: number;
    createdat: string;
    updatedat: string;
    itemsImage: string;
    itemImages: string[];
  }
  
  export interface FoodItem {
    id: string;
    name: string;
    category: string;
    price: string;
    available: boolean;
    imgSrc: string;
  }
  
  export interface FoodDetail {
    id: string;
    name: string;
    category: string;
    price: string;
    available: boolean;
    imgSrc: string;
    ingredients: string;
    nutrition: string;
  }