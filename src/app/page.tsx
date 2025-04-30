import { skillList } from '@/appData'
import ExperienceSection from '@/components/Experiences/ExperiencesSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import { getAllExperiences, getAllProjects } from '@/services'

export default async function Home() {
  const projects = (await getAllProjects()).reverse()
  const experiences = await getAllExperiences()

  return (
    <>
      <main className="w-dvw">
        <Hero />
        <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
          <ExperienceSection experiences={experiences}/>
          <ProjectSection projects={projects} />
          <ServiceSection />
        </div>
        <div className="mb-[3.75rem]">
          <Skills skills={skillList} />
        </div>
      </main>
    </>
  )
}
