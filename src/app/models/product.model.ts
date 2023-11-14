import { Rating } from './rating.model';

export class Product {
  constructor(
    public id: string = '',
    public title: string = '',
    public price: number = 0,
    public description: string = '',
    public category: string = '',
    public image: string = '',
    public rating: Rating = new Rating()
  ) {}
}
