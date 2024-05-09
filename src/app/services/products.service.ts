import { Injectable } from '@angular/core';

const domain = 'https://eotconf.ru';
export enum ProductType {
  Teacher = 'teacher',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time?: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  };
}

const products: IProduct[] = [
  {
    id: '1',
    title: 'ИРИНА МАРЬЕВИЧ',
    link: '/author/denira/',
    image: '/wp-content/uploads/2021/03/iramar-100x100.jpg',
    text: 'Преподаватель метода эмоционально-образной терапии Аккредитованный супервизор ОППЛ Ведущая терапевтических и супервизионных групп Автор книги и одноименного курса «Дети деньги не зарабатывают» Организатор ежегодной конференции «Все грани эмоционально-образной терапии». Россия, Москва.',
    type: ProductType.Teacher,
  },
  // {
  //   id: '33',
  //   title: 'Продвинутый JavaScript. Создаем свой Excel',
  //   link: '/products/advanced-js',
  //   image: '/img/icons/products/icon-advanced-js.svg',
  //   text: 'Webpack, Jest, Node.js, State Managers, ООП, ESlint, SASS, Data Layer',
  //   time: 'С опытом • 2 месяца',
  //   type: ProductType.Intensive,
  // },
  // {
  //   id: '26',
  //   title: 'Марафон JavaScript «5 дней — 5 проектов»',
  //   link: '/products/marathon-js',
  //   image: '/img/icons/products/icon-marathon-five-x-five.svg',
  //   text: 'плагин для картинок, мини-кол Trello, слайдер картинок, мини-игра, анимированная игра',
  //   time: 'С нуля • 1 неделя',
  //   type: ProductType.Course,
  // },
];



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products = products.map(addDomainToLinkAndImage);
  constructor() { }
  getById(id: string){
    return this.products.find(p => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group: any, prod) => {
      if(!group[prod.type]) {
        group[prod.type] = [];
      }

      group[prod.type].push(prod);
      return group;
    },{})
  }
}
