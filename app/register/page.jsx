"use client"

import { useState } from "react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }
    setIsLoading(true)
    // Simular registro
    setTimeout(() => {
      setIsLoading(false)
      alert(`Registro exitoso: ${formData.email}`)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Card de registro */}
      <div className="relative w-full max-w-md">
        <div className="glass rounded-2xl p-8 md:p-10 border border-violet-500/30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4 inline-block">♪</div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
              SonicVerse
            </h1>
            <p className="text-muted-foreground text-sm">Únete a nuestra comunidad musical</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Nombre */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-input border border-violet-500/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-input border border-violet-500/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Input Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-input border border-violet-500/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Input Confirmar Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Confirmar contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-input border border-violet-500/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Botón Registrarse */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creando cuenta..." : "Registrarse"}
            </button>
          </form>

          {/* Link Login */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            ¿Ya tienes cuenta?{" "}
            <a
              href="/login"
              className="text-violet-400 hover:text-violet-300 transition-colors duration-300 font-medium"
            >
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
