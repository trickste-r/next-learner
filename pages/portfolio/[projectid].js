import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname)
  console.log(router.query.projectid)
  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
}
