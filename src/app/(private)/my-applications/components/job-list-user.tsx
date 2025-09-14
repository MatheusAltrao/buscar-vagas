import { getUserApplications } from "@/actions/applications/get-user-application";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default async function JobListUser() {
  const applications = await getUserApplications();
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <Card
              key={application.id}
              className="hover:shadow-lg transition-shadow duration-300 border border-border  flex flex-col justify-between"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 line-clamp-2">
                      {application.job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span className="text-sm">{application.job.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {application.job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0 ">
                <div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {application.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{application.job.location}</span>
                      <Badge variant="outline" className="ml-auto">
                        {application.job.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{application.job.postedAt}</span>
                    </div>

                    <div className="text-sm font-semibold text-primary">
                      <span>{application.job.salary}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href={`/job/${application.job.id}`}>
                    <Button variant={"secondary"} className="w-full ">
                      Ver Detalhes
                    </Button>
                  </Link>
                  <Link target="_blank" href={application.githubLink}>
                    <Button variant={"outline"} className="w-full ">
                      Github
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
