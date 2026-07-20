const EditProfile = ({ user, setView }) => (
  <div className="max-w-md mx-auto">
    <button onClick={() => setView('dashboard')} className="mb-4 text-[#A20202] font-bold">&larr; Back to Dashboard</button>
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-bold">Full Name</label>
          <input className="w-full p-2 border rounded" defaultValue={user.name} />
        </div>
        <button className="w-full bg-[#A20202] text-white py-2 rounded-lg font-bold">Save Changes</button>
      </form>
    </div>
  </div>
);
export default EditProfile;