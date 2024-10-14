import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { useAuth } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import userPlaceholder from "../../assets/user.png";

const Profile = () => {
  const { isAuthenticated } = useAuth();
  const user = auth.currentUser;

  const [favoriteItems, setFavoriteItems] = useState([]);
  const [dietaryPreferences, setDietaryPreferences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = doc(db, "users", user.uid);
          const userSnapshot = await getDoc(userDoc);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();

            // Handle favorite items
            if (typeof userData.favoriteItems === "string") {
              setFavoriteItems(
                userData.favoriteItems.split(",").map((item) => item.trim())
              );
            } else {
              setFavoriteItems(
                Array.isArray(userData.favoriteItems)
                  ? userData.favoriteItems
                  : []
              );
            }

            if (typeof userData.dietaryPreferences === "string") {
              setDietaryPreferences(
                userData.dietaryPreferences
                  .split(",")
                  .map((pref) => pref.trim())
              );
            } else {
              setDietaryPreferences(
                Array.isArray(userData.dietaryPreferences)
                  ? userData.dietaryPreferences
                  : []
              );
            }
          } else {
            console.log("No user data found!");
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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <img
          src={user.photoURL || userPlaceholder}
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-green-500 shadow-md"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">
          Name:{" "}
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
        <h3 className="text-lg font-semibold mb-1">Favorite Grocery Items</h3>
        {favoriteItems.length > 0 ? (
          <ul className="list-disc list-inside text-sm text-gray-600">
            {favoriteItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No favorite items added yet.</p>
        )}
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Dietary Preferences</h3>
        {dietaryPreferences.length > 0 ? (
          <ul className="list-disc list-inside text-sm text-gray-600">
            {dietaryPreferences.map((pref, index) => (
              <li key={index}>{pref}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No dietary preferences added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
