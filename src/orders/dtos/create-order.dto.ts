export class OrderItemDTO {
  id: string;
  description: string;
  quantity: number;
  orderId: string;
  tourId: string;
}

export class CreateOrderDTO {
  id: string;
  firstName: string;
  surname: string;
  address: string;
  city: string;
  country: string;
  email: string;
  downPayment: number;
}
