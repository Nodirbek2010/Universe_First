import { ProductsCrud } from "../slice/Product/slice";
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { CatigoriesCrud } from "../slice/Categories/slice";




export const store = configureStore({
    reducer: {
    
        [ProductsCrud.reducerPath]: ProductsCrud.reducer,
      [CatigoriesCrud.reducerPath]:CatigoriesCrud.reducer

        

        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
        
            ProductsCrud.middleware,
            CatigoriesCrud.middleware,
        ),
});

setupListeners(store.dispatch);