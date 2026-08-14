import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import BASE_URL from "../config";
import cover from "../assets/images/cover.jpeg";
import Footer from "./Footer";
import "../component/css/articledetail.css";

const resolveImage = (image) => {
  if (!image) return cover;
  return image.startsWith("http") ? image : `${BASE_URL}${image}`;
};

const formatViews = (views) => {
  const n = Number(views) || 0;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k views`;
  return `${n} views`;
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchArticle() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${BASE_URL}/api/events/articles/${id}/`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Article not found or failed to load.");

        const data = await res.json();
        setArticle(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Article not found or failed to load.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
    window.scrollTo(0, 0);
    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="article-detail-shell">
        <p className="article-detail-status">Loading article...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="article-detail-shell">
        <div className="article-detail-error-box">
          <p className="article-detail-status error">
            {error || "Article not found."}
          </p>
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>
    );
  }

  const paragraphs = (article.content || article.description || "")
    .split(/\n\s*\n/)
    .filter((p) => p.trim().length > 0);

  return (
    <>
      <div className="article-detail-page">
        <section
          className="article-hero"
          style={{ backgroundImage: `url(${resolveImage(article.image)})` }}
        >
          <div className="article-hero-overlay" />

          <div className="article-hero-text">
            <span className="article-detail-tag">{article.topic_name}</span>
            <h1>{article.title}</h1>

            <div className="article-detail-meta">
              <span>{formatDate(article.created_at)}</span>
              <span className="dot">•</span>
              <span>{article.read_time}</span>
              <span className="dot">•</span>
              <span>{formatViews(article.views)}</span>
            </div>
          </div>
        </section>

        <div className="article-body-wrap">
          <article className="article-body">
            <p className="article-detail-desc">{article.description}</p>

            <div className="article-detail-content">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="article-detail-footer">
              <Link to="/blog" className="back-to-blog-btn">
                ← Back to all articles
              </Link>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticleDetail;
