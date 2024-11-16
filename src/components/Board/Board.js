import React from 'react';
import Card from '../Card/Card';
import './Board.css';

const Board = ({ tickets, users, grouping, ordering }) => {
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
    const groupTickets = () => {
        const grouped = {};
      
        // Define the order for statuses and priorities
        const statusOrder = ['Backlog', 'Todo', 'In Progress', 'Done', 'Canceled'];
        const priorityOrder = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];
      
        if (grouping === 'status') {
          statusOrder.forEach(status => {
            grouped[status] = tickets.filter(ticket => ticket.status === status);
          });
        } else if (grouping === 'user') {
          tickets.forEach(ticket => {
            const user = users.find(u => u.id === ticket.userId);
            if (!grouped[user.name]) {
              grouped[user.name] = [];
            }
            grouped[user.name].push(ticket);
          });
        } else if (grouping === 'priority') {
          priorityOrder.forEach(priority => {
            const priorityValue = {
              'No priority': 0,
              'Urgent': 4,
              'High': 3,
              'Medium': 2,
              'Low': 1,
            }[priority];
            grouped[priority] = tickets.filter(ticket => ticket.priority === priorityValue);
          });
        }

    // Sort tickets within each group
    Object.keys(grouped).forEach(key => {
        grouped[key].sort((a, b) => {
          if (ordering === 'priority') {
            return b.priority - a.priority;
          } else {
            return a.title.localeCompare(b.title);
          }
        });
      });

    return grouped;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <div key={group} className="board-column">
          <div className="column-header">
            <h2>
              {getStatusEmoji(group)} {group}
            </h2>
            <span className="ticket-count">{tickets.length}</span>
          </div>
          <div className="column-content">
            {tickets.map(ticket => (
              <Card 
                key={ticket.id} 
                ticket={ticket}
                user={users.find(u => u.id === ticket.userId)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;