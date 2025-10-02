import { describe, it, expect } from 'vitest';
import { translations, type Locale, type TranslationKeys } from '../translations';

describe('Translations', () => {
  describe('Структура переводов', () => {
    it('должен содержать переводы для русского и английского', () => {
      expect(translations.ru).toBeDefined();
      expect(translations.en).toBeDefined();
    });

    it('русский перевод должен содержать все необходимые ключи', () => {
      const ru = translations.ru;

      expect(ru.nav).toBeDefined();
      expect(ru.hero).toBeDefined();
      expect(ru.metrics).toBeDefined();
      expect(ru.roi).toBeDefined();
      expect(ru.tools).toBeDefined();
      expect(ru.charts).toBeDefined();
      expect(ru.integrations).toBeDefined();
      expect(ru.process).toBeDefined();
      expect(ru.rag).toBeDefined();
      expect(ru.models).toBeDefined();
      expect(ru.whyUs).toBeDefined();
      expect(ru.cta).toBeDefined();
      expect(ru.footer).toBeDefined();
    });

    it('английский перевод должен содержать все необходимые ключи', () => {
      const en = translations.en;

      expect(en.nav).toBeDefined();
      expect(en.hero).toBeDefined();
      expect(en.metrics).toBeDefined();
      expect(en.roi).toBeDefined();
      expect(en.tools).toBeDefined();
      expect(en.charts).toBeDefined();
      expect(en.integrations).toBeDefined();
      expect(en.process).toBeDefined();
      expect(en.rag).toBeDefined();
      expect(en.models).toBeDefined();
      expect(en.whyUs).toBeDefined();
      expect(en.cta).toBeDefined();
      expect(en.footer).toBeDefined();
    });
  });

  describe('Типы переводов', () => {
    it('должен правильно экспортировать типы', () => {
      const locale: Locale = 'ru';
      expect(locale).toBe('ru');

      const keys: TranslationKeys = translations.ru;
      expect(keys.nav.overview).toBe('Обзор');
    });
  });

  describe('Контент переводов', () => {
    it('русский перевод должен содержать правильный контент', () => {
      expect(translations.ru.hero.title).toBe('Prometheus AGI');
      expect(translations.ru.hero.subtitle).toContain('интеллектуальными агентами');
      expect(translations.ru.nav.overview).toBe('Обзор');
      expect(translations.ru.footer.author).toContain('2025');
    });

    it('английский перевод должен содержать правильный контент', () => {
      expect(translations.en.hero.title).toBe('Prometheus AGI');
      expect(translations.en.hero.subtitle).toContain('intelligent agents');
      expect(translations.en.nav.overview).toBe('Overview');
      expect(translations.en.footer.author).toContain('2025');
    });
  });
});
