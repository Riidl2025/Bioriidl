const DashboardView = () => (
  <div>
    <div className="bg-[#FFF0F0] border border-[#A20202] p-6 rounded-xl mb-8">
      <h3 className="text-lg font-bold text-[#A20202]">Unlock Exclusive Perks</h3>
      <p className="text-gray-600 text-sm">Explore a curated collection of discounts and offers.</p>
      <button onClick={() => window.location.href = '/startupdeals'} className="mt-4 bg-[#A20202] text-white px-6 py-2 rounded-lg font-bold">Browse All Offers</button>
    </div>
    <h2 className="text-xl font-bold mb-8">Your Active Startup Perks</h2>
    <p className="text-gray-500 italic">No perks claimed yet.</p>
  </div>
);
export default DashboardView;