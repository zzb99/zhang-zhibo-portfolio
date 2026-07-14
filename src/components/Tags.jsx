import React from 'react';

export default function Tags({ items }) {
  return <div className="tags">{items.map((tag) => <span key={tag}>{tag}</span>)}</div>;
}
