export default function Header() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="w-full h-12 text-sm flex justify-end drop-shadow-md">
            <form onSubmit={handleOnSubmit}>
                <input className="h-full bg-slate-200 p-5 text-black focus:outline-none" type="text" placeholder="Search for Anything!" />
            </form>
        </div>
    );
}
