import { Project } from '@/lib/types'
import { promises as fs } from 'fs'
import path from 'path'

const readProjectFile = async (filePath: string): Promise<Project> => {
  const projectData = await fs.readFile(filePath, 'utf8')
  return JSON.parse(projectData)
}

const getAllProjects = async (): Promise<Project[]> => {
  try {
    const projectsPath = path.join(process.cwd(), '/content/projects')
    const projectsName = await fs.readdir(projectsPath)

    const projects = await Promise.all(
      projectsName.map(async (projectName) => {
        const filePath = path.join(projectsPath, projectName)
        const projectDetails = await readProjectFile(filePath)
        return projectDetails
      }),
    )

    projects.sort((a, b) => a.priority - b.priority)

    return projects
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

const getAllExperiences = async (): Promise<Project[]> => {
  try {
    const experiencesPath = path.join(process.cwd(), '/content/experiences')
    const experiencesName = await fs.readdir(experiencesPath)

    const experiences = await Promise.all(
      experiencesName.map(async (experienceName) => {
        const filePath = path.join(experiencesPath, experienceName)
        const experiencesDetails = await readProjectFile(filePath)
        return experiencesDetails
      }),
    )

    experiences.sort((a, b) => a.priority - b.priority)

    return experiences
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export { getAllProjects, getAllExperiences }
