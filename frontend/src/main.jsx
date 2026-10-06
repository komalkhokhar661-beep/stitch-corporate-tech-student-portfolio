import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', textAlign: 'center', background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: '#0f172a', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Portfolio Rendering Notice</h2>
          <p style={{ color: '#64748b', maxWidth: '500px', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
            {this.state.error?.message || 'An unexpected error occurred while loading this page.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '0.65rem 1.4rem', backgroundColor: '#0037b0', color: '#fff', border: 'none', borderRadius: '0.75rem', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
