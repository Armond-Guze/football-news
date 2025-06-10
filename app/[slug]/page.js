import headlines from "@/data/headlinesData";
import React from "react";

export default function HeadlinePage({ params }) {
  const { slug } = params;
  const article = headlines.find((item) => item.slug === slug);

  if (!article) {
    return <div className="text-white p-10">Article not found.</div>;
  }

  const videoId = article.videoUrl.split("v=")[1]?.split("&")[0];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{article.title}</h1>

      {videoId && (
        <div className="aspect-video mb-6">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full h-full rounded-md shadow-md"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <p className="text-lg text-gray-300">{article.content}</p>
    </div>
  );
}
