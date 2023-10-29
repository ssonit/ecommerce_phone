'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { ProductCheckout } from '@/types/products';

interface AppContextInterface {
  productOrder: ProductCheckout[];
  setProductOrder: Dispatch<SetStateAction<ProductCheckout[]>>;
  handleOrderProduct: (data: ProductCheckout[]) => void;
}

const initialAppContext: AppContextInterface = {
  productOrder: JSON.parse(localStorage.getItem('order_product') as string) || [],
  setProductOrder: () => null,
  handleOrderProduct: () => null
};

export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [productOrder, setProductOrder] = useState<ProductCheckout[]>(initialAppContext.productOrder);

  const handleOrderProduct = (data: ProductCheckout[]) => {
    setProductOrder(data);
    localStorage.setItem('order_product', JSON.stringify(data));
  };

  return (
    <AppContext.Provider
      value={{
        productOrder,
        setProductOrder,
        handleOrderProduct
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
