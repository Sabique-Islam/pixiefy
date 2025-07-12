import { Octokit } from '@octokit/core'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

export async function fetchGitHubProfile(username: string) {
  try {
    const res = await octokit.request('GET /users/{username}', {
      username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    const data = res.data

    return {
      platform: 'github',
      username: data.login,
      name: data.name,
      avatar: data.avatar_url,
      bio: data.bio,
    }
  } catch (err: unknown) {
    console.error('GitHub API Error:', (err as Error).message)
    throw new Error('Failed to fetch GitHub profile')
  }
}