import Header from "./components/AnimeList/Header"
import AnimeList from "./components/AnimeList"
import { getAnimeResponse } from "./libs/api-libs"
import Footer from "./components/footer"

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=10`)

  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  return (
  <>
    <section>
      <Header title="Paling Populer" linkHref="../populer" linkTitle="Lihat Semua"/>
      <AnimeList api={topAnime}/>
    </section>
    <Footer/>
  </>
  )
}

export default Page