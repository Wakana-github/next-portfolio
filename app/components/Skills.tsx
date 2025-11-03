'use client'
import Image from 'next/image';
import wing_icon_pink from "@/public/wing_icon_pink.svg"

function Skills() {
  return (

    <div id="skills" className="pt-15 mx-2 ms:mx-4">

      {/* Title */}
      <div className="skills-container max-w-7xl mx-auto">
        <div className="relative flex justify-center text-center mb-2">
            <Image className="ml-33 md:ml-45 xl:ml-60 md:mt-[-15] absolute z-0 w-10 h-10 md:w-20 md:h-20"
                    src={wing_icon_pink} alt="wing icon"  width={15} height={15}/>
            <h1 className="font-title text-4xl md:text-5xl xl:text-6xl relative z-10">
                SKILLS
            </h1>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-12 items-center lg:mt-10">
            {/* Left Words */}
            <div className="font-title text-2xl md:text-3xl xl:text-4xl w-full md:w-2/5 order-2 md:order-0 text-center md:text-left md:pl-8">
                <p>I LOVE<br/>
                <span className="font-subHeading md:ml-[-35] subText-gradient md:py-20">CREATING</span><br/> THE WORLD</p>
            </div>

            {/* Skill items -right */}
            <div className="w-full xl:w-3/5 order-1 md:order-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-base md:text-lg xl:text-xl px-6">
                <div className="top-skills">
                    <h2 className="font-subHeading text-lg md:text-2xl">Top Skills</h2>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                        
                    </ul>
                </div>
                <div className="technologies">
                    <h2 className="font-subHeading text-lg md:text-2xl">Frameworks</h2>
                    <ul>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>TypeScript</li>
                        <li>Node.js(Express)</li>
                        <li>Flask</li>
                        
                    </ul>
                </div>
                                <div className="technologies">
                    <h2 className="font-subHeading text-lg md:text-2xl">Programming Languages</h2>
                    <ul>
                        <li>C#</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>PL/SQL</li>
                    </ul>
                </div>
                <div className="tools">
                    <h2 className="font-subHeading text-lg md:text-2xl">Tools</h2>
                    <ul>
                        <li>MongDB/MySQL</li>
                        <li>/Oracle</li>
                        <li>Tableau</li>
                        <li>Git/GitHub</li>
                        <li>VS Code</li>
                        <li>WordPress</li>
                        <li>Apache</li>
                    </ul>
                </div>
                <div className="other">
                    <h2 className="font-subHeading text-lg md:text-2xl">Other</h2>
                    <ul>
                        <li>Microsoft suite</li>
                        <li>ArcGIS</li>
                        <li>AutoCAD</li>
                        <li>Revit</li>
                        
                    </ul>
                </div>
                <div className="languages">
                    <h2 className="font-subHeading text-lg md:text-2xl">Languages</h2>
                    <ul>
                        <li>English</li>
                        <li>Japanese</li>
                    </ul>
                </div>
             </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Skills