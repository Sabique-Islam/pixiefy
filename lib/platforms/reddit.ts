// Types for better type safety
interface RedditAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

interface RedditSubreddit {
  title?: string;
  public_description?: string;
  icon_img?: string;
}

interface RedditUserData {
  name: string;
  icon_img?: string;
  snoovatar_img?: string;
  subreddit?: RedditSubreddit;
}

interface RedditApiResponse {
  data: RedditUserData;
}

interface RedditProfile {
  platform: 'reddit';
  username: string;
  name: string | null;
  avatar: string | null;
  bio: string | null;
  link: string;
}

export async function fetchRedditProfile(username: string): Promise<RedditProfile> {
  const authResponse = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Pixiefy/1.0'
    },
    body: 'grant_type=client_credentials'
  });

  if (!authResponse.ok) throw new Error('Reddit auth failed');
  const authData: RedditAuthResponse = await authResponse.json();

  const res = await fetch(`https://oauth.reddit.com/user/${username}/about`, {
    headers: {
      'Authorization': `Bearer ${authData.access_token}`,
      'User-Agent': 'Pixiefy/1.0'
    }
  });

  if (!res.ok) throw new Error('Reddit API failed');
  const response: RedditApiResponse = await res.json();
  const data = response.data;

  let avatar: string | null = data.icon_img || data.snoovatar_img || null;
  if (avatar) {
    avatar = avatar.replace(/&amp;/g, '&');
  }

  return {
    platform: 'reddit',
    username: data.name,
    name: data.subreddit?.title || data.name || null,
    avatar,
    bio: data.subreddit?.public_description || null,
    link: `https://www.reddit.com/user/${username}`
  };
}