import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { useAuth } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

const Profile = () => {
  const { isAuthenticated } = useAuth();
  const user = auth.currentUser;

  const [bio, setBio] = useState("No bio provided.");
  const [interests, setInterests] = useState("No interests listed.");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = doc(db, "users", user.uid);
          const userSnapshot = await getDoc(userDoc);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            setBio(userData.bio || "No bio provided.");
            setInterests(userData.interests || "No interests listed.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <img
          src={user.photoURL || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-md"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">
          Username:{" "}
          <span className="text-gray-700">
            {user.displayName || "Not provided"}
          </span>
        </h3>
        <p className="text-sm text-gray-600">Email: {user.email}</p>
        <p className="text-sm text-gray-600">
          Joined: {new Date(user.metadata.creationTime).toLocaleDateString()}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Bio</h3>
        <p className="text-sm text-gray-600">{bio}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Interests</h3>
        <p className="text-sm text-gray-600">{interests}</p>
      </div>
    </div>
  );
};

export default Profile;
