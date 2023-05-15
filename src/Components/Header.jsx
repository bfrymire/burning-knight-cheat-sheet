export default function Header() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="w-full h-[64px] text-sm flex justify-end">
            <form onSubmit={handleOnSubmit}>
                <input className="h-full bg-slate-200 p-5 text-black focus:outline-none" type="text" placeholder="Search for Anything!" />
            </form>
        </div>
    );
}
