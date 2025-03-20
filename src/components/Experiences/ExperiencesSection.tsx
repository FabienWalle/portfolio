import { Project } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ExperienceCard from './ExperienceCard'

interface ProjectSectionProps {
  experiences: Project[]
}

const ExperienceSection: React.FC<ProjectSectionProps> = ({ experiences }) => {
  return (
    <section id="projects">
      <SectionHeading title="// Projets et apprentissages" />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.priority} data={experience} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
