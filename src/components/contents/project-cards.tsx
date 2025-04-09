// "use client";

// import { Projects as ProjectProps } from "@/types";
// import { Badge } from "@mantine/core";
// import { ExternalLinkIcon } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Button } from "../ui/button";
// import Icons from "../ui/icons";
// import { Skeleton } from "../ui/skeleton";
// import AnimationContainer from "../utils/animation-container";
// import { MagicCard } from "../ui/magic-card";
// import { dummyProjects, dummySingleProjects } from "@/constants/dummy-data";

// const techStackIcons: { [key: string]: keyof typeof Icons } = {
//     "next.js": "nextjs",
//     "nextjs": "nextjs",
//     "tailwindcss": "tailwindcss",
//     "tailwind": "tailwindcss",
//     "framer motion": "framer",
//     "framer-motion": "framer",
//     "shadcn/ui": "shadcn",
//     "shadcn ui": "shadcn",
//     "shadcnui": "shadcn",
//     "mongodb": "mongodb",
//     "prisma": "prisma",
//     "magic ui": "magicui",
//     "expo": "expo",
//     "firebase": "firebase",
//     "figma": "figma",
//     "clerk": "clerk",
//     "react native": "react",
//     "aws(ses)": "aws",
//     "zustand": "zustand",
//     "gemini": "gemini",
// };

// const getIconForTech = (tech: string) => {
//     const normalizedTech = tech.toLowerCase();
//     const iconKey = techStackIcons[normalizedTech];
//     if (iconKey && Icons[iconKey]) {
//         const Icon = Icons[iconKey];
//         return <Icon className="size-3 mr-1" />;
//     }
//     return null;
// };

// const ProjectCards = () => {
//     const [projects, setProjects] = useState<ProjectProps[]>([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         // Simulate loading delay for better UX
//         const timer = setTimeout(() => {
//             setProjects(dummySingleProjects);
//             setIsLoading(false);
//         }, 500);
        
//         return () => clearTimeout(timer);
//     }, []);


//     return (
//         <AnimationContainer className="w-full flex flex-col">

//             <div className="flex flex-col items-center justify-center w-full mt-8 space-y-5 md:space-y-8">

//                 {isLoading ? (
//                     <>
//                         <Skeleton className="w-full h-40" />
//                         <Skeleton className="w-full h-40" />
//                         <Skeleton className="w-full h-40" />
//                         <Skeleton className="w-full h-40" />
//                         <Skeleton className="w-full h-40" />
//                         <Skeleton className="w-full h-40" />
//                     </>
//                 ) : (
//                     <>
//                         {projects.map((project: ProjectProps) => (
//                             <Card key={project.title} project={project} />
//                         ))}
//                     </>
//                 )}

//             </div>
//         </AnimationContainer>
//     )
// };

// const Card = ({ project }: { project: ProjectProps }) => {

//     const stack = project.stack || project.tags || [];

//     return (
//         <AnimationContainer className="bg-[#080809] w-full hover:border-neutral-700 rounded-xl">
//             <MagicCard gradientSize={150} className="w-full">
//                 <div className="flex-col items-start p-4 lg:p-5">
//                     <div className="flex flex-col items-start space-y-4">
//                         <h4 className="text-lg font-medium text-neutral-100">
//                             {project?.title}
//                         </h4>
//                         <p className="text-sm text-neutral-300">
//                             {project?.description}
//                         </p>
//                         <div className="flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:justify-between w-full">
//                             <div className="flex items-center justify-start flex-wrap gap-2 mt-auto">
//                                 {project?.stack?.map((item, index) => (
//                                     <Badge
//                                         key={index}
//                                         size="md"
//                                         radius="md"
//                                         variant="outline"
//                                         color="dark"
//                                         className="transition-colors duration-300 ease-in-out py-1 ![--badge-height:1.5rem] bg-neutral-600/70 hover:bg-neutral-700"
//                                     >
//                                         <span className="font-medium text-white flex items-center">
//                                             {getIconForTech(item)}
//                                             {item}
//                                         </span>
//                                     </Badge>
//                                 ))}
//                             </div>
//                             <div className="flex items-end gap-4">
//                                 <Link href={project.github} target="_blank">
//                                     <Button variant="outline" size="sm">
//                                         <Icons.github className="w-5 h-5" />
//                                         <span className="ml-2">
//                                             Github
//                                         </span>
//                                     </Button>
//                                 </Link>
//                                 <Link href={project.view} target="_blank">
//                                     <Button variant="outline" size="sm">
//                                         <ExternalLinkIcon className="w-5 h-5" />
//                                         <span className="ml-2">
//                                             View
//                                         </span>
//                                     </Button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </MagicCard>
//         </AnimationContainer>
//     )
// };

// export default ProjectCards


"use client"

import type { Projects as ProjectProps } from "@/types"
import { Badge } from "@mantine/core"
import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import Icons from "../ui/icons"
import { Skeleton } from "../ui/skeleton"
import AnimationContainer from "../utils/animation-container"
import { MagicCard } from "../ui/magic-card"
import { dummySingleProjects } from "@/constants/dummy-data"
import { motion } from "framer-motion"

const techStackIcons: { [key: string]: keyof typeof Icons } = {
  "next.js": "nextjs",
  nextjs: "nextjs",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  "framer motion": "framer",
  "framer-motion": "framer",
  "shadcn/ui": "shadcn",
  "shadcn ui": "shadcn",
  shadcnui: "shadcn",
  mongodb: "mongodb",
  prisma: "prisma",
  "magic ui": "magicui",
  expo: "expo",
  firebase: "firebase",
  figma: "figma",
  clerk: "clerk",
  "react native": "react",
  "aws(ses)": "aws",
  zustand: "zustand",
  gemini: "gemini",
}

const getIconForTech = (tech: string) => {
  const normalizedTech = tech.toLowerCase()
  const iconKey = techStackIcons[normalizedTech]
  if (iconKey && Icons[iconKey]) {
    const Icon = Icons[iconKey]
    return <Icon className="size-3 mr-1" />
  }
  return null
}

const ProjectCards = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setProjects(dummySingleProjects)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimationContainer className="w-full flex flex-col">
      <div className="flex flex-col items-center justify-center w-full mt-8 space-y-5 md:space-y-8">
        {isLoading ? (
          <>
            <Skeleton className="w-full h-72" />
            <Skeleton className="w-full h-72" />
            <Skeleton className="w-full h-72" />
          </>
        ) : (
          <>
            {projects.map((project: ProjectProps) => (
              <Card key={project.title} project={project} />
            ))}
          </>
        )}
      </div>
    </AnimationContainer>
  )
}

const Card = ({ project }: { project: ProjectProps }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const imageUrl =
    project.featuredImage?.url ||
    (Array.isArray(project.image) ? project.image[0]?.url : project.image) ||
    "/placeholder.svg?height=400&width=600"

    const stack = project.stack || project.tags || [];
    
    // Provide default URLs if github or view are undefined
    // const githubUrl = project.github || "#";
    const viewUrl = project.view || "#";

  return (
    <AnimationContainer className="bg-[#080809] w-full hover:border-neutral-700 rounded-xl overflow-hidden">
      <MagicCard gradientSize={250} className="w-full">
        <div className="flex flex-col md:flex-row items-start w-full">
          {/* Image Section with Animation */}
          <motion.div
            className="relative w-full md:w-2/5 h-[240px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isImageLoaded ? 1 : 0,
              scale: isImageLoaded ? 1 : 0.95,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-all  duration-500 hover:scale-1250 cursor-pointer"
              style={{
                objectFit: "cover",
                filter: isImageLoaded ? "none" : "blur(10px)",
              }}
              onLoad={() => setIsImageLoaded(true)}
              priority
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#080809] to-transparent opacity-40" /> */}
          </motion.div>

          {/* Content Section */}
          <div className="flex-col items-start p-4 lg:p-5 w-full md:w-3/5">
            <div className="flex flex-col items-start space-y-4">
              <motion.h4
                className="text-lg font-medium text-neutral-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {project?.title}
              </motion.h4>
              <motion.p
                className="text-sm text-neutral-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {project?.description}
              </motion.p>
              <motion.div
                className="flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:justify-between w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                            <div className="flex items-center justify-start flex-wrap gap-2 mt-auto">
                                {stack && stack.length > 0 ? stack.map((item, index) => (
                                    <Badge
                                        key={index}
                                        size="md"
                                        radius="md"
                                        variant="outline"
                                        color="dark"
                                        className="transition-colors duration-300 ease-in-out py-1 ![--badge-height:1.5rem] bg-neutral-600/70 hover:bg-neutral-700"
                                    >
                                        <span className="font-medium text-white flex items-center">
                                            {getIconForTech(item)}
                                            {item}
                                        </span>
                                    </Badge>
                                )) : (
                                    <Badge
                                        size="md"
                                        radius="md"
                                        variant="outline"
                                        color="dark"
                                        className="transition-colors duration-300 ease-in-out py-1 ![--badge-height:1.5rem] bg-neutral-600/70 hover:bg-neutral-700"
                                    >
                                        <span className="font-medium text-white flex items-center">
                                            Technology
                                        </span>
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-end gap-4">
                               {/* Only render GitHub button if project.github exists */}
                               {project.github && (
                                    <Link href={project.github} target="_blank">
                                        <Button variant="outline" size="sm">
                                            <Icons.github className="w-5 h-5" />
                                            <span className="ml-2">
                                                Github
                                            </span>
                                        </Button>
                                    </Link>
                                )}
                                <Link href={viewUrl} target="_blank">
                                    <Button variant="outline" size="sm">
                                        <ExternalLinkIcon className="w-5 h-5" />
                                        <span className="ml-2">
                                            View
                                        </span>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </MagicCard>
    </AnimationContainer>
  )
}

export default ProjectCards

