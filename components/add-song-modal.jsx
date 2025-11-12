"use client"

import { useState } from "react"

export function AddSongModal({ onClose, onAdd, artists, genres }) {
  const [formData, setFormData] = useState({
    title: "",
    artists: [],
    genres: [],
    duration: "3:00",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title.trim()) {
      onAdd(formData)
      setFormData({ title: "", artists: [], genres: [], duration: "3:00" })
    }
  }

  const toggleArtist = (artist) => {
    setFormData({
      ...formData,
      artists: formData.artists.includes(artist)
        ? formData.artists.filter((a) => a !== artist)
        : [...formData.artists, artist],
    })
  }

  const toggleGenre = (genre) => {
    setFormData({
      ...formData,
      genres: formData.genres.includes(genre)
        ? formData.genres.filter((g) => g !== genre)
        : [...formData.genres, genre],
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="rounded-2xl p-8 max-w-md w-full space-y-6 border border-violet-500/30 glass animate-in fade-in zoom-in duration-300">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
            Agregar Canción
          </h2>
          <p className="text-muted-foreground text-sm">Completa los detalles de la canción</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Título</label>
            <input
              type="text"
              placeholder="Nombre de la canción"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-input border border-violet-500/30 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            />
          </div>

          {/* Duration Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Duración</label>
            <input
              type="text"
              placeholder="3:45"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full bg-input border border-violet-500/30 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            />
          </div>

          {/* Artists Selection */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Artistas</label>
            <div className="flex flex-wrap gap-2">
              {artists.map((artist) => (
                <button
                  key={artist.id}
                  type="button"
                  onClick={() => toggleArtist(artist.name)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    formData.artists.includes(artist.name)
                      ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/50"
                      : "bg-input border border-violet-500/30 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {artist.name}
                </button>
              ))}
            </div>
          </div>

          {/* Genres Selection */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Géneros</label>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  type="button"
                  onClick={() => toggleGenre(genre.name)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    formData.genres.includes(genre.name)
                      ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/50"
                      : "bg-input border border-violet-500/30 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
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
              className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
