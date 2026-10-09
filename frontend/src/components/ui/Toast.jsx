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
      <div className={`flex items-start gap-3 p-4 rounded-2xl shadow-xl backdrop-blur-xl border ${
        isSuccess 
          ? 'bg-white/98 border-emerald-300 text-slate-900' 
          : 'bg-white/98 border-red-300 text-slate-900'
      }`}>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
          isSuccess 
            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
            : 'bg-red-50 text-red-600 border border-red-200'
        }`}>
          <span className="material-symbols-outlined text-[20px]">
            {isSuccess ? 'check_circle' : 'error'}
          </span>
        </div>

        <div className="flex flex-col flex-1 pr-2">
          <span className="font-headline font-bold text-sm text-slate-950">
            {isSuccess ? 'System Notice' : 'Attention'}
          </span>
          <p className="font-body text-xs text-slate-600 mt-0.5 leading-relaxed">
            {toast.message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors"
          aria-label="Close notification"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </div>
  );
}
