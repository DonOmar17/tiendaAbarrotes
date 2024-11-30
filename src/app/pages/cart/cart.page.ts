import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

declare var paypal: any; // Declarar PayPal

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, AfterViewInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart(); // Carga inicial del carrito
  }

  ngAfterViewInit() {
    if (this.cartItems.length > 0) {
      this.initializePayPalButton(); // Inicializa PayPal si hay productos
    }
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems(); // Obtener los productos del carrito
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0); // Calcular el total
  }

  removeItem(item: any) {
    this.cartService.removeItem(item); // Remover producto del carrito
    this.loadCart(); // Actualizar el carrito y recalcular el total
  }

  initializePayPalButton() {
    if (typeof paypal === 'undefined') {
      console.error('PayPal SDK no está cargado.');
      return;
    }

    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.totalPrice.toFixed(2),
              },
            },
          ],
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Pago completado por ' + details.payer.name.given_name);
          this.cartService.clearCart();
          this.loadCart();
        });
      },
      onError: (err: any) => {
        console.error('Error en el pago:', err);
      },
    }).render('#paypal-button-container');
  }
}
