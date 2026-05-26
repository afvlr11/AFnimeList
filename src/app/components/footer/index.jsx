import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="mt-10 bg-primary border-t border-white/10 px-6 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex flex-col text-sm text-gray-300 text-left">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                        <p className="font-bold text-white">
                            AFnimeList
                        </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                        <p className="italic text-gray-400">
                            Dibuat dengan Next.js & Jikan API
                        </p>
                    </div>
                </div>

                <div className="text-sm text-gray-400 text-left md:text-center">
                    © 2026 AFnimeList. All Rights Reserved.
                </div>
                <div className="flex items-center gap-4 text-2xl text-gray-300">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        className="hover:text-secondary transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        className="hover:text-secondary transition"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://youtube.com/"
                        target="_blank"
                        className="hover:text-secondary transition"
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer