import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerCaptain } from "../../api/captainApi";
import { toast } from 'react-toastify';
import { captainDataContext } from "../../context/CaptainContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
// import CaptainBg from "../assets/Captainbg.png"; // Ensure correct import

function CaptainRegister() {

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    vehicleName: "",
    vehicleColor: "",
    vehiclePlate: "",
    vehicleCapacity: "",
    vehicleType: "",
    agreeTerms: false,
    license_image: "",
    vehicle_image: "",
    rc_book_image: "",
    driver_image: "",
  }

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { setCaptain } = useContext(captainDataContext);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;


    setFormData({
      ...formData,
      [name]: type === "checkbox"
        ? checked
        : type === "file"
          ? (files.length > 0 ? files[0] : null)
          : value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {

      const formAppendData = new FormData();
      console.log("try")

      const { firstName, lastName, email, password, vehicleColor, vehiclePlate, vehicleCapacity, vehicleType, agreeTerms, vehicleName, license_image, vehicle_image, rc_book_image, driver_image, } = formData;


      // Append JSON data as a string
      formAppendData.append("fullname", JSON.stringify({
        firstname: firstName,
        lastname: lastName,
      }));

      formAppendData.append("email", email);
      formAppendData.append("password", password);
      formAppendData.append("vehicle", JSON.stringify({
        vehiclename: vehicleName,
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicletype: vehicleType,
      }));

      formAppendData.append("agreeTerms", agreeTerms);

      // Append files separately (only if they exist)
      if (license_image) formAppendData.append("license_image", license_image);
      if (vehicle_image) formAppendData.append("vehicle_image", vehicle_image);
      if (rc_book_image) formAppendData.append("rc_book_image", rc_book_image);
      if (driver_image) formAppendData.append("driver_image", driver_image);

      console.log("formAppendData", formAppendData);

      const res = await registerCaptain(formAppendData);

      if (res.status === 201) {
        toast.success('Registration successful');
        localStorage.setItem('token', res.data.token);
        setCaptain(res.data.captain);
        navigate('/captain-home')
      }

      setFormData(initialState);
      setIsSubmitting(false);

      // const { firstName, lastName, email, password, vehicleColor, vehiclePlate, vehicleCapacity, vehicleType, agreeTerms, vehicleName } = formData;

      // const userData = {
      //   fullname: {
      //     firstname: firstName,
      //     lastname: lastName,
      //   },
      //   email,
      //   password,
      //   vehicle: {
      //     vehiclename: vehicleName,
      //     color: vehicleColor,
      //     plate: vehiclePlate,
      //     capacity: vehicleCapacity,
      //     vehicletype: vehicleType,
      //   },
      //   agreeTerms
      // }

      // console.log(userData);


      // const res = await registerCaptain(userData);
      // console.log(res.data);
      // if (res.status === 201) {
      //   toast.success('Registration successful');
      //   localStorage.setItem('token', res.data.token);
      //   setCaptain(res.data.captain);
      //   navigate('/captain-home')
      // }

      // setFormData(initialState);

    } catch (error) {
      if (error.status === 409) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error(error?.response?.data?.error[0]?.msg);
      }
    }
  }

  return (
    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-6 ">
      {/* Form Section */}

      <div className="w-full h-full lg:h-auto xl:w-1/3 lg:w-1/3 -mt-14 transform lg:mt-0 lg:absolute lg:left-24 xl:left-35 lg:top-1/2 lg:-translate-y-1/2  bg-white p-6 sm:p-8 md:p-7 md:py-10 lg:py-5 xl:py-4 xl:px-5 z-10 shadow-lg rounded-3xl">
        <form onSubmit={handleSubmit} className="w-full  z-10  rounded-2xl">
          <div className="flex justify-center mb-4">
            <h2 className='text-2xl font-bold font-epilogue text-color-yellow'>TripMate</h2>
          </div>
          <label >What's your name</label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className=" w-1/2 "
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-1/2"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <label >What's your email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Enter password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div>
            <label >Vehicle Information</label>
            <input
              type="text"
              name="vehicleName"
              placeholder="Vehicle Name"
              className="my-2! mx-0!"
              value={formData.vehicleName}
              onChange={handleChange}
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input type="text" name="vehicleColor" placeholder="Vehicle Color" className="m-0!" value={formData.vehicleColor} onChange={handleChange} required />
              <input type="text" name="vehiclePlate" placeholder="Vehicle Plate" className="m-0!" value={formData.vehiclePlate} onChange={handleChange} required />
              <input type="number" name="vehicleCapacity" placeholder="Vehicle Capacity" className="m-0!" value={formData.vehicleCapacity} onChange={handleChange} required />
              <select name="vehicleType" value={formData.vehicleType} className="m-0!" onChange={handleChange} required>
                <option value="">Vehicle Type</option>
                <option value="tripmatebike">Tripmate Bike</option>
                <option value="tripmateauto">Tripmate Auto</option>
                <option value="tripmatego">Tripmate Go</option>
                <option value="premier">Premier</option>
              </select>
            </div>
          </div>

          <div>
            <label className="my-3 ">Required Files</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <label htmlFor="driver_image" className="h-10 cursor-pointer font-normal! text-[12px]!  relative bg-color-lightgray! flex! items-center! pl-3 rounded-lg text-gray-500!">
                {formData.driver_image === "" ? "Upload driver image" : formData.driver_image.name}
                <FontAwesomeIcon icon={faPaperclip} className="absolute top-0 right-0 bottom-0  rounded-xl text-lg text-color-yellow py-2.5 pr-3" />
              </label>
              <input type="file" id="driver_image" name="driver_image" placeholder="Upload driver image" className="m-0! cursor-pointer hidden" onChange={handleChange} required />

              <label htmlFor="vehicle_image" className="h-10 cursor-pointer font-normal! text-[12px]!  relative bg-color-lightgray! flex! items-center! pl-3 rounded-lg text-gray-500!">
                {formData.vehicle_image === "" ? "Upload vehicle image" : formData.vehicle_image.name}
                <FontAwesomeIcon icon={faPaperclip} className="absolute top-0 right-0 bottom-0  rounded-xl text-lg text-color-yellow py-2.5 pr-3" />
              </label>
              <input type="file" id="vehicle_image" name="vehicle_image" placeholder="Upload vehicle image" className="m-0! hidden cursor-pointer" onChange={handleChange} required />

              <label htmlFor="license_image" className="h-10 cursor-pointer font-normal! text-[12px]!  relative bg-color-lightgray! flex! items-center! pl-3 rounded-lg text-gray-500!">
                {formData.license_image === "" ? "Upload license image" : formData.license_image.name}
                <FontAwesomeIcon icon={faPaperclip} className="absolute top-0 right-0 bottom-0  rounded-xl text-lg text-color-yellow py-2.5 pr-3" />
              </label>
              <input type="file" id="license_image" name="license_image" placeholder="Upload license image" className="m-0! hidden cursor-pointer" onChange={handleChange} required />

              <label htmlFor="rc_book_image" className="h-10 cursor-pointer font-normal! text-[12px]!  relative bg-color-lightgray! flex! items-center! pl-3 rounded-lg text-gray-500!">
                {formData.rc_book_image === "" ? "Upload RC book image" : formData.rc_book_image.name}
                <FontAwesomeIcon icon={faPaperclip} className="absolute top-0 right-0 bottom-0  rounded-xl text-lg text-color-yellow py-2.5 pr-3" />
              </label>
              <input type="file" id="rc_book_image" name="rc_book_image" placeholder="Upload RC book image" className="m-0! hidden cursor-pointer" onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg mb-2 mt-4 hover:bg-yellow-600 transition cursor-pointer">
            {isSubmitting ? "Signing up..." : " Sign Up"}
          </button>

          <p className="text-black text-sm text-center">
            Already have an account? <Link to="/captain-login" className="text-yellow-500 cursor-pointer font-semibold hover:underline">Sign in here</Link>
          </p>

        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-3/4 relative lg:ml-auto">
        <img
          src="/src/assets/captainlogin.png"
          alt="background"
          className="w-full h-64 sm:h-72 md:h-96 lg:h-screen object-cover"
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-center">
          <h2 className="text-2xl sm:text-md font-bold text-yellow-500">Register</h2>
          <p className="text-sm sm:text-sm lg:text-xl">Join the ride—adventures await at every turn!</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainRegister;

