import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../component/css/viewprogram.css";
import cover from "../assets/images/cover.jpeg";
import Footer from "./Footer";
import BASE_URL from "../config";

const ARTICLES_PER_PAGE = 4;

const resolveImage = (image) => {
  if (!image) return cover;
  return image.startsWith("http") ? image : `${BASE_URL}${image}`;
};

const formatViews = (views) => {
  const n = Number(views) || 0;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k views`;
  return `${n} views`;
};

function ViewProgram() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError("");

        const [articlesRes, topicsRes, popularRes] = await Promise.all([
          fetch(`${BASE_URL}/api/events/articles/`, { signal: controller.signal }),
          fetch(`${BASE_URL}/api/events/topics/`, { signal: controller.signal }),
          fetch(`${BASE_URL}/api/events/articles/popular/`, { signal: controller.signal }),
        ]);

        if (!articlesRes.ok) throw new Error("Failed to load articles");
        if (!topicsRes.ok) throw new Error("Failed to load topics");
        if (!popularRes.ok) throw new Error("Failed to load popular articles");

        const [articlesData, topicsData, popularData] = await Promise.all([
          articlesRes.json(),
          topicsRes.json(),
          popularRes.json(),
        ]);

        setArticles(Array.isArray(articlesData) ? articlesData : []);
        setTopics(Array.isArray(topicsData) ? topicsData : []);
        setPopularArticles(Array.isArray(popularData) ? popularData : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong while loading the blog.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, []);

  const featuredArticle = useMemo(
    () => articles.find((article) => article.is_featured),
    [articles]
  );

  const listArticles = useMemo(
    () => articles.filter((article) => article.id !== featuredArticle?.id),
    [articles, featuredArticle]
  );

  const totalPages = Math.max(1, Math.ceil(listArticles.length / ARTICLES_PER_PAGE));

  const pagedArticles = useMemo(() => {
    const start = (page - 1) * ARTICLES_PER_PAGE;
    return listArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [listArticles, page]);

  return (
    <>
      <div className="blog-page">
        <section className="hero-section">
          <div className="hero-left">
            <h1>
              Nexu <span>ThinkLab Blog</span>
            </h1>

            <p className="hero-subtitle">
              Ideas, insights, and inspiration for a future of innovation.
            </p>

            <p className="hero-desc">
              Explore articles, tips, and stories on STEAM education,
              robotics, innovation, and digital skills.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Explore Articles</button>
              <button className="secondary-btn">Subscribe</button>
            </div>
          </div>

          <div className="hero-right">
            <img src={cover} alt="Hero" loading="lazy" decoding="async" />
          </div>
        </section>

        {/* Main Content */}
        <section className="content-section">
          <div className="left-content">
            {!loading && !error && featuredArticle && (
              <div
                className="featured-post"
                onClick={() => navigate(`/blog/${featuredArticle.id}`)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={resolveImage(featuredArticle.image)}
                  alt={featuredArticle.title} loading="lazy" decoding="async" />

                <div className="featured-content">
                  <span className="category">{featuredArticle.topic_name}</span>

                  <h2>{featuredArticle.title}</h2>

                  <p>{featuredArticle.description}</p>

                  <div className="meta">
                    <span>{featuredArticle.read_time}</span>
                    <span>{formatViews(featuredArticle.views)}</span>
                  </div>
                </div>
              </div>
            )}

            <h2 className="section-title">Latest Articles</h2>

            {loading && <p className="events-status">Loading articles...</p>}

            {!loading && error && <p className="events-status error">{error}</p>}

            {!loading && !error && articles.length === 0 && (
              <p className="events-status">No articles published yet.</p>
            )}

            {!loading &&
              !error &&
              pagedArticles.map((article) => (
                <div
                  className="article-card"
                  key={article.id}
                  onClick={() => navigate(`/blog/${article.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={resolveImage(article.image)} alt={article.title} loading="lazy" decoding="async" />

                  <div className="article-info">
                    <span className="article-tag">{article.topic_name}</span>

                    <h3>{article.title}</h3>

                    <p>{article.description}</p>

                    <div className="meta">
                      <span>{article.read_time}</span>
                      <span>{formatViews(article.views)}</span>
                    </div>
                  </div>
                </div>
              ))}

            {!loading && !error && totalPages > 1 && (
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    className={p === page ? "active" : ""}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Popular Topics</h3>

              {!loading && topics.length === 0 && <p>No topics yet.</p>}

              {topics.map((topic) => (
                <div className="topic-item" key={topic.id}>
                  <img src={resolveImage(topic.image)} alt={topic.name} loading="lazy" decoding="async" />

                  <div className="topic-content">
                    <h4>{topic.name}</h4>
                    <p>{topic.article_count} Articles</p>
                  </div>
                </div>
              ))}

              <a href="/" className="view-topics">
                View All Topics →
              </a>
            </div>

            <div className="subscribe-box">
              <h3>Stay Inspired</h3>

              <p>
                Subscribe to our newsletter and get updates delivered to your
                inbox.
              </p>

              <input type="email" placeholder="Enter your email" />

              <button>Subscribe</button>
            </div>

            {popularArticles.length > 0 && (
              <div className="sidebar-card">
                <h3>Popular Articles</h3>

                {popularArticles.map((article) => (
                  <div
                    className="mini-article"
                    key={article.id}
                    onClick={() => navigate(`/blog/${article.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={resolveImage(article.image)} alt={article.title} loading="lazy" decoding="async" />
                    <span>{article.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ViewProgram;
