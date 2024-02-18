export enum MenuOptions {
    Home = 'Home',
    Shop = 'Shop',
    About = 'About',
    Contact = 'Contact',
    MyAccount = 'My account',
    Cart = 'Cart',
    Checkout = 'Checkout'
  }

  export enum ProductItems {
    Mug = 'mug',
    Hat = 'hat',
    TShirt = 't-shirt'
  }

  export let randomComment = (Math.random() + 1).toString(36).substring(2)

  export enum orderBy {
    Price = 'price',
    Popularity = 'popularity',
    Rating = 'rating'
  }

  export interface UserData {
    Login: string,
    Password: string
  }

  export interface Users {
    mrdut: UserData,
    matis: UserData,
    notExisting: UserData
  }

  export interface CustomerData {
    Name :string,
    LastName :string,
    Address1 :string,
    Address2 :string,
    Postcode :string,
    City :string,
    Phone :string,
    Email :string
  }

  export interface Customers {
    Customer1: CustomerData,
    Customer2: CustomerData
  }

export class TestData {
  
  static Customers: Customers = 
  {
    Customer1: {
      Name: 'Jan',
      LastName : 'Nowak',
      Address1: 'Kwiatowa 10',
      Address2: '',
      Postcode: '05-800',
      City: 'Warszawa',
      Phone: '123123123',
      Email: '123@123.pl'
    },

    Customer2: {
      Name: 'Mateuszek',
      LastName : 'Malinowski',
      Address1: 'Chmielowa 12',
      Address2: '',
      Postcode: '05-820',
      City: 'Piastow',
      Phone: '333333333',
      Email: '333@233.pl'
    }
  }

  static Users: Users = 
  {
    mrdut: {
      Login: "mr.dutkiewicz@gmail.com",
      Password: "vCZzF2{y~zn14J",
    },
    matis: {
      Login: "matis619@o2.pl",
      Password: "rzekawisla2",
    },
    notExisting: {
      Login: "notExisting@user.pl",
      Password: "XDD",
    }
  }


}


