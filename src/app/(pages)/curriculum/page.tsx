import AfterSchool from "@/app/(mainsite)/components/curriculumpage/AfterSchool/AfterSchool"
import CurriculumContent from "@/app/(mainsite)/components/curriculumpage/CurriculumContent/CurriculumContent"
import STEAM from "@/app/(mainsite)/components/curriculumpage/STEAM/STEAM"
import Camp from "@/app/(mainsite)/components/homepage/Camp/Camp"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Curriculum | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Curriculum | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function CurriculumPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Curriculum" />
			<CurriculumContent />
			<STEAM />
			<AfterSchool />
			<Camp />
	 	 </>
	 )
}