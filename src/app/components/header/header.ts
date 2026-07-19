import { Component, ChangeDetectionStrategy, computed, inject, effect } from '@angular/core';
import { ApiService, Product } from '../../services/apiService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly service = inject(ApiService);

  readonly products = computed<Product[]>(
    () => this.service.productsResources.value()?.products ?? [],
  );

  readonly prod = computed<Product[]>(() => this.service.productsResources.value()?.products ?? []);

  constructor() {
    effect(() => {
      const data = this.service.productsResources.value();
      if (data) {
        console.log(data);
      }
    });
  }
}
