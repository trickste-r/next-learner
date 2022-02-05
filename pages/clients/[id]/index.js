import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  const loadProjectHandler = () => {
    // load data ...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: router.query.id, clientprojectid: "projecta" },
    });
  };
  return (
    <div>
      <h1>ClientProjectPage</h1>
      <button onClick={loadProjectHandler}>Load a project</button>
    </div>
  );
}
