import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  brandName: string = '';
  products: { name: string; description: string; image: string }[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.brandName = this.route.snapshot.paramMap.get('name') || 'Unknown';

    const allProducts: Record<string, { name: string; description: string; image: string }[]> = {
      'coca-cola': [
    { name: 'Coca-Cola', description: '600 ml', image: 'assets/images/CocaCola.jpg' },
    { name: 'Coca-Cola Zero', description: '600 ml', image: 'assets/images/coca-cola-zero.jpg' },
    { name: 'Fanta', description: '600 ml', image: 'assets/images/Fanta.jpg' },
    { name: 'Sprite', description: '600 ml', image: 'assets/images/Sprite.jpg' },
    { name: 'Ciel', description: '600 ml.', image: 'assets/images/Ciel.jpg' },
    { name: 'Powerade', description: '600 ml.', image: 'assets/images/Powerade.jpg' },
    { name: 'Fuze Tea', description: '600 ml.', image: 'assets/images/FuzeTea.jpg' }
  ],
  'sabritas': [
    { name: 'Sabritas Original', description: 'Papas fritas clásicas.', image: 'assets/images/SabritasOriginal.jpg' },
    { name: 'Sabritas Limón', description: 'Papas fritas con limón.', image: 'assets/images/SabritasLimon.jpg' },
    { name: 'Ruffles Queso', description: 'Papas fritas con sabor a queso.', image: 'assets/images/RufflesQueso.jpg' },
    { name: 'Doritos Nacho', description: 'Totopos de maíz con sabor a queso.', image: 'assets/images/DoritosNacho.jpg' },
    { name: 'Cheetos', description: 'Bocadillos de maíz con queso.', image: 'assets/images/Cheetos.jpg' },
    { name: 'Tostitos', description: 'Totopos de maíz.', image: 'assets/images/Tostitos.jpg' },
    { name: 'Churrumais', description: 'Crujiente botana de maíz.', image: 'assets/images/Churrumais.jpg' },
    { name: 'Fritos', description: 'Crujientes de maíz sabor natural.', image: 'assets/images/Fritos.jpg' },
    { name: 'Sabritas Adobadas', description: 'Papas fritas con sabor a adobo.', image: 'assets/images/SabritasAdobadas.jpg' },
    { name: 'Rancheritos', description: 'Crujiente botana de maíz con sabor.', image: 'assets/images/Rancheritos.jpg' }
  ],
  'gamesa': [
    { name: 'Galletas Marías', description: 'Galletas de soda.', image: 'assets/images/GalletasMarias.jpg' },
    { name: 'Galletas Emperador', description: 'Galletas con crema.', image: 'assets/images/GalletasEmperador.jpg' },
    { name: 'Galletas Chokis', description: 'Galletas con granos de chocoalte.', image: 'assets/images/Chokis.jpg' },
    { name: 'Barras de Coco', description: 'Galletas de coco.', image: 'assets/images/GalletasDeCoco.jpg' },
    { name: 'Galletas Emperador Limón', description: 'Galletas con sabor a limón.', image: 'assets/images/GalletasDeLimon.jpg' },
    { name: 'Galletas Emperador Nuez', description: 'Galletas con nuez.', image: 'assets/images/GalletasDeNuez.jpg' },
    { name: 'Galletas Saladas', description: 'Galletas saladitas.', image: 'assets/images/GalletaSaladas.jpg' }
  ],
  'bimbo': [
    { name: 'Pan Blanco Grande', description: 'Pan de caja blanco.', image: 'assets/images/PanBlanco.jpg' },
    { name: 'Pan Integral Grande', description: 'Pan integral Bimbo.', image: 'assets/images/PanIntegral.jpg' },
    { name: 'Medias Noches', description: 'Pan para hot dogs.', image: 'assets/images/PanHotDog.jpg' },
    { name: 'Bimbollo', description: 'Pan para hamburguesas.', image: 'assets/images/PanHamburguesa.jpg' },
    { name: 'Pan Molido', description: 'Pan de molde Bimbo.', image: 'assets/images/PanDeMolido.jpg' },
    { name: 'Nito', description: 'Pan de hot dog con chocolate.', image: 'assets/images/Nito.jpg' },
    { name: 'Mantecadas', description: 'Pequeños moffins.', image: 'assets/images/Mantecadas.jpg' },
    { name: 'Rebanadas', description: 'Pan tostado crema.', image: 'assets/images/Rebanadas.jpg' }
  ],
  'lala': [
    { name: 'Leche Lala', description: 'Leche entera Lala.', image: 'assets/images/LecheLala.jpg' },
    { name: 'Yogur Lala', description: 'Yogur natural Lala.', image: 'assets/images/YogurLala.jpg' },
    { name: 'Yogur Griego Lala', description: 'Yogur griego Lala.', image: 'assets/images/YogurGriegoLala.jpg' },
    { name: 'Leche Condensada Lala', description: 'Leche condensada Lala.', image: 'assets/images/LecheCondensadaLala.jpg' },
    { name: 'Leche Evaporada Lala', description: 'Leche evaporada Lala.', image: 'assets/images/LecheEvaporadaLala.jpg' },
    { name: 'Queso Lala', description: 'Queso tipo americano.', image: 'assets/images/QuesoLala.jpg' },
    { name: 'Yogur con Sabor Lala', description: 'Yogur con sabor.', image: 'assets/images/YogurConSaborLala.jpg' },
    { name: 'Leche Lala Deslactosada', description: 'Leche deslactosada Lala.', image: 'assets/images/LecheDeslactosadaLala.jpg' },
    { name: 'Crema Lala', description: 'Crema tipo mesa.', image: 'assets/images/CremaLala.jpg' },
    { name: 'Mantequilla Lala', description: 'Mantequilla tipo barra.', image: 'assets/images/MantequillaLala.jpg' }
  ],
  'pepsi': [
    { name: 'Pepsi Original', description: 'Bebida gaseosa original.', image: 'assets/images/PepsiOriginal.jpg' },
    { name: 'Pepsi Diet', description: 'Pepsi sin azúcar.', image: 'assets/images/PepsiDiet.jpg' },
    { name: 'Pepsi Wild Cherry', description: 'Pepsi con cereza.', image: 'assets/images/PepsiWildCherry.jpg' },
    { name: 'Pepsi Mango', description: 'Pepsi con sabor a mango.', image: 'assets/images/PepsiMango.jpg' },
    { name: 'Pepsi Vanilla', description: 'Pepsi con sabor a vainilla.', image: 'assets/images/PepsiVanilla.jpg' },
    { name: 'Pepsi Zero Sugar', description: 'Pepsi sin azúcar.', image: 'assets/images/PepsiZeroSugar.jpg' },
    { name: 'Pepsi Blue', description: 'Pepsi sabor azul.', image: 'assets/images/PepsiBlue.jpg' },
    { name: 'Pepsi Black', description: 'Pepsi sin calorías.', image: 'assets/images/PepsiBlack.jpg' },
    { name: 'Pepsi Light', description: 'Pepsi con menos calorías.', image: 'assets/images/PepsiLight.jpg' },
    { name: 'Pepsi Next', description: 'Pepsi con menos azúcar.', image: 'assets/images/PepsiNext.jpg' }
  ]

    };

    this.products = allProducts[this.brandName.toLowerCase()] || [];
  }
}
