import React from "react";
import { Link } from "react-router-dom";
import { itemCardStyles } from "../lib/itemsStyles";
import { hoverEffects } from "../lib/itemsUtils";
import { COLORS } from "../lib/constants";

export const ItemCard = ({ item }) => {
  return (
    <div
      key={item.id}
      style={itemCardStyles.container}
      onMouseEnter={(e) => hoverEffects.card.enter(e.currentTarget, COLORS)}
      onMouseLeave={(e) => hoverEffects.card.leave(e.currentTarget, COLORS)}
    >
      <div style={itemCardStyles.content}>
        <Link
          to={`/items/${item.id}`}
          style={itemCardStyles.nameLink}
          onMouseEnter={(e) => hoverEffects.itemName.enter(e.target, COLORS)}
          onMouseLeave={(e) => hoverEffects.itemName.leave(e.target, COLORS)}
        >
          {item.name}
        </Link>
        <Link
          to={`/items/${item.id}`}
          style={itemCardStyles.chevronLink}
          onMouseEnter={(e) => hoverEffects.chevron.enter(e.target, COLORS)}
          onMouseLeave={(e) => hoverEffects.chevron.leave(e.target, COLORS)}
        >
          →
        </Link>
      </div>
    </div>
  );
};
