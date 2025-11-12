"use client"

export function SongGrid({ songs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {songs.map((song) => (
        <div
          key={song.id}
          className="group rounded-xl p-6 space-y-4 cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/30 border border-violet-500/30 glass glass-hover"
        >
          {/* Album Art Placeholder */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-pink-500/20 border border-violet-500/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-violet-500/50 transition-all duration-500">
            <div className="text-6xl opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-500">
              ♪
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Song Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-violet-400 group-hover:to-pink-400 transition-all duration-300 line-clamp-2">
              {song.title}
            </h3>

            {/* Artists */}
            <div className="flex flex-wrap gap-2">
              {song.artists.map((artist, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500/20 to-violet-500/20 text-blue-300 border border-blue-400/30 group-hover:from-blue-500/40 group-hover:to-violet-500/40 group-hover:text-blue-200 transition-all duration-300"
                >
                  {artist}
                </span>
              ))}
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {song.genres.map((genre, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-300 border border-pink-400/30 group-hover:from-pink-500/40 group-hover:to-violet-500/40 group-hover:text-pink-200 transition-all duration-300"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between pt-2 border-t border-violet-500/20">
              <span className="text-sm text-muted-foreground">Duración</span>
              <span className="font-semibold text-violet-400 group-hover:text-pink-400 transition-colors duration-300">
                {song.duration}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
