import Card from '@components/Card'
import ClickableCard from '@components/ClickableCard'
import useWindowWidth from '@hooks/useWindowWidth'
import { CSSProperties, Fragment, useEffect, useState } from 'react'
import ProjectDetail, { InitProjectDetail } from '@interfaces/project_detail'
import projects from '@projects/index.json'
import IconButton from '@components/IconButton'
import Tooltip from '@components/Tooltip'
import Skeleton from '@components/Skeleton'
import LazyImage from '@components/LazyImage'
import {
  JoakIconLink,
  MatchaPizzaIconLink,
  openJoakPage,
  openMatchaPizzaPage,
} from '@utils/github'

const CodingPage = () => {
  const windowWidth = useWindowWidth()
  const tabletView = windowWidth <= 768
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

  const styles: Record<string, Record<string, CSSProperties>> = {
    main: {
      container: {
        flex: 1,
        margin: `${tabletView ? 16 : 64}px ${tabletView ? 16 : 128}px`,
      },

      titleText: {
        fontSize: tabletView ? 32 : 48,
      },
    },
    content: {
      card: {
        padding: 16,
        marginTop: 8,
        marginBottom: 8,
      },
      text: {
        textAlign: 'center',
      },
    },
    avatar: {
      container: {
        margin: 8,
        display: 'grid',
        gridTemplateColumns: windowWidth <= 1400 ? '100%' : '50% 50%',
      },
      card: {
        margin: 8,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      icon: {
        borderRadius: '100%',
      },
      text: {
        marginTop: 8,
        fontSize: 32,
        fontWeight: 'bold',
      },
    },
    project: {
      container: {
        margin: 8,
        display: 'grid',
        gridTemplateColumns: windowWidth <= 1400 ? '100%' : '50% 50%',
      },
      card: {
        padding: 16,
        margin: 8,
      },
      cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      cardImage: {
        marginTop: 8,
        marginBottom: 8,
        objectFit: 'cover',
      },
      buttonContainer: {
        marginTop: 8,
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8,
      },
      iconButton: {
        height: 32,
        width: 32,
      },
    },
  }

  return (
    <div style={styles.main.container}>
      <h1 style={styles.main.titleText}>Coding</h1>
      <Card styles={styles.content.card}>
        <p style={styles.content.text}>
          I love coding. Since this is my hobby account, I have project related
          to games as well.
        </p>
      </Card>
      <div style={styles.project.container}>
        {projectDetailList.map((projectDetail, projectIndex) => (
          <Card
            key={`project-card-${projectIndex}`}
            styles={styles.project.card}
          >
            {projectDetail.loaded ? (
              <Fragment>
                <h2 style={styles.project.cardTitle}>{projectDetail.title}</h2>
                {projectDetail.imagePath && (
                  <LazyImage
                    styles={styles.project.cardImage}
                    src={`/projects/images/${projectDetail.imagePath}`}
                    alt={`${projectDetail.title}`}
                    width="100%"
                    height={300}
                  />
                )}
                <p>{projectDetail.description}</p>
                <div style={styles.project.buttonContainer}>
                  {projectDetail.website && (
                    <Tooltip message="Link">
                      <IconButton
                        styles={styles.project.iconButton}
                        icon="/images/icons/link.png"
                        onClick={() => window.open(projectDetail.website)}
                      />
                    </Tooltip>
                  )}
                  {projectDetail.github && (
                    <Tooltip message="Github Repository">
                      <IconButton
                        styles={styles.project.iconButton}
                        icon="/images/icons/github-mark.png"
                        onClick={() => window.open(projectDetail.github)}
                      />
                    </Tooltip>
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
                <div style={styles.project.buttonContainer}>
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
      <Card styles={styles.content.card}>
        <p style={styles.content.text}>
          I also love AI and NLP. you can check out my git repositories to learn
          more!
        </p>
      </Card>
      <div style={styles.avatar.container}>
        <ClickableCard styles={styles.avatar.card} onClick={openJoakPage}>
          <LazyImage
            height={200}
            width={200}
            styles={styles.avatar.icon}
            src={JoakIconLink}
            alt="joak-icon"
          />
          <p style={styles.avatar.text}>Joak</p>
        </ClickableCard>
        <ClickableCard
          styles={styles.avatar.card}
          onClick={openMatchaPizzaPage}
        >
          <LazyImage
            height={200}
            width={200}
            styles={styles.avatar.icon}
            src={MatchaPizzaIconLink}
            alt="matchapizza-icon"
          />
          <p style={styles.avatar.text}>MatchaPizza</p>
        </ClickableCard>
      </div>
    </div>
  )
}

export default CodingPage
