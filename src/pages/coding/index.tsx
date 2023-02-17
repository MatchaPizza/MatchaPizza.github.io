import Card from '@components/Card'
import ClickableCard from '@components/ClickableCard'
import useTabletView from '@hooks/useTabletView'
import useWindowWidth from '@hooks/useWindowWidth'
import { CSSProperties, useEffect, useState } from 'react'
import ProjectDetail from 'src/interfaces/project_detail'
import projects from '@projects/index.json'
import IconButton from '@components/IconButton'
import Tooltip from '@components/Tooltip'

const CodingPage = () => {
  const tabletView = useTabletView()
  const windowWidth = useWindowWidth()
  const [projectsDetail, setProjectsDetail] = useState<Array<ProjectDetail>>([])

  useEffect(() => {
    projects.forEach(async (project) => {
      const detail = await import(`@projects/${project.path}`)
      setProjectsDetail([...projectsDetail, detail])
    })
  }, [projects])

  const openMatchaPizzaPage = () => {
    window.open('https://github.com/matchapizza')
  }

  const openJoakPage = () => {
    window.open('https://github.com/joakqq')
  }

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
      },
    },
    card: {
      content: {
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
        height: 200,
        width: 200,
        borderRadius: '100%',
        backgroundColor: 'gray',
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
        width: '100%',
        height: 300,
        objectFit: 'cover',
        backgroundColor: 'gray',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
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
        <p style={styles.card.content}>
          I love coding. Since this is my hobby account, I have project related
          games as well.
        </p>
      </Card>
      <div style={styles.project.container}>
        {projectsDetail.map((projectDetail, projectIndex) => {
          return (
            <Card
              key={`clickable-card-${projectIndex}`}
              styles={styles.project.card}
            >
              <h2 style={styles.project.cardTitle}>{projectDetail.title}</h2>
              {projectDetail.imagePath && (
                <img
                  style={styles.project.cardImage}
                  src={`/projects/images/${projectDetail.imagePath}`}
                  alt={`${projectDetail.title}`}
                  loading="lazy"
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
                  <Tooltip message="Github repository">
                    <IconButton
                      styles={styles.project.iconButton}
                      icon="/images/icons/github-mark.png"
                      onClick={() => window.open(projectDetail.github)}
                    />
                  </Tooltip>
                )}
              </div>
            </Card>
          )
        })}
      </div>
      <Card styles={styles.content.card}>
        <p style={styles.card.content}>
          I also love AI and NLP. you can check out my git repositories to learn
          more!
        </p>
      </Card>
      <div style={styles.avatar.container}>
        <ClickableCard styles={styles.avatar.card} onClick={openJoakPage}>
          <img
            style={styles.avatar.icon}
            src="https://avatars.githubusercontent.com/u/47177060"
            alt="joak-icon"
            loading="lazy"
          />
          <p style={styles.avatar.text}>Joak</p>
        </ClickableCard>
        <ClickableCard
          styles={styles.avatar.card}
          onClick={openMatchaPizzaPage}
        >
          <img
            style={styles.avatar.icon}
            src="https://avatars.githubusercontent.com/u/124992812"
            alt="matchapizza-icon"
            loading="lazy"
          />
          <p style={styles.avatar.text}>MatchaPizza</p>
        </ClickableCard>
      </div>
    </div>
  )
}

export default CodingPage
