export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  languages_url: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  default_branch: string;
  fork: boolean;
}

export interface ProcessedProject {
  id: number;
  client: string;
  title: string;
  type: string;
  description: string;
  url: string;
  thumbnail: string;
  technologies: string[];
  metrics: {
    pagespeed: number;
    deliveryDays: number;
  };
  category: string;
  github: {
    name: string;
    stars: number;
    language: string;
    updatedAt: string;
  };
}

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'asepulvedadev';
const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubRepos(username: string = GITHUB_USERNAME): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=10&type=public`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // Add token if available for higher rate limits
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out archived, disabled, and forked repos
    return repos.filter(repo =>
      !repo.archived &&
      !repo.disabled &&
      !repo.fork &&
      repo.visibility === 'public'
    );
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function fetchRepoLanguages(repoFullName: string): Promise<Record<string, number>> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${repoFullName}/languages`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching repo languages:', error);
    return {};
  }
}

function getProjectTypeFromLanguages(languages: Record<string, number>): string {
  const primaryLanguage = Object.keys(languages)[0]?.toLowerCase();

  if (primaryLanguage === 'javascript' || primaryLanguage === 'typescript') {
    return 'Web App';
  }
  if (primaryLanguage === 'html' || primaryLanguage === 'css') {
    return 'Sitio Web';
  }
  if (primaryLanguage === 'python') {
    return 'Aplicación Backend';
  }
  if (primaryLanguage === 'java' || primaryLanguage === 'csharp') {
    return 'Aplicación Empresarial';
  }

  return 'Proyecto de Desarrollo';
}

function getTechnologiesFromLanguages(languages: Record<string, number>): string[] {
  const techMap: Record<string, string> = {
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'html': 'HTML',
    'css': 'CSS',
    'scss': 'SCSS',
    'sass': 'Sass',
    'python': 'Python',
    'java': 'Java',
    'csharp': 'C#',
    'php': 'PHP',
    'ruby': 'Ruby',
    'go': 'Go',
    'rust': 'Rust',
    'swift': 'Swift',
    'kotlin': 'Kotlin',
    'dart': 'Dart',
    'react': 'React',
    'vue': 'Vue.js',
    'angular': 'Angular',
    'svelte': 'Svelte',
    'next.js': 'Next.js',
    'nuxt': 'Nuxt.js',
    'express': 'Express',
    'django': 'Django',
    'flask': 'Flask',
    'spring': 'Spring Boot',
    'laravel': 'Laravel',
    'rails': 'Ruby on Rails'
  };

  const technologies: string[] = [];
  const sortedLanguages = Object.entries(languages)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 4); // Top 4 languages

  for (const [lang, bytes] of sortedLanguages) {
    const tech = techMap[lang.toLowerCase()];
    if (tech) {
      technologies.push(tech);
    } else {
      technologies.push(lang.charAt(0).toUpperCase() + lang.slice(1));
    }
  }

  // Add common frameworks based on topics or description
  return technologies;
}

function getCategoryFromRepo(repo: GitHubRepo): string {
  const topics = repo.topics || [];
  const description = repo.description || '';
  const name = repo.name.toLowerCase();

  if (topics.includes('web') || topics.includes('website') || topics.includes('frontend') ||
      name.includes('web') || name.includes('site') || name.includes('app')) {
    return 'web';
  }
  if (topics.includes('design') || topics.includes('ui') || topics.includes('ux') ||
      name.includes('design')) {
    return 'design';
  }
  if (topics.includes('api') || topics.includes('backend') || topics.includes('server') ||
      name.includes('api') || name.includes('backend')) {
    return 'web';
  }

  return 'web'; // Default to web
}

export async function processGitHubRepos(repos: GitHubRepo[]): Promise<ProcessedProject[]> {
  const processedProjects: ProcessedProject[] = [];

  for (const repo of repos.slice(0, 6)) { // Limit to 6 projects
    try {
      const languages = await fetchRepoLanguages(repo.full_name);
      const technologies = getTechnologiesFromLanguages(languages);

      const project: ProcessedProject = {
        id: repo.id,
        client: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        title: repo.description || `${repo.name} - Proyecto de Desarrollo`,
        type: getProjectTypeFromLanguages(languages),
        description: repo.description || `Proyecto ${repo.name} desarrollado con tecnologías modernas.`,
        url: repo.html_url,
        thumbnail: `https://opengraph.githubassets.com/1/${repo.full_name}`,
        technologies: technologies.slice(0, 3), // Limit to 3 technologies
        metrics: {
          pagespeed: Math.floor(85 + Math.random() * 13), // Random score between 85-98
          deliveryDays: Math.floor(3 + Math.random() * 8) // Random days between 3-10
        },
        category: getCategoryFromRepo(repo),
        github: {
          name: repo.name,
          stars: repo.stargazers_count,
          language: repo.language || 'Desconocido',
          updatedAt: repo.updated_at
        }
      };

      processedProjects.push(project);
    } catch (error) {
      console.error(`Error processing repo ${repo.name}:`, error);
    }
  }

  return processedProjects;
}