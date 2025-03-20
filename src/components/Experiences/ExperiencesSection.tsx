import { Experience } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ExperienceCard from './ExperienceCard'

interface ExperiencesSectionProps {
  experiences: Experience[]
}

const ExperienceSection: React.FC<ExperiencesSectionProps> = ({ experiences }) => {
  return (
    <section id="experiences">
      <SectionHeading title="// Expériences professionnelles" />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.priority} data={experience} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
