'use client';

import { useState } from 'react';
import { apps } from '@/lib/data';
import { App } from '@/types';

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
    title: 'Add analytics dashboard',
    status: 'completed',
    priority: 'low'
  }
];

export default function AdminDashboard() {
  const [tasks, setTasks] = useState<TaskItem[]>(mockTasks);
  const [selectedTab, setSelectedTab] = useState<'tasks' | 'projects' | 'investments' | 'comments' | 'analytics'>('tasks');
  const [projectVisibility, setProjectVisibility] = useState<Record<string, boolean>>(
    apps.reduce((acc, app) => ({ ...acc, [app.id]: app.visible !== false }), {})
  );

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

  const toggleProjectVisibility = (appId: string) => {
    setProjectVisibility(prev => ({
      ...prev,
      [appId]: !prev[appId]
    }));
    // In a real app, this would make an API call to update the database
  };

  return (
    <div className="space-y-8">
      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="text-2xl font-bold text-blue-500 mb-1">127</div>
          <div className="text-slate-600 text-sm">Total Users</div>
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
          {(['tasks', 'projects', 'investments', 'comments', 'analytics'] as const).map((tab) => (
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

      {selectedTab === 'projects' && (
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Project Visibility Management</h3>
            <div className="text-sm text-slate-600">
              Toggle projects on/off for public display
            </div>
          </div>
          
          <div className="space-y-4">
            {apps.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-slate-900">{app.name}</h4>
                    {app.isNonProfit && (
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Non-Profit
                      </span>
                    )}
                    {app.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{app.tagline}</p>
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm font-medium ${
                      app.status === 'live' ? 'text-green-600' : 
                      app.status === 'development' ? 'text-orange-600' :
                      app.status === 'planning' ? 'text-blue-600' : 'text-slate-500'
                    }`}>
                      {app.status}
                    </span>
                    {app.url && (
                      <a href={app.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-600">
                        View Live →
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={projectVisibility[app.id]}
                        onChange={() => toggleProjectVisibility(app.id)}
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                    <span className="ml-3 text-sm font-medium text-slate-700">
                      {projectVisibility[app.id] ? 'Visible' : 'Hidden'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Project Visibility Controls</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hidden projects remain in admin but won't appear on the public site</li>
                    <li>Non-profit projects are highlighted with special badges</li>
                    <li>Featured projects may receive priority placement</li>
                    <li>Changes take effect immediately on the public site</li>
                  </ul>
                </div>
              </div>
            </div>
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
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Analytics Dashboard</h3>
          <div className="text-center text-slate-500 py-8">
            Analytics dashboard coming soon...
          </div>
        </div>
      )}
    </div>
  );
}