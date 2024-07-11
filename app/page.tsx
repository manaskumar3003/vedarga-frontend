import Image from "next/image";
import Hero from '@/app/component/home/hero'
import Body from '@/app/component/home/body'
import Footercontact from '@/app/component/home/footercontact'



export default function Home() {
  return (
    <main >
      <Hero/>
      <Body/>
      <Footercontact/>
      
    </main>
  );
}
