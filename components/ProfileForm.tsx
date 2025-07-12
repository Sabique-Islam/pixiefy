'use client'

import { useState } from 'react'
import { Profile } from '@/types/profile'
import ProfileCard from './ProfileCard'

export default function ProfileForm() {
  const [url, setUrl] = useState('')
  const [profile, setProfile] = useState<Profile | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`/api/parse?url=${encodeURIComponent(url)}`)
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Unknown error')

      setProfile(data)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      setProfile(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Paste the URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 rounded bg-black border border-zinc-700"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black hover:bg-gray-800 rounded text-white border border-zinc-700"
        >
          {loading ? 'Loading...' : 'Generate'}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {profile && <ProfileCard profile={profile} />}
    </div>
  )
}