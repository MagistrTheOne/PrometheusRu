import { test, expect, type Page } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('главная страница загружается', async ({ page }: { page: Page }) => {
    await page.goto('/');

    // Проверяем статус ответа
    const response = await page.waitForLoadState('networkidle');
    expect(response).toBeTruthy();

    // Проверяем заголовок
    await expect(page.locator('h1')).toContainText('Prometheus AGI');

    // Проверяем наличие основных элементов
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('[href="#hero"]')).toBeVisible();
    await expect(page.locator('[href="#metrics"]')).toBeVisible();

    // Проверяем изображения загружаются
    const logo = page.locator('img[alt="Prometheus AGI"]');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('src', '/logo-prometheus.svg');
  });

  test('навигация работает', async ({ page }: { page: Page }) => {
    await page.goto('/');

    // Кликаем по ссылкам навигации
    await page.click('[href="#metrics"]');
    await page.waitForTimeout(1000);

    await page.click('[href="#integrations"]');
    await page.waitForTimeout(1000);

    await page.click('[href="#models"]');
    await page.waitForTimeout(1000);

    // Проверяем что страница не упала
    await expect(page.locator('body')).toBeVisible();
  });

  test('мобильное меню работает', async ({ page }: { page: Page }) => {
    // Устанавливаем мобильный viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/');

    // Проверяем наличие кнопки мобильного меню
    const mobileMenuButton = page.locator('[aria-label="Открыть меню"]');
    await expect(mobileMenuButton).toBeVisible();

    // Открываем меню
    await mobileMenuButton.click();

    // Проверяем что меню открылось
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();

    // Закрываем меню
    await page.click('[aria-label="Закрыть меню"]');

    // Проверяем что меню закрылось
    await expect(page.locator('[data-testid="mobile-menu"]')).not.toBeVisible();
  });

  test('формы работают без ошибок JS', async ({ page }: { page: Page }) => {
    await page.goto('/');

    // Проверяем что нет ошибок JavaScript
    const errors: string[] = [];
    page.on('pageerror', (error: Error) => {
      errors.push(error.message);
    });

    // Ждем загрузки страницы
    await page.waitForLoadState('networkidle');

    // Проверяем что нет JS ошибок
    expect(errors).toHaveLength(0);
  });

  test('метаданные корректны', async ({ page }: { page: Page }) => {
    await page.goto('/');

    // Проверяем метатеги
    const title = await page.title();
    expect(title).toBe('Prometheus AGI');

    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    expect(metaDescription).toContain('интеллектуальными агентами');

    const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content');
    expect(ogTitle).toContain('Prometheus AGI');
  });
});
