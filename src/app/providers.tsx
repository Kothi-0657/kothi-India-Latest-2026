"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../Redux/store";
import { PersistGate } from "redux-persist/integration/react";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}