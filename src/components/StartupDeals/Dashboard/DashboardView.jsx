import React, { useEffect, useState } from 'react';
import DashboardBanner from './DashboardBanner';
import DeletePerkModal from './DeletePerkModal';
import PerksHeader from './PerksHeader';
import PerksGrid from './PerksGrid';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? '/api';

const DashboardView = () => {
  const [claims, setClaims] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [claimToDelete, setClaimToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchClaims = async () => {
      try {
        const resp = await fetch(`${API_BASE_URL}/deals/my`, { credentials: 'include' });
        if (!resp.ok) {
          setClaims([]);
        } else {
          const json = await resp.json();
          setClaims(json.claims || []);
        }
      } catch (err) {
        console.error('Error fetching claims:', err);
        setClaims([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchClaims();
    return () => { mounted = false; };
  }, []);

  const handleDeleteClaim = async () => {
    if (!claimToDelete) return;
    setIsDeleting(true);
    try {
      const resp = await fetch(`${API_BASE_URL}/deals/my/${claimToDelete}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (resp.ok) {
        setClaims(prev => prev.filter(c => c._id !== claimToDelete));
        setDeleteModalOpen(false);
        setClaimToDelete(null);
      } else {
        const data = await resp.json();
        alert(data.message || 'Failed to delete the perk.');
      }
    } catch (err) {
      console.error('Error deleting perk:', err);
      alert('Network error while trying to delete perk.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <DashboardBanner />

      <PerksHeader count={claims?.length || 0} />

      <PerksGrid 
        loading={loading} 
        claims={claims} 
        onDeleteClick={(id) => {
          setClaimToDelete(id);
          setDeleteModalOpen(true);
        }} 
      />

      <DeletePerkModal
        isOpen={deleteModalOpen}
        isDeleting={isDeleting}
        onClose={() => {
          setDeleteModalOpen(false);
          setClaimToDelete(null);
        }}
        onConfirm={handleDeleteClaim}
      />
    </div>
  );
};

export default DashboardView;