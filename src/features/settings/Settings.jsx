import React, { useState, useEffect } from "react";
import { auth } from "../../firebase.config";
import { updateEmail, updateProfile } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const Settings = () => {
  const { isAuthenticated, logout } = useAuth();
  const user = auth.currentUser;
  const db = getFirestore();
  const [username, setUsername] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [favoriteItems, setFavoriteItems] = useState("");
  const [message, setMessage] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setDietaryPreferences(userData.dietaryPreferences || "");
        setFavoriteItems(userData.favoriteItems || "");
      } else {
        console.log("No such document!");
      }
    };
    fetchUserData();
  }, [db, user.uid]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      if (photoFile) {
        const storage = getStorage();
        const storageRef = ref(storage, `profile_pictures/${user.uid}`);
        await uploadBytes(storageRef, photoFile);
        const url = await getDownloadURL(storageRef);
        await updateProfile(user, { displayName: username, photoURL: url });
        setPhotoURL(url);
      } else if (username !== user.displayName) {
        await updateProfile(user, { displayName: username });
      }
      if (email !== user.email) {
        await updateEmail(user, email);
      }

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(
        userDocRef,
        { dietaryPreferences, favoriteItems },
        { merge: true }
      );

      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {message && <p className="text-green-500 text-center mb-4">{message}</p>}
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dietary Preferences
          </label>
          <input
            type="text"
            value={dietaryPreferences}
            onChange={(e) => setDietaryPreferences(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            placeholder="E.g., Vegan, Gluten-Free"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Favorite Grocery Items
          </label>
          <input
            type="text"
            value={favoriteItems}
            onChange={(e) => setFavoriteItems(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            placeholder="Your favorite items (comma separated)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
          />
          {photoURL && (
            <img
              src={photoURL}
              alt="Profile Preview"
              className="mt-2 w-24 h-24 rounded-full border border-gray-300"
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Update Profile
        </button>
      </form>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="mt-2 w-full sm:w-auto inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;
