import './news.module.scss';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface NewsProps {}
export interface PeaceOfNews {
  id: number,
  title: string,
  description: string,
  createdAt: number
}

export function News(props: NewsProps) {
  const [news, setNews] = useState([] as PeaceOfNews[]);
  const sortNews = (news: PeaceOfNews[]) => {
    return news.sort((a, b) => a.createdAt - b.createdAt)
  }

  // const s = (a: PeaceOfNews[], b: PeaceOfNews[]) => {
  //   return news.sort((a, b) => a.createdAt - b.createdAt)
  // }

  // use useMemo to cache things
  // function sortNews(news: PeaceOfNews[]) { return useMemo(() => s(news, news), [news]) }

  useEffect(() => {
    fetch('http://localhost:3001/api/news')
      .then(response => response.json())
      .then(news => {
        const sortedNews = sortNews(news);

        setNews(sortedNews);
      })
  }, []);

  return (
    <div>
      <h1>Последние новости</h1>
      <ul>
      {news.map(peaceOfNews => {
        return <li key={peaceOfNews.id}>
          <h2>{peaceOfNews.title}</h2>
          <p>{peaceOfNews.description}</p>
          <hr/>
        </li>
      })}
      </ul>
    </div>
  );
}

export default News;