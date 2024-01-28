/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-continue */

'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'sonner';

import Button from './Button';
import GoogleMaps from './Map';

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
        toast.error('Please include an @ in the email address');
        element.classList.add('border-red-500');
      }

      if (!hasEmptyFields && emailFormatValid) {
        element.classList.remove('border-red-500');
      }
    }

    if (hasEmptyFields) {
      toast.error('Please fill out all fields');
      return;
    }

    if (!emailFormatValid) {
      return;
    }

    setLoading(true);

    const url = process.env.NEXT_PUBLIC_API_URL;

    // Send form data to the backend
    const response = await fetch(`${url}/api/sendEmail`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setLoading(false);
      toast.success('Message has been sent');
      // Clear the form data
      setFormData(initialFormData);
    } else {
      setLoading(false);
      toast.error('Message failed to send');
    }
  };

  return (
    <section id="contact" className="contact-section-wrapper bg-[#c6bfa8]">
      <div className="contact-main-wrapper">
        {/* Use lg:justify-between to separate the contact form and map on large screens */}
        <div className="z-20 flex w-full flex-col lg:mr-10 lg:w-full">
          {/* Specify width for the contact form on large screens */}
          <div className="rounded-md border-2 border-[#fff] bg-[#e3deca] p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="contact-form-title">
                <span className="mr-2">✉️</span> Write to us
              </h2>
              <p className="contact-form-description">
                Already got an egg supplier? Send us two invoices and we will do
                our best to crack their prices. Start by filling out our form
                below, and someone from our team will get back to you.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-[#e3deca]">
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
                  type="email"
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
        <div className="hidden shadow-xl lg:block lg:w-full">
          <GoogleMaps lat={-37.8064932} lng={144.9571063} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
