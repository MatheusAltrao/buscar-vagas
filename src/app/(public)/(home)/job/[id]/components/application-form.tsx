"use client";

import { createApplication } from "@/actions/applications/create-application";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Loading from "@/components/ui/loading";
import { Textarea } from "@/components/ui/textarea";
import { ApplicationSchema, IApplicationSchema } from "@/schemas/application.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ApplicationFormProps {
  setShowForm: (show: boolean) => void;
  jobId: number;
}

export default function ApplicationForm({ setShowForm, jobId }: ApplicationFormProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<IApplicationSchema>({
    resolver: zodResolver(ApplicationSchema),
    defaultValues: {
      description: "",
      githubLink: "",
    },
  });

  async function onSubmit(values: IApplicationSchema) {
    const applicationData = {
      jobId: jobId,
      description: values.description,
      githubLink: values.githubLink,
    };

    startTransition(async () => {
      try {
        await createApplication(applicationData);
        toast.success("Candidatura enviada com sucesso!");
        router.refresh();
      } catch (error) {
        toast.error("Erro ao enviar candidatura. Tente novamente.");
        console.error("Erro ao enviar candidatura:", error);
      }
    });
  }

  function handleCancel() {
    setShowForm(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Observações</FormLabel>
                <FormControl>
                  <Textarea
                    className="max-h-[500px] min-h-[150px]"
                    placeholder="Descrição"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="githubLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link do projeto no github</FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/seu-projeto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <Button disabled={isPending} className="w-full" type="submit">
            {isPending && <Loading />} Enviar
          </Button>

          <Button
            disabled={isPending}
            onClick={handleCancel}
            className="w-full"
            type="button"
            variant="secondary"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Form>
  );
}
