'use client';

import { useState, useEffect } from 'react';
import { fetchGitHubRepos, processGitHubRepos, ProcessedProject } from '../github';

export function useGitHubProjects() {
  const [projects, setProjects] = useState<ProcessedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        setError(null);

        const repos = await fetchGitHubRepos();

        if (repos.length === 0) {
          setError('No se pudieron cargar los repositorios de GitHub');
          setLoading(false);
          return;
        }

        const processedProjects = await processGitHubRepos(repos);
        setProjects(processedProjects);
      } catch (err) {
        console.error('Error loading GitHub projects:', err);
        setError('Error al cargar los proyectos desde GitHub');
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return { projects, loading, error };
}