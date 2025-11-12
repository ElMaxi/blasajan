"use client"

import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simular login
    setTimeout(() => {
      setIsLoading(false)
      alert(`Login con: ${email}`)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Card de login */}
      <div className="relative w-full max-w-md">
        <div className="glass rounded-2xl p-8 md:p-10 border border-violet-500/30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4 inline-block">♪</div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
              SonicVerse
            </h1>
            <p className="text-muted-foreground text-sm">Accede a tu mundo musical</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Email */}
            <div className="group">
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-input border border-violet-500/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Input Password */}
            <div className="group">
              <label className="block text-sm font-medium text-foreground mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-input border border-violet-500/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Botón Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-8 py-3 px-4 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Iniciando sesión..." : "Entrar"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-violet-500/20"></div>
            <span className="text-xs text-muted-foreground">O continúa con</span>
            <div className="flex-1 h-px bg-violet-500/20"></div>
          </div>

          {/* Botones alternativos */}
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2 px-3 border border-violet-500/30 rounded-lg text-foreground hover:bg-violet-500/10 transition-all duration-300">
              Google
            </button>
            <button className="py-2 px-3 border border-violet-500/30 rounded-lg text-foreground hover:bg-violet-500/10 transition-all duration-300">
              GitHub
            </button>
          </div>

          {/* Link Registrarse */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            ¿No tienes cuenta?{" "}
            <a
              href="/register"
              className="text-violet-400 hover:text-violet-300 transition-colors duration-300 font-medium"
            >
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
