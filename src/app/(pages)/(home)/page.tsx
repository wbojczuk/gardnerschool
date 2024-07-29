import Apply from "@/app/(mainsite)/components/homepage/Apply/Apply";
import Approach from "@/app/(mainsite)/components/homepage/Approach/Approach";
import Camp from "@/app/(mainsite)/components/homepage/Camp/Camp";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Proven from "@/app/(mainsite)/components/homepage/Proven/Proven";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";


export default function Home() {
  return (
    <>
      <Header />
      <Proven />
      <Approach />
      <Camp />
      <ServiceArea />
      <Apply />
    </>
  )
}
