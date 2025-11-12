"use client"

export function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "add", label: "Agregar", icon: "➕" },
    { id: "users", label: "Usuarios", icon: "👥" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-violet-500/20 glass">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="text-3xl">♪</div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              SonicVerse
            </h1>
          </div>

          <div className="flex gap-1 rounded-full p-1 glass">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/50"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
