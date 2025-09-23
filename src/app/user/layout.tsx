import { AppProviders } from "@/app/providers";
import RedirectIfNotAuth from "../auth/component/RedirectIfNotAuth";


export default function UserLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
    
  return (
    <>
      <AppProviders>
        <RedirectIfNotAuth />
       
        {children}
      </AppProviders>
    </>
  );
}