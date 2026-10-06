import React, { useEffect } from 'react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-bounce-short">
      <div className={`flex items-start gap-3 p-4 rounded-2xl shadow-xl border ${
        isSuccess 
          ? 'bg-white border-emerald-200 text-on-surface' 
          : 'bg-white border-red-200 text-on-surface'
      }`}>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
          isSuccess ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
        }`}>
          <span className="material-symbols-outlined text-[20px]">
            {isSuccess ? 'check_circle' : 'error'}
          </span>
        </div>

        <div className="flex flex-col flex-1 pr-2">
          <span className="font-display font-bold text-sm text-on-surface">
            {isSuccess ? 'Success' : 'Notice'}
          </span>
          <p className="font-body text-xs text-on-surface-variant mt-0.5 leading-relaxed">
            {toast.message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-secondary hover:text-on-surface p-1 rounded-lg transition-colors"
          aria-label="Close notification"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </div>
  );
}
