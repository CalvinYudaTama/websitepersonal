import React from "react";
import { Metadata } from "next";
import HomeMain from "@/pages/homes/home-1";

export const metadata: Metadata = {
  title: "Liko - Home Main",
};


import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/home-1')
}