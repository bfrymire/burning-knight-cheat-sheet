const handleOnSubmit = (e) => {
    e.preventDefault();
}

export default function ItemSearch() {
    return (
        <form onSubmit={handleOnSubmit}>
            <input className="h-full bg-slate-200 p-5 text-black focus:outline-none" type="text" placeholder="Search for Anything!" />
        </form>
    );
}
