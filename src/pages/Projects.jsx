import { GitFork, Github, Search, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("All");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = "https://api.github.com/users/kegoya/repos";
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`GitHub API Error: ${response.status}`);
        const data = await response.json();
        if (Array.isArray(data)) setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const languages = [
    "All",
    ...new Set(repos.map((r) => r.language).filter(Boolean)),
  ];

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch = repo.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLanguage =
      activeLanguage === "All" || repo.language === activeLanguage;
    return matchesSearch && matchesLanguage;
  });

  if (error)
    return (
      <div className="text-center py-20 dark:text-textprimary">{error}</div>
    );

  return (
    <div className="min-h-screen py-24 bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* 1. Header Animation */}
        <header className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-textprimary">
            My Repositories
          </h1>

          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-brand/50 outline-none transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLanguage(lang)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeLanguage === lang
                      ? "bg-brand text-white shadow-lg shadow-brand/30"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-brand"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </header>
        {/* 2. Card Animation with Dynamic Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"
              ></div>
            ))
          ) : filteredRepos.length > 0 ? (
            filteredRepos.map((repo, index) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-brand/50 hover:shadow-2xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <Github
                    size={24}
                    className="text-gray-400 group-hover:text-brand transition-colors"
                  />
                  <div className="flex gap-3 text-xs font-bold text-gray-500">
                    <span className="flex items-center gap-1 group-hover:text-brand/80 transition-colors">
                      <Star size={14} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 truncate">
                  {repo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 h-10">
                  {repo.description ||
                    "No description provided for this repository."}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <span className="px-3 py-1 bg-brand-soft text-brand rounded-full text-xs font-bold">
                    {repo.language || "Other"}
                  </span>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No projects match your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
