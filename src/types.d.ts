type BottomTabParamList = {
  HOME_TAB: undefined;
  PROFILE_TAB: undefined;
};




interface ItemAttributes {
  volume?: number;
  weight?: number;
  description?: string;
}

interface ItemType {
  id:string
  name: string;
  price: number;
  quantity: number;
  categoryName: string
  userName: string
  attributes: ItemAttributes;
}


declare module '*.png';
