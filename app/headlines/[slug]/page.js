import headlines from "../../data/headlinesData";
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

     {article.videoUrl && (
  <div className="aspect-video mb-6">
    <iframe
      src={article.videoUrl.replace("watch?v=", "embed/")}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-full rounded-md shadow-md"
    ></iframe>
  </div>
)}

      <p className="text-lg text-gray-300">{article.content}</p>
    </div>
  );
}
