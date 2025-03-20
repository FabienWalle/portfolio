import Image from 'next/image'
import { Company, GithubDark, Preview, Timer } from '../../utils/icons'
import { Experience } from '@/lib/types'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Experience
}

const ExperienceCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    livePreview,
    githubLink,
    duration,
    type,
    cover,
    company,
    location
  } = data

  return (
    <div className="flex flex-col justify-between rounded-[14px] border border-[#1E2D3D] bg-secondary p-4 hover:border-transparent hover:shadow-[0_0_10px_2px_rgba(0,255,0,0.7),0_0_20px_5px_rgba(0,255,0,0.5)] transition-all duration-300">
      <div className="flex items-start justify-between gap-2 ">
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-lg font-medium text-indigo md:font-semibold">{title}</h3>
            {type && (
              <span
                className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] p-1 text-sm ${type === 'New 🔥' ? 'animate-blink text-[#FFA800]' : 'text-mint'} backdrop-blur-[80px]`}>
                {type}
              </span>
            )}
          </div>
          <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
            {company && location && (
              <li className="flex gap-2">
                <Image src={Company} alt="Company Icon" className="size-[18px] md:size-5 text-white" />
                <span className="text-sm">
                  {company} || {location}
                </span>
              </li>
            )}
            {duration && <IconText text={duration} icon={Timer} />}
          </ul>
        </div>
        <figure className="flex justify-end overflow-hidden">
          <Image
            src={cover}
            width={150}
            height={80}
            alt="Project Cover"
            className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </figure>
      </div>

      <div>
        <div className="my-4 h-[100px] overflow-scroll rounded-2xl bg-primary px-4 py-2 text-primary">
          <p className="text-[14px] font-normal md:text-base">{shortDescription}</p>
        </div>
        <div className="flex gap-5">
          {livePreview && (
            <a
              href={livePreview}
              className="flex gap-2 text-sm text-mint underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank">
              <Image src={Preview} alt="view icon" className="h-auto w-[18px] md:w-5" />
              <span>Voir en direct</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="flex gap-2 text-sm text-mint underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank">
              <Image src={GithubDark} alt="github icon" className="w-[18px] md:w-5" />
              <span>Dépôt Github</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
