import { IoMdContact } from "react-icons/io"
import { Btn2 } from "./btn2"
import { MdOutlineFileDownload } from "react-icons/md"
import { TiSocialLinkedin } from "react-icons/ti"
import { FaGithub } from "react-icons/fa"
import { useActiveSection } from "@/hooks/use-active-section"
import Link from "next/link"


export const IntroBtns = () => {

    const { active, setActive } = useActiveSection();


    return (
        <div className="flex mt-5 items-center gap-x-3">

            <div onClick={() => {
                setActive("Contact")
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                }

            }} className="hover:scale-105 transition-all">
                <Btn2 label="Contact Me" icon={<IoMdContact />} />
            </div>

            <Link href={"https://drive.google.com/file/d/1s-aaTc2HUpE3ebzQFuz62DeRAFA6Bp_j/view"} target="_blank" className="hover:scale-105 transition-all">
                <Btn2 label="Resume" icon={<MdOutlineFileDownload />} />
            </Link>
            
            <Link href={"https://www.linkedin.com/in/simarjeetsm11/"} target="_blank" className="bg-white rounded-full h-8 w-8 flex items-center justify-center hover:scale-110 transition-all">
                <TiSocialLinkedin className=" text-black text-2xl " />
            </Link>
            <Link href={"https://github.com/ssmehra7"} target="_blank" className="bg-white rounded-full h-8 w-8 flex items-center justify-center hover:scale-110 transition-all">
                <FaGithub className=" text-black text-xl" />
            </Link>
        </div>
    )
}