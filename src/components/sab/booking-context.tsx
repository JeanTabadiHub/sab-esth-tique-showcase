import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = { open: boolean; setOpen: (v: boolean) => void };
const BookingCtx = createContext<Ctx>({ open: false, setOpen: () => {} });

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <BookingCtx.Provider value={{ open, setOpen }}>{children}</BookingCtx.Provider>;
}

export const useBooking = () => useContext(BookingCtx);
