import get from 'lodash/get';

export const transformProductList = (listProduct: any[] = []): any[] => {
  const list = listProduct.map(p => transformProductForList(p));
  return list;
};

export const transformProductForList = (
  p: any,
  isDesktop: boolean = true
): any => {
  const {
    images,
    image,
    name,
    id,
    totalSold,
    isNew,
    productType,
    vat,
    outOfStock,
    promotions,
    isFavorited,
    isNormalProduct,
    minPrice,
    avgRating,
    totalRating,
    slug,
  } = p;
  let imageUrls = (isDesktop ? get(images, '820x820') : get(images, '504x504')) || [];
  imageUrls = imageUrls.sort((a:any, b:any) => (a.isMain === b.isMain ? 0 : a.isMain ? -1 : 1));
  const imgGroup = imageUrls.map((i:any) => i.url);
  const imageUrl = get(imageUrls, '[0].url') || get(imageUrls, '[0x0].[0].url') || image || '';
  return {
    name,
    totalSold,
    isNew,
    productType,
    vat,
    outOfStock,
    promotions,
    isFavorited,
    isNormalProduct,
    minPrice,
    imageUrl,
    imageUrls,
    imgGroup,
    productId: id,
    avgRating,
    totalRating,
    slug: slug || convertToSlug(name),
  };
};

export const nonAccentVietnamese = (s: string) => {
  let str = s || '';
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
  return str;
};

export function convertToSlug(text: string, id?: any) {
  const st = nonAccentVietnamese(text);
  return id
    ? `${st
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')}-${id}`
    : `${st
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')}`;
}

export function formatNumber(number: number, locale?: string, options?: any) {
  return Intl.NumberFormat(locale, options).format(number);
}

export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}



export function formatCurrency(amount: number): string {
  const roundedAmount = Math.round(amount * 100) / 100;
  return `${formatNumber(roundedAmount, 'vi-VN', {
    style: 'currency',
    currency: 'VND',
  })}`;
}