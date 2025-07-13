'use client'

import Image from 'next/image'
import QRCode from 'react-qr-code'
import { FC } from 'react'
import type { Profile } from '@/types/profile'
import { siGithub, siReddit } from 'simple-icons'

interface ProfileCardProps {
  profile: Profile
}

const getPlatformIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github':
      return siGithub
    case 'reddit':
      return siReddit
    default:
      return null
  }
}

const PlatformIcon: FC<{ platform: string }> = ({ platform }) => {
  const icon = getPlatformIcon(platform)
  if (!icon) return null

  return (
    <div
      className="w-5 h-5 inline-block"
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      style={{ fill: 'currentColor', color: platform === 'reddit' ? '#FF4500' : '#ffffff' }}
      title={platform}
    />
  )
}

const ProfileCard: FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-black p-6 rounded-2xl shadow-xl max-w-md w-full mx-auto flex flex-col items-center space-y-5">
      
      {/* Avatar */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-zinc-800 shadow-md">
        {profile.avatar ? (
          <Image
            src={profile.avatar}
            alt={`${profile.name ?? profile.username}'s avatar`}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm">
            No Avatar
          </div>
        )}
      </div>

      {/* Info */}
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold text-white flex items-center justify-center gap-2">
          {profile.name ?? 'No Name'}
          <PlatformIcon platform={profile.platform} />
        </h2>
        <p className="text-sm text-zinc-400">@{profile.username}</p>
        <p className="text-sm text-zinc-300 mt-1">
          {profile.bio ?? 'No bio provided.'}
        </p>
      </div>

      {/* QR Code */}
      {profile.link ? (
        <div className="p-2 bg-white rounded-2xl shadow-inner border">
          <QRCode
            value={profile.link}
            size={48}
            bgColor="#ffffff"
            fgColor="#000000"
            level="M"
            className="w-20 h-20"
          />
        </div>
      ) : (
        <p className="text-sm text-zinc-500">No link available for QR code.</p>
      )}
    </div>
  )
}

export default ProfileCard