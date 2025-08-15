'use client';

import { useState } from 'react';

interface TaskItem {
  id: string;
  title: string;
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}

const mockTasks: TaskItem[] = [
  {
    id: '1',
    title: 'Implement Stripe payment integration',
    status: 'in_progress',
    priority: 'high',
    dueDate: '2024-02-15'
  },
  {
    id: '2',
    title: 'Set up email notifications for investments',
    status: 'pending',
    priority: 'medium',
    dueDate: '2024-02-20'
  },
  {
    id: '3',
    title: 'Create member dashboard',
    status: 'pending',
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Add voting analytics',
    status: 'completed',
    priority: 'low'
  }
];

export default function AdminDashboard() {
  const [tasks, setTasks] = useState<TaskItem[]>(mockTasks);
  const [selectedTab, setSelectedTab] = useState<'tasks' | 'investments' | 'comments' | 'analytics'>('tasks');

  const getStatusColor = (status: TaskItem['status']) => {
    switch (status) {
      case 'completed': return 'text-green-500';
      case 'in_progress': return 'text-orange-500';
      case 'pending': return 'text-muted';
      default: return 'text-muted';
    }
  };

  const getPriorityColor = (priority: TaskItem['priority']) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-muted';
    }
  };

  return (
    <div className="space-y-8">
      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="text-2xl font-bold text-blue-500 mb-1">127</div>
          <div className="text-slate-600 text-sm">Total Votes</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-green-500 mb-1">$2,340</div>
          <div className="text-slate-600 text-sm">Investments</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-orange-500 mb-1">23</div>
          <div className="text-slate-600 text-sm">Comments</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-slate-700 mb-1">156</div>
          <div className="text-slate-600 text-sm">Email Signups</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-8">
          {(['tasks', 'investments', 'comments', 'analytics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                selectedTab === tab
                  ? 'border-primary text-blue-500'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {selectedTab === 'tasks' && (
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Task Management</h3>
            <button className="btn-primary text-sm">Add Task</button>
          </div>
          
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">{task.title}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className={`text-sm font-medium ${getStatusColor(task.status)}`}>
                      {task.status.replace('_', ' ')}
                    </span>
                    <span className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority} priority
                    </span>
                    {task.dueDate && (
                      <span className="text-sm text-slate-500">Due: {task.dueDate}</span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-600 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'investments' && (
        <div className="card">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Investment Tracking</h3>
          <div className="text-center text-slate-500 py-8">
            Investment tracking dashboard coming soon...
          </div>
        </div>
      )}

      {selectedTab === 'comments' && (
        <div className="card">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Comment Moderation</h3>
          <div className="text-center text-slate-500 py-8">
            Comment moderation interface coming soon...
          </div>
        </div>
      )}

      {selectedTab === 'analytics' && (
        <div className="card">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Voting Analytics</h3>
          <div className="text-center text-slate-500 py-8">
            Analytics dashboard coming soon...
          </div>
        </div>
      )}
    </div>
  );
}