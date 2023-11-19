/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import "../../../css/easymde.min.css"

import { useRouter } from "next/router"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, TextFieldInput, TextFieldRoot } from "@radix-ui/themes"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { FaPlus } from "react-icons/fa6"
import { SimpleMdeReact } from "react-simplemde-editor"
import { z } from "zod"

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
})

interface IssueForm {
  title: string
  description: string
}

export default function NewIssuePage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  })

  async function onSubmit(data: IssueForm) {
    console.log(isSubmitting)
    console.log(data)

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-h-screen h-screen w-full items-center justify-center "
    >
      <div className="relative flex flex-col rounded-xl border border-zinc-900 h-auto bg-clip-border text-gray-700 shadow-none w-96 md:w-[800px] space-y-3 mx-auto box-border p-4">
        <TextFieldRoot className="mb-6">
          <TextFieldInput
            {...register("title")}
            variant="classic"
            size="3"
            placeholder="Title"
            className="text-2xl tracking-normal m-2 "
          />
        </TextFieldRoot>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description" {...field} />
          )}
        />

        <button
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting}
          className="mt-20 block w-full cursor-pointer rounded bg-cyan-900 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <div role="status">spining animate</div>
          ) : (
            "Create new Ticket"
          )}
        </button>
      </div>
    </form>
  )
}
