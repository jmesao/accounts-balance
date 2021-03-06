import {ORDER_CODE_TYPE_LABELS} from "../enums/order-code-type";

export function generateRandomBalance(): Number {
  return Math.floor(Math.random() * 5000)/100;
}

export function generateRandomOrderId(): string {
  return Math.random().toString(36).substring(2,8).toUpperCase();
}

export function generateRandomOrderCode(): string {
  const randomOrderCode = Math.floor(Math.random() * Math.floor(Object.keys(ORDER_CODE_TYPE_LABELS).length))
  return ORDER_CODE_TYPE_LABELS[randomOrderCode].toUpperCase();
}
