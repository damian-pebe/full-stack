import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchItemById } from "../lib/api";
import {
  containerStyles,
  textStyles,
  componentStyles,
  hoverEffects,
} from "../lib/styles";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadItem = async () => {
      try {
        setLoading(true);
        const data = await fetchItemById(id);
        setItem(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    loadItem();
  }, [id]);

  if (loading) {
    return (
      <div style={containerStyles.loading}>
        <p style={textStyles.loading}>Loading...</p>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div style={containerStyles.error}>
        <p style={textStyles.error}>{error || "Item not found"}</p>
        <Link to="/" style={componentStyles.errorLink}>
          ← Back to Items
        </Link>
      </div>
    );
  }

  return (
    <div style={containerStyles.page}>
      <div style={containerStyles.content}>
        <div style={componentStyles.backButton.container}>
          <Link
            to="/"
            style={componentStyles.backButton.link}
            onMouseEnter={(e) => hoverEffects.backButton.enter(e.target)}
            onMouseLeave={(e) => hoverEffects.backButton.leave(e.target)}
          >
            ← Back to Items
          </Link>
        </div>

        <div style={componentStyles.card}>
          <h1 style={textStyles.title}>{item.name}</h1>

          <div style={componentStyles.fieldContainer}>
            <div>
              <p style={textStyles.label}>Category</p>
              <p style={textStyles.value}>{item.category}</p>
            </div>

            <div>
              <p style={textStyles.label}>Price</p>
              <p style={textStyles.price}>${item.price}</p>
            </div>

            {item.description && (
              <div>
                <p style={textStyles.label}>Description</p>
                <p style={textStyles.description}>{item.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
