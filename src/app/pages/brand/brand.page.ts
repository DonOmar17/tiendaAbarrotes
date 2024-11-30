import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {
  brandName: string = '';
  products: { name: string, description: string }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.brandName = this.route.snapshot.paramMap.get('name') || 'Unknown';

    // Definimos allProducts con un índice de tipo string
    const allProducts: Record<string, { name: string; description: string }[]> = {
      'coca-cola': [
        { name: 'Coca-Cola Original', description: 'Bebida gaseosa original.' },
        { name: 'Coca-Cola Zero', description: 'Sin azúcar.' }
      ],
      'sabritas': [
        { name: 'Sabritas Original', description: 'Papas fritas.' },
        { name: 'Sabritas Limón', description: 'Papas fritas con limón.' }
      ],
      // Agrega más marcas y productos aquí
    };

    this.products = allProducts[this.brandName.toLowerCase()] || [];
  }
}
