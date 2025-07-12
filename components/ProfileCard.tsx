import { Profile } from '@/types/profile'

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl shadow-lg max-w-md text-center space-y-2">
      <img src={profile.avatar || ''} alt="Avatar" className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-semibold">{profile.name || 'No Name'}</h2>
      <p className="text-zinc-400">@{profile.username}</p>
      <p className="text-zinc-300">{profile.bio || 'No bio provided.'}</p>
      <p className="text-sm mt-2 text-zinc-500">Platform: {profile.platform}</p>
    </div>
  )
}