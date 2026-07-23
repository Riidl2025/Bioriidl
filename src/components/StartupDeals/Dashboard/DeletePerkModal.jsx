import React from 'react';

const DeletePerkModal = ({ isOpen, isDeleting, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 space-y-6 border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#A20202] flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">Remove Perk</h3>
          <p className="text-xs text-slate-500 mt-1">
            Are you sure you want to remove this perk ? This action cannot be undone.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            disabled={isDeleting}
            onClick={onClose}
            className="px-4 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={isDeleting}
            onClick={onConfirm}
            className="px-5 py-2.5 bg-[#A20202] text-white text-xs font-bold rounded-xl hover:bg-[#850101] shadow-sm transition-all disabled:opacity-50 cursor-pointer"
          >
            {isDeleting ? 'Deleting...' : 'Delete Perk'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePerkModal;