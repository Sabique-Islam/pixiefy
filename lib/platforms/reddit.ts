export async function fetchRedditProfile(username: string) {

  const authResponse = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Pixiefy/1.0'
    },
    body: 'grant_type=client_credentials'
  })

  if (!authResponse.ok) throw new Error('Reddit auth failed')
  const authData = await authResponse.json()

  const res = await fetch(`https://oauth.reddit.com/user/${username}/about`, {
    headers: {
      'Authorization': `Bearer ${authData.access_token}`,
      'User-Agent': 'Pixiefy/1.0'
    }
  })

  if (!res.ok) throw new Error('Reddit API failed')
  const data = (await res.json()).data

  return {
    platform: 'reddit',
    username: data.name,
    name: data.subreddit?.title || null,
    avatar: data.icon_img || data.snoovatar_img || null,
    bio: data.subreddit?.public_description || null,
    link: `https://www.reddit.com/user/${username}`
  }
}