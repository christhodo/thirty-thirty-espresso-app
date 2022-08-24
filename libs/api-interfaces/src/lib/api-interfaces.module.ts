export interface Drink {
  id: string;
  name: string;
  syrup: string;
  shots: 0;
  milk: string;
  description: string;
}

export const emptyDrink = {
  id: '',
  name: '',
  syrup: '',
  shots: null,
  milk: '',
  description: '',
};
