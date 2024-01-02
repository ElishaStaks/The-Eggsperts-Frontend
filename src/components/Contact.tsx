/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-continue */

'use client';

import Image from 'next/image';
// import Map from '../components/Map';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import Button from './Button';
import GoogleMaps from './Map';
// import { toast } from 'sonner';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    mobile: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setLoading] = useState(false);

  const handleFocusEvent = (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const element = e.currentTarget;
    element.classList.remove('border-red-500');
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    let hasEmptyFields = false;
    let emailFormatValid = true;

    const fieldsToCheck = ['name', 'email', 'message'];

    for (const fieldName of fieldsToCheck) {
      const element = form.elements.namedItem(fieldName) as HTMLInputElement;

      if (!element) {
        continue;
      }

      if (element.value.trim() === '') {
        // Empty field found
        hasEmptyFields = true;
        element.classList.add('border-red-500');
      }

      if (
        fieldName === 'email' &&
        element.value.trim() !== '' &&
        !element.value.includes('@')
      ) {
        // Email without @ found
        emailFormatValid = false;
        // toast.error('Please include an @ in the email address');
        element.classList.add('border-red-500');
      }

      if (!hasEmptyFields && emailFormatValid) {
        element.classList.remove('border-red-500');
      }
    }

    if (hasEmptyFields) {
      // toast.error('Please fill out all fields');
      return;
    }

    if (!emailFormatValid) {
      return;
    }

    setLoading(true);

    const url = process.env.NEXT_PUBLIC_EGGCELLENT_BACKEND_URL;

    // Send form data to the backend
    const response = await fetch(`${url}/api/send-email`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setLoading(false);
      // toast.success('Message has been sent');
      // Clear the form data
      setFormData(initialFormData);
    } else {
      setLoading(false);
      // toast.success('Message failed to send');
    }
  };

  return (
    <section id="contact" className="contact-section-wrapper">
      <div className="max-container padding-container mb-10 w-full">
        <div className="relative">
          <Image
            src="/eggs_title_icon.png"
            alt="eggs"
            width={50}
            height={50}
            className="title-icon left-[5px]"
          />
          <h2 className="contact-title">Contact Us</h2>
        </div>
      </div>
      <div className="contact-main-wrapper">
        {/* Use lg:justify-between to separate the contact form and map on large screens */}
        <div className="z-20 flex w-full flex-col lg:mr-10 lg:w-full">
          {/* Specify width for the contact form on large screens */}
          <div className="rounded-md border p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="contact-form-title">
                <span className="mr-2">✉️</span> Write to us
              </h2>
              <p className="contact-form-description">
                If you have a general enquiry, you can submit it to us online.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block font-bold text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  onClick={handleFocusEvent}
                  type="text"
                  id="name"
                  name="name"
                  className="contact-form-input focus:shadow-outline focus:outline-none"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block font-bold text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  onClick={handleFocusEvent}
                  type="text"
                  id="email"
                  name="email"
                  className="contact-form-input focus:shadow-outline focus:outline-none"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="mb-2 block font-bold text-gray-700"
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="contact-form-input focus:shadow-outline focus:outline-none"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block font-bold text-gray-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  onClick={handleFocusEvent}
                  id="message"
                  name="message"
                  rows={4}
                  className="contact-form-input focus:shadow-outline focus:outline-none"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-start">
                <Button
                  type="submit"
                  title="Submit"
                  variant="btn_yellow"
                  isLoading={isLoading}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="shadow-xl lg:w-full">
          <GoogleMaps lat={-37.80750711160688} lng={144.95677959602912} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
