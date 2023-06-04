'use client';

import axios from 'axios';
import { FC } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from '@/app/components/modals/Modal';
import Heading from '@/app/components/Heading';
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';
import { signIn } from 'next-auth/react';

interface RegisterModalProps {}

const RegisterModal: FC<RegisterModalProps> = ({}) => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subtitle='Create an account' />
      <Input
        id={'email'}
        register={register}
        label={'Email'}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id={'name'}
        register={register}
        label={'Name'}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id={'password'}
        type={'password'}
        register={register}
        label={'Password'}
        disabled={isLoading}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outline
        label={'Continue with Google'}
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label={'Continue with Github'}
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className='text-neutral-500 text-center mt-4 font-light'>
        <div className='flex flex-row justify-center gap-2 text-center'>
          <div>
            <div>Already have an account?</div>
          </div>
          <div
            className='text-neutral-800 cursor-pointer hover:underline'
            onClick={registerModal.onClose}
          >
            <div>Log in</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title={'Register'}
      actionLabel={'Continue'}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
