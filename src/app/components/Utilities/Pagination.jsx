const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        if (page < lastPage) {
            setPage(page + 1)
        }
        scrollTop()
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-4 gap-4 md:text-xl text-l">
            <button onClick={handlePrevPage} className="bg-[#D4A373] font-bold p-1 cursor-pointer hover:bg-[#0F172A] hover:text-[#D4A373] transition-all">Prev</button>
            <p>{page} dari {lastPage}</p>
            <button onClick={handleNextPage} className="font-bold bg-[#D4A373] p-1 cursor-pointer hover:bg-[#0F172A] hover:text-[#D4A373] transition-all">Next</button>
        </div>
    )
}

export default Pagination