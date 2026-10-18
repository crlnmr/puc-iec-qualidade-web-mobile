// tests/support/catalog-page.ts
// ─────────────────────────────────────────────────────────────────────────────
// ✅ AVALIATIVO — D2 · PAGE OBJECT do catálogo (/qa)
//
// 🎯 Page Object = uma classe que "sabe" como mexer numa tela. Os testes passam a
//    ler como frases (catalog.favorite('Pulp Fiction')) e, se a tela mudar, você
//    corrige em UM lugar só.
// 📚 Estudar: https://playwright.dev/docs/pom  ·  https://playwright.dev/docs/test-fixtures
//
// Complete os métodos marcados com ✍️. O  goto()  já está pronto (modelo).
// Regra: nenhum método daqui pode usar id fixo de filme — receba o TÍTULO.
// ─────────────────────────────────────────────────────────────────────────────
import { expect, type Locator, type Page } from '@playwright/test';

export class CatalogPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/qa');
    await expect(this.page.getByTestId('movielist-grid')).toBeVisible();
  }

  card(title: string): Locator {
    return this.page.getByRole('article').filter({ hasText: title });
  }

  async favorite(title: string) {
    await this.card(title)
      .getByRole('button', { name: /Favoritar/ })
      .click();
  }

  async openFavorites() {
    await this.page.getByTestId('movielist-favorites-button').click();
    await expect(this.page.getByTestId('favorites-screen')).toBeVisible();
  }

  get favoritesCount(): Locator {
    return this.page.getByTestId('favorites-count');
  }
}