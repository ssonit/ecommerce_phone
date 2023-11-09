'use client';

import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import { ProductCheckout } from '@/types/products';
import { useAuth, useClerk } from '@clerk/nextjs';
import { User } from '@prisma/client';
import axios from 'axios';

type TProductDelete = {
  id?: string;
  name?: string;
};
interface AppContextInterface {
  productOrder: ProductCheckout[];
  setProductOrder: Dispatch<SetStateAction<ProductCheckout[]>>;
  handleOrderProduct: (data: ProductCheckout[]) => void;
  openAlertDialog: boolean;
  handleOpenAlertDialog: () => void;
  handleCloseAlertDialog: () => void;
  productDelete: TProductDelete;
  handleChangeProductDelete: (data: TProductDelete) => void;
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

const initialAppContext: AppContextInterface = {
  productOrder: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('order_product') as string) : [],
  setProductOrder: () => null,
  handleOrderProduct: () => null,
  openAlertDialog: false,
  handleOpenAlertDialog: () => null,
  handleCloseAlertDialog: () => null,
  productDelete: {},
  handleChangeProductDelete: () => null,
  currentUser: null,
  setCurrentUser: () => null
};

export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();
  const [currentUser, setCurrentUser] = useState(initialAppContext.currentUser);
  const [productOrder, setProductOrder] = useState<ProductCheckout[]>(initialAppContext.productOrder || []);

  const [openAlertDialog, setOpenAlertDialog] = useState(initialAppContext.openAlertDialog);
  const [productDelete, setProductDelete] = useState(initialAppContext.productDelete);

  useEffect(() => {
    const getCurrentUser = async () => {
      if (isSignedIn) {
        const res = await axios.get('/api/user');
        setCurrentUser(res.data.data);
      }
    };
    getCurrentUser();
  }, [isSignedIn]);

  const handleOrderProduct = (data: ProductCheckout[]) => {
    setProductOrder(data);
    localStorage.setItem('order_product', JSON.stringify(data));
  };

  const handleOpenAlertDialog = () => {
    setOpenAlertDialog(true);
  };
  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
  };

  const handleChangeProductDelete = (data: TProductDelete) => {
    setProductDelete(data);
  };

  return (
    <AppContext.Provider
      value={{
        productOrder,
        setProductOrder,
        handleOrderProduct,
        openAlertDialog,
        handleOpenAlertDialog,
        handleCloseAlertDialog,
        productDelete,
        handleChangeProductDelete,
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
