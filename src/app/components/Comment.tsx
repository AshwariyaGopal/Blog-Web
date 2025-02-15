'use client'
import React, { useState, useEffect } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Function to add a new comment
  const addComment = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments)); // Save to localStorage
    }
  };

  // Function to delete a comment
  const deleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments)); // Update localStorage
  };

  return (
    <div className="max-w-xl mx-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white mt-10">
      <h1 className="text-2xl font-bold text-black mb-4">Comment Box</h1>
      
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
        className="border border-gray-400 w-full p-2 rounded-lg"
        onKeyDown={(e) => e.key === 'Enter' && addComment()} // Add comment on Enter key
      />
      
      <button
        className="bg-black text-white w-full mt-3 py-2 rounded-lg hover:bg-blue-800"
        onClick={addComment}
      >
        Add Comment
      </button>

      <div className="mt-4">
        <h2 className="font-semibold">All Comments:</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Add your comment!</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {comments.map((data, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{data}</span>
                <button
                  onClick={() => deleteComment(index)}
                  className="bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
