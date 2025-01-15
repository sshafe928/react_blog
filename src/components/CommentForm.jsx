// CommentForm.js
import React, { useState } from 'react';

const CommentForm = () => {
const [comment, setComment] = useState('');

const handleSubmit = async (event) => {
    event.preventDefault();

    if (comment.trim()) {
    const newComment = { text: comment, date: new Date().toISOString() };
    
    try {
        const response = await fetch('http://localhost:5000/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
        });

        if (response.ok) {
        alert('Comment posted!');
        setComment('');
        } else {
        alert('Failed to post comment.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error posting comment.');
    }
    }
};

return (
    <div>
    <h2>Post a Comment</h2>
    <form onSubmit={handleSubmit}>
        <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment"
        required
        />
        <button type="submit">Post Comment</button>
    </form>
    </div>
);
};

export default CommentForm;