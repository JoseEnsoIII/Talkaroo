import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userId = decodedToken.userId;

      console.log("Fetching user data for user ID:", userId); // Log user ID for debugging

      fetch(`http://localhost:5001/api/users/${userId}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          }
          console.log("User data fetched:", data); // Log the user data
          setUser(data); // Set the user state with the fetched data
        })
        .catch((err) => {
          console.error("Error fetching user:", err); // Log any errors that occur
          setError(err.message); // Set the error state
        })
        .finally(() => {
          setLoading(false); // Set loading to false when done
        });
    } else {
      setError("No token found.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="page-container max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">User Profile</h2>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg text-gray-700">Name:</span>
          <span className="text-xl font-medium text-gray-800">{user.first_name} {user.last_name}</span>
        </div>

        {user.suffix && (
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-gray-700">Suffix:</span>
            <span className="text-xl font-medium text-gray-800">{user.suffix}</span>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg text-gray-700">Email:</span>
          <span className="text-xl font-medium text-gray-800">{user.email}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg text-gray-700">Course:</span>
          <span className="text-xl font-medium text-gray-800">{user.course}</span>
        </div>
      </div>

      {/* Course Tracker Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Course Tracker</h3>
        <div className="border-t border-gray-300 pt-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-gray-700">Course Name:</span>
            <span className="text-xl font-medium text-gray-800">{user.course}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-gray-700">Progress:</span>
            <span className="text-xl font-medium text-gray-800">50%</span> {/* Placeholder progress */}
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-gray-700">Completion Date:</span>
            <span className="text-xl font-medium text-gray-800">Dec 2025</span> {/* Placeholder date */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
