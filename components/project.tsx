import { BentoProject } from "./bento-project"

export const Project = () => {

    return (
        <div className="flex flex-col space-y-5 justify-center items-center">
            <div className=" text-5xl font-semibold pb-4 font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                Projects
            </div>
            <BentoProject />
        </div>
    )
}