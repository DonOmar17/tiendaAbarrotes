import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = []; // Almacena los productos del carrito

  constructor() {}

  /**
   * Obtiene los productos actuales en el carrito.
   * @returns Lista de productos en el carrito.
   */
  getCartItems() {
    return this.cartItems;
  }

  /**
   * Agrega un producto al carrito. Si ya existe, incrementa la cantidad.
   * @param item Producto a agregar.
   */
  addItem(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      existingItem.quantity += 1;
    } else {
      // Si es un producto nuevo, agrega con cantidad inicial 1
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  /**
   * Elimina un producto del carrito. Si la cantidad es mayor a 1, reduce la cantidad.
   * @param item Producto a eliminar.
   */
  removeItem(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        // Reduce la cantidad si es mayor a 1
        existingItem.quantity -= 1;
      } else {
        // Si la cantidad es 1, elimina el producto del carrito
        this.cartItems = this.cartItems.filter(cartItem => cartItem.name !== item.name);
      }
    }
  }

  /**
   * Vacía el carrito.
   */
  clearCart() {
    this.cartItems = [];
  }

  /**
   * Calcula el precio total de los productos en el carrito.
   * @returns Precio total del carrito.
   */
  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
