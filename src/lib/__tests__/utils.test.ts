import { describe, it, expect } from 'vitest';
import { cn } from '../utils';

describe('Utils', () => {
  describe('cn', () => {
    it('должен объединять классы правильно', () => {
      expect(cn('text-red', 'text-blue')).toBe('text-blue');
      expect(cn('px-4', undefined, 'py-2')).toBe('px-4 py-2');
      expect(cn('bg-black', { 'text-white': true })).toBe('bg-black text-white');
    });

    it('должен обрабатывать пустые значения', () => {
      expect(cn()).toBe('');
      expect(cn('', null, undefined)).toBe('');
    });

    it('должен работать с массивами классов', () => {
      expect(cn(['px-4', 'py-2'])).toBe('px-4 py-2');
    });
  });
});
