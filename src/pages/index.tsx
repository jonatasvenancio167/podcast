import { GetStaticProps } from 'next'
import { usePlayer } from '../contexts/PlayerContext'
import { format, parseISO } from 'date-fns'
import { api } from '../services/api'
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString'

import { Li, TitleEpisode, Button, Th, Td } from './home'

import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './home.module.scss'

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

type HomeProps = {
  latestEpisodes: Episode[]
  allEpisodes: Episode[]
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  const { playList } = usePlayer()

  const episodeList = [...latestEpisodes, ...allEpisodes]


  return (
      <div className={styles.homepage}>
        <Head>
          <title>Home | Podcastr</title>
          <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
        </Head>
        <section className={styles.latestEpisodes}>
          <h2>Últimos lançamentos</h2>
          
          <ul>
            {latestEpisodes.map((episode, index) => {
              return (
                <Li key={episode.id}>
                  <Image 
                    width={192}
                    height={192}
                    src={episode.thumbnail}
                    alt={episode.title}
                    objectFit="cover"
                  />

                  <div className={styles.episodeDetails}>
                    <Link href={`/episodes/${episode.id}`}>
                      <TitleEpisode>{episode.title}</TitleEpisode>
                    </Link>
                    <p>{episode.members}</p>
                    <span>{episode.durationAsString}</span>
                  </div>

                  <Button type='button' onClick={() => playList(episodeList, index)}>
                    <img src="/play-green.svg" alt="Tocar episódio"/>
                  </Button>
                </Li>
              )
            })}
          </ul>
        </section>

        <section className={styles.allEpisodes}>
            <h2>Todos episódios</h2>
            
            <table cellSpacing={0}>
              <thead>
                <tr>
                  <Th></Th>
                  <Th>Podcast</Th>
                  <Th>Integrantes</Th>
                  <Th>Data</Th>
                  <Th>Duração</Th>
                  <Th></Th>
                </tr>
              </thead>
              <tbody>
                {allEpisodes.map((episode, index) => {
                  return (
                    <tr key={episode.id}>
                      <Td style={{ width: 72 }}>
                        <Image
                          width={120}
                          height={120}
                          src={episode.thumbnail}
                          alt={episode.title}
                          objectFit="cover"
                        />
                      </Td>
                      <Td>
                        <Link href={`/episodes/${episode.id}`}>
                          <TitleEpisode>{episode.title}</TitleEpisode>
                        </Link>
                      </Td>
                      <Td>{episode.members}</Td>
                      <Td style={{ width: 100 }}>{episode.publishedAt}</Td>
                      <Td>{episode.durationAsString}</Td>
                      <Td>
                        <Button type='button' onClick={() =>  playList(episodeList, index + latestEpisodes.length)}>
                          <img src="/play-green.svg" alt="Tocar episódio"/>
                        </Button>
                      </Td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </section>
      </div>
    )
}

export const getStaticProps: GetStaticProps = async() => {
  const { data } = await api.get('episodes',{
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })
  // const data = await response.data
  const episodes = data.map(episode => {
    return{
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url,
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return{
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8,
  }
}
