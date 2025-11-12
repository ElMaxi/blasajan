"use client"

import { useState } from "react"

export function AddArtistGenreModal({ onClose, onAddArtist, onAddGenre }) {
  const [activeTab, setActiveTab] = useState("artist")
  const [artistName, setArtistName] = useState("")
  const [genreName, setGenreName] = useState("")

  const handleAddArtist = (e) => {
    e.preventDefault()
    if (artistName.trim()) {
      onAddArtist({ name: artistName })
      setArtistName("")
    }
  }

  const handleAddGenre = (e) => {
    e.preventDefault()
    if (genreName.trim()) {
      onAddGenre({ name: genreName })
      setGenreName("")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="rounded-2xl p-8 max-w-md w-full space-y-6 border border-violet-500/30 glass animate-in fade-in zoom-in duration-300">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
            Agregar Contenido
          </h2>
          <p className="text-muted-foreground text-sm">Crea nuevos artistas y géneros</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 bg-input rounded-lg p-1">
          <button
            onClick={() => setActiveTab("artist")}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "artist"
                ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/50"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Artista
          </button>
          <button
            onClick={() => setActiveTab("genre")}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "genre"
                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/50"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Género
          </button>
        </div>

        {/* Artist Form */}
        {activeTab === "artist" && (
          <form onSubmit={handleAddArtist} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Nombre del Artista</label>
              <input
                type="text"
                placeholder="Ej: Luna Echo"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                className="w-full bg-input border border-violet-500/30 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 rounded-lg border border-violet-500/30 text-foreground hover:bg-violet-500/10 transition-all duration-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                Agregar Artista
              </button>
            </div>
          </form>
        )}

        {/* Genre Form */}
        {activeTab === "genre" && (
          <form onSubmit={handleAddGenre} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Nombre del Género</label>
              <input
                type="text"
                placeholder="Ej: Synthwave"
                value={genreName}
                onChange={(e) => setGenreName(e.target.value)}
                className="w-full bg-input border border-violet-500/30 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 rounded-lg border border-violet-500/30 text-foreground hover:bg-violet-500/10 transition-all duration-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                Agregar Género
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
