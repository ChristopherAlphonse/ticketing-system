'use client';

import '../../../css/easymde.min.css';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorMessage from '@app/component/ErrorMessage';
import { createIssueSchema } from '@app/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CalloutIcon,
  CalloutRoot,
  CalloutText,
  TextFieldInput,
  TextFieldRoot,
} from '@radix-ui/themes';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { BiInfoCircle } from 'react-icons/bi';
import { SimpleMdeReact } from 'react-simplemde-editor';
import { z } from 'zod';

type IssueForm = z.infer<typeof createIssueSchema>;

export default function NewIssuePage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  async function onSubmit(data: IssueForm) {
    try {
      await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error) {
      console.error('Error:', error);
      setError('unexpected error has occurred.');
    }
  }

  return (
    <div>
      {error && (
        <CalloutRoot color="red">
          <CalloutIcon>
            <BiInfoCircle size={20} />
          </CalloutIcon>
          <CalloutText>{error}</CalloutText>
        </CalloutRoot>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-screen h-screen w-full items-center justify-center "
      >
        <div className="relative flex flex-col rounded-xl border border-zinc-900 h-auto bg-clip-border text-gray-700 shadow-none w-96 md:w-[800px] space-y-3 mx-auto box-border p-4">
          <p className="text-zinc-500 text-md">{"  Please tell us the issues you've accounted "}</p>
          <TextFieldRoot className="mb-9">
            <TextFieldInput
              {...register('title')}
              variant="classic"
              size="3"
              placeholder="Title"
              className="text-2xl tracking-normal m-2 "
            />
          </TextFieldRoot>

          <ErrorMessage>{errors.title?.message}</ErrorMessage>

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <>
                <SimpleMdeReact placeholder="Description" {...field} />
              </>
            )}
          />

          <ErrorMessage>{errors.description?.message}</ErrorMessage>

          <button
            type="submit"
            disabled={!isDirty || !isValid || isSubmitting}
            className="mt-20 block w-full cursor-pointer rounded bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-800 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Creating Ticket ...
              </div>
            ) : (
              'Create new Ticket'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
