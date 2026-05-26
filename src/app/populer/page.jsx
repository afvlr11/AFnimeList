"use client"

import React, { useEffect, useState } from "react"
import HeaderMenu from "../components/Utilities/HeaderMenu"
import Pagination from "../components/Utilities/Pagination"
import AnimeList from "../components/AnimeList"
import { getAnimeResponse } from "../libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState()
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        const data = await getAnimeResponse("top/anime", `page=${page}`)

        setTopAnime(data)
        setLastPage(data.pagination?.last_visible_page)
    }

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <div>
            <HeaderMenu title={`Anime Terpopuler #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination page={page} lastPage={lastPage} setPage={setPage}/>
        </div>
    )
}

export default Page