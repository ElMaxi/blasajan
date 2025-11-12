"use client"

import { useState } from "react"

const ROLES = ["Admin", "User", "Editor", "Moderator"]

export function UsersModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "User",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name.trim()) {
      onAdd(formData)
      setFormData({ name: "", role: "User" })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="rounded-2xl p-8 max-w-md w-full space-y-6 border border-violet-500/30 glass animate-in fade-in zoom-in duration-300">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
            Agregar Usuario
          </h2>
          <p className="text-muted-foreground text-sm">Crea un nuevo usuario en el sistema</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Nombre</label>
            <input
              type="text"
              placeholder="Nombre del usuario"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-input border border-violet-500/30 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            />
          </div>

          {/* Role Select */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Rol</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full bg-input border border-violet-500/30 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            >
              {ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
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
