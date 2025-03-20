import { Github, LinkedIn} from '@/utils/icons'
import Image from 'next/image'

const socialIcons = [
  { href: 'https://github.com/FabienWalle?tab=repositories', icon: Github },
  { href: 'https://www.linkedin.com/in/fabien-walle/', icon: LinkedIn },
]

const footerSections = [
  { title: 'Fabien Walle', href: '#home', content: 'Des applications conçues avec rigueur et satisfaction client.' },
  { title: 'À propos', href: '#experiences', content: 'Découvrez mon parcours et mon expertise.' },
  { title: 'Projets', href: '#projects', content: 'Découvrez ce sur quoi je travaille.' },
  { title: 'Compétences', href: '#skills', content: 'Technologies et outils dans lesquels j\'excelle.' },
  {
    title: 'Services',
    href: '#services',
    content: 'Ce que je peux apporter à vos projets.',
  },
];

const Footer = () => (
  <footer id="contact" className="bg-secondary px-4 text-white md:px-0">
    <div className="mx-auto max-w-[1200px] py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        {footerSections.map((section, index) => (
          <section
            key={index}
            className="rounded-lg transition-colors duration-300 hover:bg-primary md:p-4">
            <a href={section.href} className="block">
              <h2 className="text-base font-semibold text-white lg:text-lg">{section.title}</h2>
              <p className="mt-2 text-sm text-gray-400">{section.content}</p>
            </a>
          </section>
        ))}
      </div>
    </div>

    <hr className="h-0 w-full border-t border-[#2B3E6E]" />

    <div className="mx-auto max-w-[1200px] px-4 py-8">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <p className="mb-4 text-sm font-normal md:mb-0">© 2025 Fabien Walle | Coded with 💜</p>
        <ul className="flex space-x-5">
          {socialIcons.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer bg-transparent transition-transform duration-300 hover:scale-110">
              <a href={item.href} target='_blank' className="flex h-full w-full items-center justify-center">
                <Image src={item.icon} width={22} height={22} alt={item.href} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
