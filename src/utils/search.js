import { translate } from '../i18n';
import { CAR_BRANDS } from '../data/products';

/**
 * Normalises text for forgiving search in Arabic and English:
 * lower-case, strip Arabic diacritics/tatweel and unify common letter variants.
 */
export const normalizeText = (value = '') =>
  String(value)
    .toLowerCase()
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .trim();

/** True when every word of the query appears somewhere in the text. */
export const matchesQuery = (text, query) => {
  const terms = normalizeText(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return true;
  const haystack = normalizeText(text);
  return terms.every((term) => haystack.includes(term));
};

const productIndex = new Map();

/** Searchable text for a product in both languages (so Arabic and English queries both work). */
export const productSearchText = (product) => {
  if (!productIndex.has(product.id)) {
    const parts = ['en', 'ar'].flatMap((language) => [
      translate(language, `products.${product.slug}.name`),
      translate(language, `products.${product.slug}.description`),
      translate(language, `categories.${product.category}`),
    ]);
    product.brands.forEach((id) => parts.push(CAR_BRANDS.find((brand) => brand.id === id)?.name || id));
    productIndex.set(product.id, parts.join(' '));
  }
  return productIndex.get(product.id);
};
