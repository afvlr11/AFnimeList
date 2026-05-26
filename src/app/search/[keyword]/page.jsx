import Header from "../../components/AnimeList/Header"
import AnimeList from "../../components/AnimeList"
import { getAnimeResponse } from "@/app/libs/api-libs"

const Page = async ({params}) => {
  const {keyword} = await params
  const decodedKey = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKey}`)
  return (
  <>
    <section>
      <Header title={`Pencarian untuk ${decodedKey}`}/>
      <AnimeList api={searchAnime}/>
    </section>
  </>
  )
}

export default Page