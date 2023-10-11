import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-slate-800/50 rounded-lg px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>Coding With Rom</Link>
            <Link className="bg-white p-2 rounded-md " href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}