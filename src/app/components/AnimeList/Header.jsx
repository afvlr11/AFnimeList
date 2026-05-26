import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between p-4">
            <h3 className="font-bold text-[#0F172A]">{title}</h3>

            {linkHref && linkTitle ?
            <Link href={linkHref} className="underline text-[#0F172A] hover:text-[#D4A373] transition-all">{linkTitle}</Link>
            : null
            }

        </div>
    )
}
export default Header