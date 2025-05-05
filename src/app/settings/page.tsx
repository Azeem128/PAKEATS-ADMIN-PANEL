// "use client";

// import { useState } from "react";

// // Example settings options
// const settingsOptions = [
//   { id: 1, name: "Profile Settings", description: "Edit your name, email, etc." },
//   { id: 2, name: "Password Settings", description: "Change your password" },
//   { id: 3, name: "Notifications", description: "Manage your notification preferences" },
//   { id: 4, name: "Privacy", description: "Set privacy settings for your account" },
//   { id: 5, name: "Account Settings", description: "Manage account preferences" },
// ];

// const SettingsPage = () => {
//   const [selectedSetting, setSelectedSetting] = useState(null);

//   return (
//     <div className="max-w-4xl mx-auto p-8">
//       <h1 className="text-3xl font-semibold mb-8">Settings</h1>

//       <div className="space-y-6">
//         {/* List of Settings Options */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">General Settings</h2>
//           {settingsOptions.map((option) => (
//             <div
//               key={option.id}
//               onClick={() => setSelectedSetting(option)}
//               className="cursor-pointer border-b py-4"
//             >
//               <h3 className="text-lg font-medium">{option.name}</h3>
//               <p className="text-sm text-gray-500">{option.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Setting Details */}
//         {selectedSetting && (
//           <div className="bg-white p-6 rounded-lg shadow-md mt-8">
//             <h2 className="text-2xl font-semibold mb-4">{selectedSetting.name}</h2>
//             <p className="text-gray-700">{selectedSetting.description}</p>

//             {/* Render different input fields based on selected setting */}
//             {selectedSetting.name === "Profile Settings" && (
//               <div className="mt-6">
//                 <div className="mb-4">
//                   <label className="font-medium">Name</label>
//                   <input type="text" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
//                 </div>
//                 <div className="mb-4">
//                   <label className="font-medium">Email</label>
//                   <input type="email" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
//                 </div>
//               </div>
//             )}
//             {selectedSetting.name === "Password Settings" && (
//               <div className="mt-6">
//                 <div className="mb-4">
//                   <label className="font-medium">Old Password</label>
//                   <input type="password" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
//                 </div>
//                 <div className="mb-4">
//                   <label className="font-medium">New Password</label>
//                   <input type="password" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
//                 </div>
//                 <div className="mb-4">
//                   <label className="font-medium">Confirm New Password</label>
//                   <input type="password" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
//                 </div>
//               </div>
//             )}
//             {/* Other settings like notifications and privacy can be added similarly */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;
// /src/app/settings/page.tsx

// "use client";  // This makes sure the code runs on the client side

// import { useState } from "react";

// // Main Settings Page Component
// const SettingsPage = () => {
//   const [activeSection, setActiveSection] = useState("general");

//   const handleSectionChange = (section: string) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-xl">
//         <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
//         <ul className="text-white">
//           <li>
//             <button
//               className={`${
//                 activeSection === "general" ? "text-yellow-300" : "text-white"
//               } hover:text-yellow-300 font-medium`}
//               onClick={() => handleSectionChange("general")}
//             >
//               General Settings
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Content Section */}
//       <div className="w-3/4 p-6 bg-white rounded-xl shadow-lg">
//         {activeSection === "general" && (
//           <div>
//             <h3 className="text-2xl font-semibold text-purple-600">General Settings</h3>
//             <div className="mt-6">
//               <h4 className="text-xl font-semibold text-blue-500">Profile Settings</h4>
//               <p className="text-gray-600">Edit your profile, name, email, and profile picture.</p>
//               <button className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700">Edit Profile</button>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-xl font-semibold text-blue-500">Password Settings</h4>
//               <p className="text-gray-600">Change your password for better security.</p>
//               <button className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700">Change Password</button>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-xl font-semibold text-blue-500">Notifications</h4>
//               <p className="text-gray-600">Manage your notification preferences for alerts.</p>
//               <button className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700">Manage Notifications</button>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-xl font-semibold text-blue-500">Theme Settings</h4>
//               <p className="text-gray-600">Choose between light and dark themes for the app.</p>
//               <button className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700">Change Theme</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;  // This line ensures the component is exported as the default export
"use client";  // Ensures this code runs only on the client side

import { useState } from "react";

// Main Settings Page Component
const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("general");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  // Profile and Password States
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    image: "", // Add a default image URL or set it later
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handle toggling between sections
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Handle toggling for theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Handle toggling for notifications
  const toggleNotifications = () => {
    setIsNotificationEnabled(!isNotificationEnabled);
  };

  // Handle Profile Update
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for updating the profile, e.g., saving the data to the backend
    console.log("Profile updated", profileData);
  };

  // Handle Password Change
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for changing password, e.g., verifying and saving the new password
    if (passwordData.newPassword === passwordData.confirmPassword) {
      console.log("Password changed successfully");
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div className={`flex ${isDarkTheme ? "bg-gray-800" : "bg-white"}`}>
      {/* Sidebar */}
      <div className="w-1/4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
        <ul className="text-white">
          <li>
            <button
              className={`${
                activeSection === "general" ? "text-yellow-300" : "text-white"
              } hover:text-yellow-300 font-medium`}
              onClick={() => handleSectionChange("general")}
            >
              General Settings
            </button>
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="w-3/4 p-6 rounded-xl shadow-lg">
        {activeSection === "general" && (
          <div>
            <h3 className="text-2xl font-semibold text-purple-600">General Settings</h3>

            {/* Profile Settings Section */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-blue-500">Profile Settings</h4>
              <p className="text-gray-600">Edit your profile, name, email, and profile picture.</p>
              <button
                className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700"
                onClick={() => handleSectionChange("profile")}
              >
                Edit Profile
              </button>
            </div>

            {/* Password Settings Section */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-blue-500">Password Settings</h4>
              <p className="text-gray-600">Change your password for better security.</p>
              <button
                className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700"
                onClick={() => handleSectionChange("password")}
              >
                Change Password
              </button>
            </div>

            {/* Notifications Settings Section */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-blue-500">Notifications</h4>
              <p className="text-gray-600">Manage your notification preferences for alerts.</p>
              <button
                className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700"
                onClick={toggleNotifications}
              >
                {isNotificationEnabled ? "Disable Notifications" : "Enable Notifications"}
              </button>
            </div>

            {/* Theme Settings Section */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-blue-500">Theme Settings</h4>
              <p className="text-gray-600">Choose between light and dark themes for the app.</p>
              <button
                className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700"
                onClick={toggleTheme}
              >
                Switch to {isDarkTheme ? "Light" : "Dark"} Theme
              </button>
            </div>
          </div>
        )}

        {activeSection === "profile" && (
          <div>
            <h4 className="text-xl font-semibold text-blue-500">Edit Profile</h4>
            <form onSubmit={handleProfileUpdate}>
              <div className="mt-4">
                <label className="text-gray-600">Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mt-4">
                <label className="text-gray-600">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="mt-4 text-blue-500 border-b-2 border-blue-500 hover:text-blue-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeSection === "password" && (
          <div>
            <h4 className="text-xl font-semibold text-blue-500">Change Password</h4>
            <form onSubmit={handlePasswordChange}>
              <div className="mt-4">
                <label className="text-gray-600">Current Password</label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      currentPassword: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mt-4">
                <label className="text-gray-600">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, newPassword: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mt-4">
                <label className="text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="mt-4 text-blue-500 border-b-2 border-blue-500 hover:text-blue-700"
              >
                Change Password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;  // Default export to fix error
