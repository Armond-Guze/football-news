'use client'

import { useState } from 'react'
import { client } from '@/sanity/lib/client'

export default function DebugArticle() {
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const debugData = async () => {
    setLoading(true)
    try {
      // Get the raw article data to see what's actually there
      const rawHeadlines = await client.fetch(`*[_type == "headline"] {
        _id,
        title,
        slug,
        summary,
        coverImage,
        priority,
        date,
        author,
        tags,
        category,
        published,
        body,
        _createdAt,
        _updatedAt
      }`)

      // Test your main query
      const queryResult = await client.fetch(`
        *[_type == "headline"] | order(priority asc, _createdAt desc) {
          _id,
          title,
          slug,
          summary,
          coverImage {
            asset->{
              url
            }
          },
          priority,
          date,
          author->{
            name
          },
          tags
        }
      `)

      // Check for missing required fields
      const fieldAnalysis = rawHeadlines.map((headline: any) => ({
        id: headline._id,
        title: headline.title || 'MISSING',
        hasSlug: !!headline.slug,
        hasCoverImage: !!headline.coverImage,
        hasAuthor: !!headline.author,
        hasPriority: headline.priority !== undefined,
        hasDate: !!headline.date,
        hasTags: !!headline.tags,
        published: headline.published,
        createdAt: headline._createdAt
      }))

      setResults({
        rawCount: rawHeadlines.length,
        queryCount: queryResult.length,
        rawHeadlines: rawHeadlines.slice(0, 3), // Show first 3 for debugging
        queryResult: queryResult.slice(0, 3),
        fieldAnalysis,
        timestamp: new Date().toISOString()
      })

    } catch (error) {
      console.error('Debug error:', error)
      setResults({ error: error instanceof Error ? error.message : 'Unknown error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🔍 Article Debug Tool</h1>
      
      <button 
        onClick={debugData}
        disabled={loading}
        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 disabled:opacity-50 mb-6"
      >
        {loading ? 'Debugging...' : 'Debug Article Data'}
      </button>

      {results?.error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded mb-6">
          <h2 className="font-bold text-red-800">Error:</h2>
          <p className="text-red-700">{results.error}</p>
        </div>
      )}

      {results && !results.error && (
        <div className="space-y-6">
          {/* Summary */}
          <div className="bg-blue-50 p-4 rounded">
            <h2 className="font-bold mb-2">📊 Quick Summary:</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>Raw Headlines Found: <span className="font-mono font-bold">{results.rawCount}</span></div>
              <div>Query Result Count: <span className="font-mono font-bold">{results.queryCount}</span></div>
            </div>
            {results.rawCount > 0 && results.queryCount === 0 && (
              <div className="mt-2 p-2 bg-red-100 rounded">
                <p className="text-red-700 font-medium">⚠️ Headlines exist but query returns empty - there&apos;s a field/query issue!</p>
              </div>
            )}
          </div>

          {/* Field Analysis */}
          <div className="bg-gray-50 p-4 rounded">
            <h2 className="font-bold mb-2">🔍 Field Analysis:</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-1">Title</th>
                    <th className="border border-gray-300 p-1">Slug</th>
                    <th className="border border-gray-300 p-1">Image</th>
                    <th className="border border-gray-300 p-1">Author</th>
                    <th className="border border-gray-300 p-1">Priority</th>
                    <th className="border border-gray-300 p-1">Date</th>
                    <th className="border border-gray-300 p-1">Tags</th>
                    <th className="border border-gray-300 p-1">Published</th>
                  </tr>
                </thead>
                <tbody>
                  {results.fieldAnalysis.map((item: any, index: number) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-1">{item.title.substring(0, 20)}...</td>
                      <td className={`border border-gray-300 p-1 ${item.hasSlug ? 'text-green-600' : 'text-red-600'}`}>
                        {item.hasSlug ? '✅' : '❌'}
                      </td>
                      <td className={`border border-gray-300 p-1 ${item.hasCoverImage ? 'text-green-600' : 'text-red-600'}`}>
                        {item.hasCoverImage ? '✅' : '❌'}
                      </td>
                      <td className={`border border-gray-300 p-1 ${item.hasAuthor ? 'text-green-600' : 'text-red-600'}`}>
                        {item.hasAuthor ? '✅' : '❌'}
                      </td>
                      <td className={`border border-gray-300 p-1 ${item.hasPriority ? 'text-green-600' : 'text-red-600'}`}>
                        {item.hasPriority ? '✅' : '❌'}
                      </td>
                      <td className={`border border-gray-300 p-1 ${item.hasDate ? 'text-green-600' : 'text-red-600'}`}>
                        {item.hasDate ? '✅' : '❌'}
                      </td>
                      <td className={`border border-gray-300 p-1 ${item.hasTags ? 'text-green-600' : 'text-red-600'}`}>
                        {item.hasTags ? '✅' : '❌'}
                      </td>
                      <td className={`border border-gray-300 p-1 ${item.published ? 'text-green-600' : 'text-red-600'}`}>
                        {item.published ? '✅' : '❌'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Raw Data Sample */}
          <div className="bg-yellow-50 p-4 rounded">
            <h2 className="font-bold mb-2">📄 Raw Data Sample:</h2>
            <pre className="text-xs bg-white p-2 rounded overflow-auto max-h-60">
              {JSON.stringify(results.rawHeadlines, null, 2)}
            </pre>
          </div>

          {/* Query Result */}
          <div className="bg-green-50 p-4 rounded">
            <h2 className="font-bold mb-2">✅ Query Result Sample:</h2>
            <pre className="text-xs bg-white p-2 rounded overflow-auto max-h-60">
              {JSON.stringify(results.queryResult, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
