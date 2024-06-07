  "use client"
  import Image from "next/image";
  import { Inter } from "next/font/google";
  import Addusers from "@/component/Addusers";
  import Displayusers from "@/component/Displayusers";


  export default function Home() {
    return (
      <main>
      <Addusers/>
      <Displayusers/>
      </main>
    );
  }
