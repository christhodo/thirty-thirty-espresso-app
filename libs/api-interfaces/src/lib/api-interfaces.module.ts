export interface Drink {
  id: string;
  name: string;
  syrup: string;
  shots: string;
  milk: null;
  description: string;
}

export const emptyDrink = {
  id: '',
  name: '',
  syrup: '',
  shots: '',
  milk: null,
  description: '',
};
