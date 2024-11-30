import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service'; // Importa correctamente el servicio

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items = [
    { name: 'Coca-Cola 600 ML', logo: 'assets/images/coca600.jpg', price: 19 },
    { name: 'Sabritas Originales', logo: 'assets/images/SabritasOriginal.jpg', price: 19 },
    { name: 'Emperador de Limón', logo: 'assets/images/GalletasDeLimon.jpg', price: 20 },
    { name: 'Churrumais', logo: 'assets/images/Churrumais.jpg', price: 15 },
    { name: 'Chokis', logo: 'assets/images/Chokis.jpg', price: 20 },
    { name: 'Ciel 600 ml', logo: 'assets/images/Ciel.jpg', price: 13 },
    { name: 'Cheetos de Queso', logo: 'assets/images/Cheetos.jpg', price: 15 },
    { name: 'Fanta Naranja 600 ml', logo: 'assets/images/Fanta.jpg', price: 20 },
    { name: 'Emperador Chocolate', logo: 'assets/images/GalletasEmperador.jpg', price: 20 },
    { name: 'Pan Blanco Grande', logo: 'assets/images/PanBlanco.jpg', price: 47 },
    { name: 'Tostitos', logo: 'assets/images/Tostitos.jpg', price: 19 },
    { name: 'Galletas Marías', logo: 'assets/images/GalletasMarias.jpg', price: 20 },
    { name: 'Medias Noches', logo: 'assets/images/PanHotDog.jpg', price: 38 },
    { name: 'Ruffles de Queso', logo: 'assets/images/RufflesQueso.jpg', price: 19 },
    { name: 'Powerade Moras 600 ML', logo: 'assets/images/Powerade.jpg', price: 24 },
    { name: 'Sprite 600 ML', logo: 'assets/images/Sprite.jpg', price: 19 },
    { name: 'Sabritas Adobadas', logo: 'assets/images/SabritasAdobadas.jpg', price: 19 },
    { name: 'Coca-Cola Zero 600 ML', logo: 'assets/images/coca-cola-zero.jpg', price: 19 },
    { name: 'Rancheritos', logo: 'assets/images/Rancheritos.jpg', price: 15 },
    { name: 'Emperador de Nuez', logo: 'assets/images/GalletasDeNuez.jpg', price: 20 },
    { name: 'Nito', logo: 'assets/images/nito.jpg', price: 15 },
    { name: 'Gansito', logo: 'assets/images/gansito.jpg', price: 16 },
    { name: 'Principe', logo: 'assets/images/principe.jpg', price: 20 },
    { name: 'Triki-Trakes', logo: 'assets/images/trikitrakes.jpg', price: 16 },
    { name: 'Pepsi 600 ML', logo: 'assets/images/pepsi600.jpg', price: 18 },
    { name: 'Coca-Cola Retornable 2.5 L', logo: 'assets/images/coca2.5.jpg', price: 32 },
    { name: 'Coca-Cola Retornable 1.5 L', logo: 'assets/images/coca1.5.jpg', price: 22 },
    { name: 'Coca-Cola Retornable 1 L', logo: 'assets/images/coca1.jpg', price: 19 },
    { name: 'Coca-Cola Retornable 500 ML', logo: 'assets/images/coca500.jpg', price: 13 },
    { name: 'Caguama Negra Modelo', logo: 'assets/images/nmodelo.jpg', price: 48 },
    { name: 'Malvoro Rojo 20', logo: 'assets/images/mrojo.jpg', price: 80 },
    { name: 'Montana Shot 25´s', logo: 'assets/images/m20.jpg', price: 70 },
    { name: 'Pall-Mall Tokyo', logo: 'assets/images/ptokyo.jpg', price: 70 },
    { name: 'Pall-Mall Pepino', logo: 'assets/images/ppepino.jpg', price: 70 },
    { name: 'Pall-Mall Alaska', logo: 'assets/images/palaska.jpg', price: 70 },
    { name: 'Bonafont 600 ML', logo: 'assets/images/b600.jpg', price: 13 },
    { name: 'Bonafont 1 L', logo: 'assets/images/b1l.jpg', price: 15 },
    { name: 'Danone Yoghurt Fresa 220 G', logo: 'assets/images/dfresa.jpg', price: 15 },
    { name: '', logo: 'assets/images/.jpg', price: 15 },
    { name: '', logo: 'assets/images/.jpg', price: 15 },
    { name: '', logo: 'assets/images/.jpg', price: 15 },
    { name: '', logo: 'assets/images/.jpg', price: 15 },
    { name: '', logo: 'assets/images/.jpg', price: 15 },
    { name: '', logo: 'assets/images/.jpg', price: 15 },
    { name: '', logo: 'assets/images/.jpg', price: 15 },
    { name: '', logo: 'assets/images/.jpg', price: 15 },
  ];

  filteredItems = [...this.items]; // Copia inicial de los productos

  constructor(private router: Router, private cartService: CartService) {} // Inyecta el CartService

  //pedir permiso para notificacciones 

  ngOnInit() { 
    this.requestNotificationPermission();
  }
  
  requestNotificationPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Permiso para notificaciones otorgado.');
        } else {
          console.log('Permiso para notificaciones denegado.');
        }
      });
    } else {
      console.log('El navegador no soporta notificaciones.');
    }
  }

  addToCart(item: any) {
    this.cartService.addItem(item); // Agregar al carrito
    console.log('Producto agregado al carrito:', item);
  
    // Mostrar notificación
    this.showNotification(item);
  }
  
  showNotification(item: any) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Producto agregado al carrito', {
        body: `${item.name} - $${item.price} MXN`,
        icon: item.logo // Usa la imagen del producto como ícono
      });
    } else {
      console.log('No se puede mostrar la notificación: permiso denegado o no disponible.');
    }
  }
  

  goToCart() {
    this.router.navigate(['/cart']); // Navega al carrito
  }

  /**
   * Filtra la lista de productos según la búsqueda.
   * @param event Evento emitido por la barra de búsqueda.
   */
  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase(); // Obtiene el texto en minúsculas

    if (!searchTerm) {
      this.filteredItems = [...this.items]; // Restablece la lista completa si no hay texto
    } else {
      this.filteredItems = this.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm)
      );
    }
  }
}
