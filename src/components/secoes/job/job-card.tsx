import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { JobProps } from "@/types/job";
import { Building2, Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface JobCardProps {
  job: JobProps;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card
      key={job.id}
      className="hover:shadow-lg transition-shadow duration-300 border border-border  flex flex-col justify-between"
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1 line-clamp-2">{job.title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Building2 className="h-4 w-4" />
              <span className="text-sm">{job.company}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {job.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-0 ">
        <div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {job.description}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
              <Badge variant="outline" className="ml-auto">
                {job.type}
              </Badge>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{job.postedAt}</span>
            </div>

            <div className="text-sm font-semibold text-primary">
              <span>{job.salary}</span>
            </div>
          </div>
        </div>
        <Link href={`/${job.id}`}>
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Ver Detalhes
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
