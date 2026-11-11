import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from '../../components/UiNotice'

function Profile() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");

  const [profileImage, setProfileImage] = useState(
    user?.profileImage || ""
  );

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Upload Profile Picture

  function handleImage(e) {

    const file = e.target.files[0];

    if (file) {

      if (!file.type.startsWith("image/")) {
        notify("Please select an image file");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  // Update Profile

  function handleUpdate(e) {

    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exist = users.find(
      (u) => u.email === email && u.id !== user.id
    );

    if (exist) {
      notify("Email already exists");
      return;
    }

    let updatedUser = {
      ...user,
      name,
      email,
      phone,
      profileImage
    };

    let updatedUsers = users.map((u) =>
      u.id === user.id ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    notify("Profile Updated Successfully!");

    window.location.href = "/";
  }

  // Change Password

  function handlePasswordChange(e) {

    e.preventDefault();

    if (currentPassword !== user.password) {
      notify("Current Password is incorrect");
      return;
    }

    if (newPassword !== confirmPassword) {
      notify("New Password and Confirm Password do not match");
      return;
    }

    if (newPassword.length < 6) {
      notify("Password must contain at least 6 characters");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let updatedUser = {
      ...user,
      name,
      email,
      phone,
      profileImage,
      password: newPassword
    };

    let updatedUsers = users.map((u) =>
      u.id === user.id ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    notify("Password Changed Successfully!");

  }

  // Remove Profile Picture

  function removeImage() {
    setProfileImage("");
  }

  if (!user) {
    return (
      <div className="text-center p-10">
        <h2>Please Login First</h2>
        <button
          onClick={() => navigate("/login")}
          className="bg-[#3D4F62] text-[#F8FAFC] p-3 rounded-xl mt-4"
        >
          Login
        </button>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-[#F8FAFC] p-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-[#3D4F62] text-center mb-8">
          My Profile
        </h1>

        {/* Profile Picture */}

        <div className="bg-[#F8FAFC] p-8 rounded-3xl shadow-lg mb-8">

          <div className="flex flex-col items-center">

            {profileImage ? (

              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#3D4F62]"
              />

            ) : (

              <div className="w-32 h-32 rounded-full bg-[#3D4F62] text-[#F8FAFC] flex items-center justify-center text-5xl font-bold">
                {name.charAt(0).toUpperCase()}
              </div>

            )}

            <h2 className="text-xl font-bold mt-4">
              {name}
            </h2>

            <div className="flex gap-3 mt-4">

              <label className="bg-[#3D4F62] text-[#F8FAFC] px-4 py-2 rounded-xl cursor-pointer hover:bg-[#3D4F62]">

                Upload Photo

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />

              </label>

              {profileImage && (

                <button
                  onClick={removeImage}
                  className="bg-[#3D4F62] text-[#F8FAFC] px-4 py-2 rounded-xl"
                >
                  Remove
                </button>

              )}

            </div>

          </div>

        </div>

        {/* Personal Details */}

        <div className="bg-[#F8FAFC] p-8 rounded-3xl shadow-lg mb-8">

          <h2 className="text-2xl font-bold text-[#3D4F62] mb-6">
            Personal Information
          </h2>

          <form onSubmit={handleUpdate}>

            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border p-3 rounded-xl mb-5"
            />

            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border p-3 rounded-xl mb-5"
            />

            <label className="block font-semibold mb-2">
              Mobile Number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border p-3 rounded-xl mb-6"
            />

            <button
              type="submit"
              className="w-full bg-[#3D4F62] text-[#F8FAFC] p-3 rounded-xl font-semibold hover:bg-[#3D4F62]"
            >
              Save Changes
            </button>

          </form>

        </div>

        {/* Change Password */}

        <div className="bg-[#F8FAFC] p-8 rounded-3xl shadow-lg">

          <h2 className="text-2xl font-bold text-[#3D4F62] mb-6">
            Change Password
          </h2>

          <form onSubmit={handlePasswordChange}>

            <label className="block font-semibold mb-2">
              Current Password
            </label>

            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full border p-3 rounded-xl mb-5"
            />

            <label className="block font-semibold mb-2">
              New Password
            </label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full border p-3 rounded-xl mb-5"
            />

            <label className="block font-semibold mb-2">
              Confirm New Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full border p-3 rounded-xl mb-6"
            />

            <button
              type="submit"
              className="w-full bg-[#3D4F62] text-[#F8FAFC] p-3 rounded-xl font-semibold hover:bg-[#3D4F62]"
            >
              Change Password
            </button>

          </form>

        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-6 bg-[#F8FAFC] p-3 rounded-xl font-semibold"
        >
          Back to Home
        </button>

      </div>

    </div>

  );

}

export default Profile;
