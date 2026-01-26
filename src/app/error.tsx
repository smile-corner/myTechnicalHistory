"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <h2 className="text-2xl font-bold text-red-800 mb-4">
        何らかの問題が発生しました！
      </h2>
      <p className="text-gray-700 mb-6">
        ご不便をおかけして申し訳ありません。
      </p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        再試行
      </button>
    </div>
  );
}