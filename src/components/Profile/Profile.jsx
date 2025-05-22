import React from 'react';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const parson = {
  name: "Wahab Rubel",
  age: 31,
  address: "Dhaka, Bangladesh",
  email: "wahab@example.com",
  bio: "I'm a professional web developer who loves to build beautiful and fast web apps.",
  image: "https://i.ibb.co/mVMT2bNq/React-maste-2024.jpg",
  phone: "+880 1234-567890",
  birthday: "June 5, 1992",
  gender: "Male",
  website: "https://wahabrubel.dev"
};

const Profile = () => {
  const { name, age, address, email, bio, image, phone, birthday, gender, website } = parson;

  return (
    <div className="min-h-screen bg-blue-100 flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left section */}
          <div className="md:w-1/3 flex flex-col items-center">
            <img
              src={image}
              alt={name}
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover"
            />
            <div className="mt-5 text-center">
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              <p className="text-blue-500">Web Developer</p>
              <p className="text-gray-600 text-sm mt-2">{bio}</p>
            </div>
          </div>

          {/* Right section */}
          <div className="md:w-2/3 space-y-6">
            <div className="border-b pb-3">
              <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
              <div className="mt-3 space-y-2 text-gray-700 text-sm">
                <p><strong>Phone:</strong> <span className="text-blue-600">{phone}</span></p>
                <p className="flex items-center gap-1">
                  <MapPinIcon className="h-4 w-4 text-gray-500" />
                  <span>{address}</span>
                </p>
                <p className="flex items-center gap-1">
                  <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-blue-600">{email}</span>
                </p>
                <p><strong>Website:</strong> <a href={website} className="text-blue-600">{website}</a></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">Basic Information</h3>
              <div className="mt-3 space-y-1 text-gray-700 text-sm">
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Birthday:</strong> {birthday}</p>
                <p><strong>Gender:</strong> {gender}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition">
                Send Message
              </button>
              <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-100 transition">
                Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
