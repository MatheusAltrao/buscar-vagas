import Loading from "./loading";

export default function PageLoading() {
  return (
    <div className="h-screen bg-background pt-[15vh] ">
      <div className=" flex  justify-center">
        <Loading size={28} />
      </div>
    </div>
  );
}
