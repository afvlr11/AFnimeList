import Footer from "@/app/components/footer"
import VideoPlayer from "@/app/components/Utilities/videoPlayer"
import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"
import YouTube from "react-youtube"

const Page = async ({params}) => {
    const {id} = await params
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)

    const youtubeId = anime.data.trailer?.embed_url
        ?.split("/embed/")[1]
        ?.split("?")[0]

    return (
        <>
        <main className="flex-1">
            <div className="pt-4 px-4 font-bold">
                <h3>Judul: {anime.data.title}</h3>
            </div>
            <div className="pt-2 px-4 flex gap-2 overflow-x-auto    scroll-smooth touch-pan-x md-text-xl text-xs">
                {anime.data.rank && (
                    <div className="w-40 flex flex-col justify-center items-center rounded bg-primary text-accent p-1 shrink-0">
                      <h3 className="font-bold">PERINGKAT</h3>
                      <p>{anime.data.rank}</p>
                    </div>
                )}
                    {anime.data.score && (
                     <div className="w-40 flex flex-col justify-center items-center rounded bg-primary text-accent p-1 shrink-0">
                        <h3 className="font-bold">SKOR</h3>
                        <p>{anime.data.score}</p>
                    </div>
                )}
                {anime.data.year && (
                    <div className="w-40 flex flex-col justify-center items-center rounded bg-primary text-accent p-1 shrink-0">
                        <>
                            <h3 className="font-bold">Tahun</h3>
                            <p>{anime.data.year}</p>
                        </>
                    </div>
                )}
                {anime.data.episodes && (
                    <>
                        <div className="w-40 flex flex-col justify-center items-center rounded bg-primary text-accent p-1 shrink-0">
                            <h3 className="font-bold">EPISODE</h3>
                            <p>{anime.data.episodes}</p>
                         </div>
                    </>
                )}
                <div className="w-40 flex flex-col justify-center items-center rounded bg-primary text-accent p-1 shrink-0">
                    <h3 className="font-bold">GENRE :</h3>
                    <div className="flex flex-wrap gap-1 justify-center">
                        {anime.data.genres.map((genre) => {
                            return (
                                <p key={genre.mal_id}>{genre.name}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2">
                <Image 
                src={anime.data.images.webp.image_url}
                alt=""
                width={250}
                height={250}/>
                <div className="gap-2">
                    <h3 className="font-bold">Synopsis :</h3>
                    <p className="text-justify">{anime.data.synopsis}</p>
                    {anime.data.background && (
                        <>
                            <h3 className="font-bold">Background :</h3>
                            <p className="text-justify">{anime.data.background}</p>
                        </>
                        )
                    }
                </div>
            </div>
            <div>
                    {youtubeId ? (
                        <VideoPlayer youtubeId={youtubeId}/>
                    ) : (
                        <p className="pt-4 px-4 font-bold italic">"Trailer tidak tersedia"</p>
                    )}
            </div>
        </main>
        </>

    )
}

export default Page