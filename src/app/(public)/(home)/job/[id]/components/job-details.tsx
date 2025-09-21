"use client";

import { handleSignInRedirecToApplication } from "@/actions/login/sign-in";
import Back from "@/components/ui/back";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JobProps } from "@/schemas/job.schema";
import { Building, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SendApplication from "./send-application";

interface JobDetailsProps {
  job: JobProps;
  isAuthtenticated: boolean;
  alreadyApplied: boolean;
}

export function JobDetails({ job, isAuthtenticated, alreadyApplied }: JobDetailsProps) {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSignIn = async () => {
    handleSignInRedirecToApplication(job.id);
  };

  return (
    <div className="layout-area space-y-8">
      <div className="space-y-4">
        <Back />

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      {job.title}
                    </h1>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Building size={20} />
                      <span className="text-lg">{job.company}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.companyDescription}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} />
                    <span>{job.postedAt}</span>
                  </div>
                  <div>
                    <span>Tipo do contrato: </span>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xl font-bold text-foreground">{job.salary}</div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-foreground">Descrição da Vaga</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: job.fullDescription }}
              />

              <div className="lg:hidden">
                <SendApplication
                  handleToggleForm={handleToggleForm}
                  isAuthtenticated={isAuthtenticated}
                  jobId={job.id}
                  setShowForm={setShowForm}
                  showForm={showForm}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {!alreadyApplied && (
          <div className="lg:block hidden">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Enviar desafio</CardTitle>
                <CardDescription>
                  Envie seu desafio para a vaga e aguarde o contato da empresa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SendApplication
                  handleToggleForm={handleToggleForm}
                  isAuthtenticated={isAuthtenticated}
                  jobId={job.id}
                  setShowForm={setShowForm}
                  showForm={showForm}
                />
              </CardContent>
            </Card>
          </div>
        )}

        {alreadyApplied && (
          <div className="lg:block hidden">
            <Card className="sticky top-8 bg-primary/10 border-primary">
              <CardHeader>
                <CardTitle>Candidatura enviada!</CardTitle>
                <CardDescription>
                  Aguarde o contato da empresa. Você pode acompanhar todas as suas
                  candidaturas clicando{" "}
                  <Link className="underline text-primary" href={"/minhas-candidaturas"}>
                    aqui
                  </Link>
                  .
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
