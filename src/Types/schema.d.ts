interface TodoData {
  _id?: number;
  title: string;
  img: string;
}

namespace TODO {
  interface Product {
    name: string;
    age: string;
    image: string;
  }
  type getReq = void;
  type postReq = {
    title: string;
    img: string;
  };
  type EditReq = {
    _id: number;
    newData: TodoData;
  };
  type deleteReq = number;
}
