export async function fetchRedditProfile(username: string) {
  const res = await fetch(`https://www.reddit.com/user/${username}/about.json`)
  if (!res.ok) throw new Error('Reddit API failed')
  const data = (await res.json()).data

  return {
    platform: 'reddit',
    username: data.name,
    name: null,
    avatar: data.icon_img || null,
    bio: data.subreddit?.public_description || null,
  }
}