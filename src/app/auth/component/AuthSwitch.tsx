"use client";
import { TAuthState } from "@/Redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type AuthChildren = ((user: TAuthState) => React.ReactNode) | null;
export const IfAuthenticated = ({ children }: { children: AuthChildren }) => {
  const auth = useAppSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (auth?.token) {
      router.push("/services");
    }
  }, [auth?.token, router]);

  if (!auth?.token) return null;

  return <>{typeof children == "function" ? children(auth) : children}</>;
};
export const IfUnauthenticated = ({
  children,
}: {
  children: React.ReactNode;
}) => <>{children}</>;

const AuthSwitch: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useAppSelector((state) => state.auth.user);

  let authContent: React.ReactElement | null = null;
  let guestContent: React.ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === IfAuthenticated) {
      authContent = child;
    } else if (child.type === IfUnauthenticated) {
      guestContent = child;
    }
  });

  return <>{user ? authContent : guestContent}</>;
};

export default AuthSwitch;
