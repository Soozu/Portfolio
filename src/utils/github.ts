import { Octokit } from 'octokit';

const octokit = new Octokit();

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
}

export const fetchGitHubData = async (username: string) => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      octokit.rest.users.getByUsername({ username }),
      octokit.rest.repos.listForUser({ username, sort: 'updated', per_page: 6 })
    ]);

    const stats: GitHubStats = {
      publicRepos: userResponse.data.public_repos,
      followers: userResponse.data.followers,
      following: userResponse.data.following
    };

    const repos = reposResponse.data.map((repo): GitHubRepo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || '',
      html_url: repo.html_url,
      topics: repo.topics || [],
      language: repo.language || '',
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count
    }));

    return { stats, repos };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return { stats: null, repos: [] };
  }
};