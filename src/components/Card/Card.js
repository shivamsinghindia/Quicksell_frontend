import React from 'react';
import './Card.css';

const Card = ({ ticket, user }) => {
    const getStatusEmoji = (status) => {
        const emojis = {
          'Backlog': '🕒',
          'Todo': '📋',
          'In Progress': '🔄',
          'Done': '✅',
          'Canceled': '❌',
        };
        return emojis[status] || '';
      };
      
      const getPriorityEmoji = (priority) => {
        const emojis = {
          4: '🔴', // Urgent
          3: '🟠', // High
          2: '🟡', // Medium
          1: '🔵', // Low
          0: '⚪', // No priority
        };
        return emojis[priority] || '⚪';
      };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <span className="user-avatar" title={user?.name || 'Unknown'}>
            {user?.available ? '🟢' : '⚪'}
        </span>
      </div>
      <div className="card-title">
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-footer">
        <span className="priority-icon">
            {getPriorityEmoji(ticket.priority)}
        </span>
        <span className="status-icon">
            {getStatusEmoji(ticket.status)}
        </span>
        <div className="tag">
            {ticket.tag[0]}
        </div>
      </div> 
    </div>
  );
};

export default Card;