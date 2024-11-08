"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 

interface FormData {
  dueDate: string;
  title: string;
  description: string;
}

interface FormErrors {
  dueDate: string;
  title: string;
  description: string;
}

interface SubmitStatus {
  type: '' | 'error' | 'success';
  message: string;
}

const AddTask = () => {

  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    dueDate: '',
    title: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    dueDate: '',
    title: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: '',
    message: ''
  });

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {
      dueDate: '',
      title: '',
      description: ''
    };


    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required';
      isValid = false;
    } else {
      const selectedDate = new Date(formData.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.dueDate = 'Due date cannot be in the past';
        isValid = false;
      }
    }


    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    } else if (formData.title.length > 29) {
      newErrors.title = 'Title must be less than 30 characters';
      isValid = false;
    }


    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSubmitStatus({ type: '', message: '' });

    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors before submitting'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        'http://localhost:4000/task',
       {...formData, completed: false}
      );
      
      if (response.status === 201 || response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Task created successfully!'
        });

        setFormData({
          dueDate: '',
          title: '',
          description: ''
        });

        router.push('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setSubmitStatus({
          type: 'error',
          message: error.response?.data?.message || 'Failed to create task. Please try again.'
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'An unexpected error occurred'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-h-[590px] gap-6 h-fit flex-col bg-[#433352] text-[#c3b3d1] xs:rounded-md p-8">
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full h-9 items-center">
          <p>Due Date:</p>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
            className={`h-full cursor-pointer ml-2 p-2 bg-[#c084fc] rounded-sm text-purple-950 `}
          />
        </div>
        {errors.dueDate && (
          <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>
        )}
      </div>
      
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full h-9 items-center">
          <p>Task Title:</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`h-full p-2 text-purple-950 focus:outline-none bg-[#c084fc] w-[250px] tracking-wide rounded-sm ml-3 `}
            maxLength={29}
          />
        </div>
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>
    
      <div className="flex flex-col w-full h-fit">
        <p>Task Description:</p>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className={`p-2 h-[250px] text-purple-950 resize-none focus:outline-none bg-[#c084fc] w-full tracking-wide rounded-sm mt-2 `}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className={`w-24 self-end p-2 rounded-md transition-all ease-in-out duration-200 
          ${isSubmitting 
            ? 'bg-gray-500 cursor-not-allowed' 
            : 'bg-purple-950 hover:bg-[#9965dd] hover:text-black'
          }`}
      >
        {isSubmitting ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default AddTask;