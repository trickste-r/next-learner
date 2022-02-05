import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "1", name: "suraj" },
    { id: "2", name: "bisht" },
  ];
  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                // alt - `/clients/${client.id}`
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
