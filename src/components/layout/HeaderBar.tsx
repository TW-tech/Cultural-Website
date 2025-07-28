export default function HeaderBar() {
    return (
        <header className="flex items-center justify-between p-1 bg-white" style={{color: '#103638'}}>
        <div className="flex items-center space-x-4">
            <div className="w-8 h-8 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-[#103638]"></div>
                <div className="w-full h-0.5 bg-[#103638]"></div>
                <div className="w-full h-0.5 bg-[#103638]"></div>
            </div>
            <h1 className="text-xl font-bold">文化傳承網站</h1>
        </div>
        <nav className="space-x-4">
            <a href="/" className="hover:underline">首頁</a>
            <a href="/about" className="hover:underline">關於我們</a>
            <a href="/contact" className="hover:underline">聯絡我們</a>
        </nav>
        </header>
    );
}