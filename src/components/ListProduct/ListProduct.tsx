"use client";
import React, { FC, useCallback, useEffect, useState } from 'react';
import DListTopProduct from './DListTopProduct';
import { transformProductList } from './utils';
import axios from 'axios';

const ListProduct: FC<{
  productTab: number;
  title: string;
  id: string;
}> = ({ productTab, title, id }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);

  const getProduct = useCallback(async () => {
    const payload = {
      PageNumber: 1,
      PageSize: 10,
      SearchTerm: '',
      CategoryIds: [],
      BrandIds: [],
      WarehouseIds: [],
      ProductTab: 1,
    };
    try {
      setLoading(true);
      const response:any = await axios({
        method: 'POST',
        url: `https://apistg.droppii.com/search-service/v1/cus/product/search`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: payload,
      });
      if (response.data.statusCode === 0) {
        const p = transformProductList(response.data?.data || []);
        setProducts(p);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DListTopProduct
      loading={loading}
      id={id}
      title={title}
      productsData={products || []}
      desktopItem={4}
    />
  );
};

export default ListProduct;
