'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { Ellipse, HeroImage } from '../../utils/images'
import DownloadResumeButton from '../buttons/DownloadResumeButton'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: ['Développeur PHP Symfony Laravel', 'Développeur Typescript React NextJs'] })

  return (
    <section className="min-h-[calc(dvh-4rem)] bg-primary bg-small-glow bg-small-glow-position bg-no-repeat md:bg-large-glow-position lg:bg-large-glow">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pb-10 pt-12 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="mb-2 block text-3xl font-bold text-white">Bonjour - Je Suis Fabien Walle</span>
            <span className="block text-[1.5rem] sm:text-[1.75rem] font-bold text-mint md:w-[50vw]">{role}</span>
          </h1>

          <h2 className="mt-3">Je transforme vos idées en expériences numériques fluides et innovantes</h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="mailto:fabienwalle13@gmail.com"
              aria-label="Connect with me"
              className="min-w-32 cursor-pointer rounded-lg bg-mint px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E] flex items-center">
              Travaillons ensemble
            </a>
            <a
              href="https://www.linkedin.com/in/fabien-walle/"
              target='_blank'
              aria-label="View LinkedIn Profile"
              className="flex items-center cursor-pointer rounded-lg bg-[#1C2B3A] px-[14px] py-[10px] text-sm text-white">
              Profil Linkedin
            </a>
            <DownloadResumeButton/>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="John Doe - Full Stack Developer"
              className="object-contain p-7"
            />
            <Image
              ref={ellipseRef}
              src={Ellipse}
              alt="decorative ellipse"
              fill={true}
              // sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              className="absolute left-0 top-0 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
