'use client'
// import './Qualification.css'
import certification_image from '@/public/qualification/certificate.png'
import wing_icon_pink from '@/public/wing_icon_pink.svg'
import Image from 'next/image';
import FadeInSection from '@/app/components/FadeInSection';

export default function Qualification() {
  return (
    <div className="pt-15 mx-4 pb-3" id="qualification">
      <div className=" px-4 max-w-7xl mx-auto">

        {/* Title */}
        <FadeInSection>
          <div className="relative flex justify-center text-center mb-2">
              <Image className="ml-74 md:ml-98 xl:ml-122 md:mt-[-25] absolute z-0 w-10 h-10 md:w-20 md:h-20"
                      src={wing_icon_pink} alt="wing icon"  width={15} height={15}/>
              <h1 className="font-title text-4xl md:text-5xl xl:text-6xl relative z-10">
                  QUALIFICATION
              </h1>
          </div>
        </FadeInSection>

        
          <div className="md:flex md:items-center md:mx-4">
          {/* Article */}
          <FadeInSection>
            <div className="text-base md:text-lg xl:text-xl mt-5 space-y-3 mb-3  md:w-4/5 ">
              <p>- Graduate Certificate in Information Technology, Queensland University of Technology - Online, Australia (2025)
              </p>
              <p>- CertificateVI in Information Technology, Canberra Institute of Technoligy, Australia (2024)</p>
              <p>- Bachelor of Engineering (Civil), University of the Ryukyus, Japan (2019)</p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="flex justify-center items-center ">
              <Image id="certification-image" className="w-50 h-30 md:w-60 md:h-35 mt-2 md:mr-20"  
                      src={certification_image} alt="Photo" width={300} height="auto" />
            </div>
          </FadeInSection>
            {/* certificate.png created by Canva's AI image generator */}
          </div>
        
      </div>

    </div>
  )
}

