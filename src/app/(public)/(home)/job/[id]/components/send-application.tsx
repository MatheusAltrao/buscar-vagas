import { handleSignIn } from "@/actions/login/sign-in";
import { Button } from "@/components/ui/button";
import ApplicationForm from "./application-form";

interface SendApplicationProps {
  isAuthtenticated: boolean;
  showForm: boolean;
  handleToggleForm: () => void;
  jobId: number;
  setShowForm: (show: boolean) => void;
}

export default function SendApplication({
  isAuthtenticated,
  showForm,
  handleToggleForm,
  jobId,
  setShowForm,
}: SendApplicationProps) {
  return (
    <div className="space-y-4">
      {!isAuthtenticated && (
        <form action={handleSignIn}>
          <Button className="w-full">Enviar</Button>
        </form>
      )}
      {!showForm && isAuthtenticated && (
        <Button onClick={handleToggleForm} className="w-full">
          Enviar
        </Button>
      )}

      {showForm && <ApplicationForm setShowForm={setShowForm} jobId={jobId} />}
    </div>
  );
}
