"use client"
import { AppProviders } from "../providers";
import Profile from "./profile/page";



export default function UserPage() {
  return (
    <>
      <AppProviders>
        <Profile/>
      </AppProviders>
    </>
  );
}
