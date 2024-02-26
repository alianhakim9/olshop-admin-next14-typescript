"use client";

import { hideLoading } from "@/redux/slices/cartSlice";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

interface Props {
  session: Session | null;
  children: React.ReactNode;
}

const GlobalProvider = ({ session, children }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);

  return (
    <SessionProvider session={session}>
      {children}
      <Toaster />
    </SessionProvider>
  );
};

export default GlobalProvider;
