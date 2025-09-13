import { Loader } from "lucide-react";

interface LoadingProps {
  size?: number;
}

export default function Loading({ size = 20 }: LoadingProps) {
  return <Loader size={size} className="animate-spin text-muted-foreground" />;
}
