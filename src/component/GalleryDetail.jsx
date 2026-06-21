import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import BASE_URL from "../config";
import "../component/css/gallerydetail.css";

function GalleryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `${BASE_URL}${url}`;
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/api/gallery/galleries/${id}/`);
        setGallery(res.data);
      } catch (err) {
        console.error(err);
        setError("Gallery not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", marginTop: "40px", color: "red" }}>{error}</p>;
  }

  return (
    <div className="gallery-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>{gallery.title}</h1>
      <p className="gallery-category">{gallery.category_name}</p>

      {gallery.Link && (
        <a
          href={gallery.Link}
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-link"
        >
          Visit Link
        </a>
      )}

      <div className="main-gallery-image">
        <img src={getImageUrl(gallery.image)} alt={gallery.title} />
      </div>

      <div className="gallery-images-grid">
        {gallery.images?.length > 0 ? (
          gallery.images.map((img) => (
            <div className="gallery-image-card" key={img.id}>
              <img src={getImageUrl(img.image)} alt={gallery.title} />
            </div>
          ))
        ) : (
          <p>No extra images found for this gallery.</p>
        )}
      </div>
    </div>
  );
}

export default GalleryDetail;