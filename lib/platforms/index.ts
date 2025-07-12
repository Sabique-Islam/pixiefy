import { fetchGitHubProfile } from './github'
import { fetchRedditProfile } from './reddit'

type ProfileResult = {
  platform: string
  username: string
  name: string | null
  avatar: string | null
  bio: string | null
}

export async function fetchProfileFromUrl(url: string): Promise<ProfileResult> {
  if (url.includes('github.com')) {
    const username = url.split('github.com/')[1].split('/')[0]
    return fetchGitHubProfile(username)
  }

  if (url.includes('reddit.com')) {
    const username = url.split('reddit.com/user/')[1].split('/')[0]
    return fetchRedditProfile(username)
  }

  throw new Error('Unsupported platform')
}