import Image from "next/image";

interface Props{
  label:string; 
  icon:React.ReactNode; 
}

export const SkillBtn:React.FC<Props> =({
  label, 
  icon
})=>{
  return(
    <div>
      

        <button className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {icon}
          <div>
            {label}
          </div>


        </button>
  
      
    </div>
  )
}