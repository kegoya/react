import { useState, useEffect } from "react";
import { Github, Star, GitFork } from "lucide-react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'your-username' with your actual GitHub username!
    fetch("https://api.github.com/users/kegoya/repos?sort=updated&per_page=6")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center dark:text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
      </div>
    );

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Latest Repositories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-500 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <Github
                  className="text-gray-400 group-hover:text-blue-500"
                  size={24}
                />
                <div className="flex gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star size={14} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={14} /> {repo.forks_count}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 truncate">
                {repo.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 h-10">
                {repo.description || "No description provided."}
              </p>
              <div className="mt-4 text-blue-600 text-xs font-mono uppercase tracking-widest">
                {repo.language || "Plain Text"}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
