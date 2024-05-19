import Card from '@components/Card'
import LinkCard from '@components/LinkCard'
import { Fragment, useEffect, useState } from 'react'
import ProjectDetail, { InitProjectDetail } from '@interfaces/projects'
import projects from '@projects/index.json'
import IconButton from '@components/IconButton'
import Skeleton from '@components/Skeleton'
import LazyImage from '@components/LazyImage'
import {
  JoakGithubRepo,
  JoakIconLink,
  MatchaPizzaGithubRepo,
  MatchaPizzaIconLink,
} from '@utils/github'
import './index.css'

const CodingPage = () => {
  const [projectDetailList, setProjectDetailList] = useState<
    Array<ProjectDetail>
  >(
    projects.map((project) => ({
      ...InitProjectDetail,
      id: project.id,
    })),
  )

  useEffect(() => {
    projects.forEach(async (project) => {
      try {
        const projectDetail: ProjectDetail = await import(
          `@projects/${project.path}`
        )
        setProjectDetailList((list) =>
          list.map((element) =>
            element.id === projectDetail.id && !element.loaded
              ? { ...projectDetail, loaded: true }
              : element,
          ),
        )
      } catch (err) {
        console.error(`failed to load from ${project.path}`)
      }
    })
  }, [])

  return (
    <div className="coding-container">
      <h1 className="title">Coding</h1>
      <Card className="text-card">
        <p>
          I love coding. Since this is my hobby account, I have project related
          to games as well.
        </p>
      </Card>
      <div className="project-container">
        {projectDetailList.map((projectDetail, projectIndex) => (
          <Card key={`project-card-${projectIndex}`}>
            {projectDetail.loaded ? (
              <Fragment>
                <h2>{projectDetail.title}</h2>
                {projectDetail.image && (
                  <LazyImage
                    src={`/projects/images/${projectDetail.image.path}`}
                    hash={projectDetail.image.hash}
                    originalWidth={projectDetail.image.originalWidth}
                    originalHeight={projectDetail.image.originalHeight}
                    alt={`${projectDetail.title}`}
                    width="100%"
                    height={300}
                  />
                )}
                <p>{projectDetail.description}</p>
                <div className="button-container">
                  {projectDetail.website && (
                    <IconButton
                      icon="/images/icons/link.png"
                      title="Link"
                      onClick={() => window.open(projectDetail.website)}
                    />
                  )}
                  {projectDetail.github && (
                    <IconButton
                      icon="/images/icons/github-mark.png"
                      title="Github Repository"
                      onClick={() => window.open(projectDetail.github)}
                    />
                  )}
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <Skeleton width="100%" height={28} />
                <Skeleton
                  width="100%"
                  height={300}
                  styles={{ margin: '8px 0px' }}
                />
                <Skeleton width="100%" height={19} />
                <div className="button-container">
                  <Skeleton
                    width={32}
                    height={32}
                    styles={{ borderRadius: '100%' }}
                  />
                  <Skeleton
                    width={32}
                    height={32}
                    styles={{ borderRadius: '100%' }}
                  />
                </div>
              </Fragment>
            )}
          </Card>
        ))}
      </div>
      <Card className="text-card">
        <p>
          I also love AI and NLP. you can check out my git repositories to learn
          more!
        </p>
      </Card>
      <div className="avatar-container">
        <LinkCard href={JoakGithubRepo} title="Joak">
          <LazyImage
            height={200}
            width={200}
            src={JoakIconLink}
            hash="UDC72MgN00IC0cbb}hxGEGoL,xR%}8RP5uoz"
            originalWidth={460}
            originalHeight={460}
            alt="joak-icon"
          />
          <p>Joak</p>
        </LinkCard>
        <LinkCard href={MatchaPizzaGithubRepo} title="MatchaPizza">
          <LazyImage
            height={200}
            width={200}
            src={MatchaPizzaIconLink}
            hash="UCAU%CuS8xEm7Bv;h~eb4TN4-rt0{Nk8C6o?"
            originalWidth={460}
            originalHeight={460}
            alt="matchapizza-icon"
          />
          <p>MatchaPizza</p>
        </LinkCard>
      </div>
    </div>
  )
}

export default CodingPage
