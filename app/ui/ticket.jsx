"use client";

import data from "../api/tickets.json";
import { usePathname } from "next/navigation";

export default function Ticket() {
  const pathname = usePathname();
  let ticketNo = parseInt(pathname.slice(-1));

  let ticket = data.tickets.find((item) => item.id === ticketNo);

  return (
    <main className="flex flex-col gap-3 m-5">
      <div className="border-2 rounded p-3">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl mb-1">
              #{ticket.id} - {ticket.title} ({ticket.priority})
            </h1>
            <p className="italic mb-2">
              {ticket.date ? new Date(ticket.date).toLocaleString() : "-"}
            </p>
          </div>
          {ticket.assignedTo ? (
            <h2>Assigned to {ticket.assignedTo}</h2>
          ) : (
            <h2>Unassigned</h2>
          )}
        </div>
        <h2 className="text-lg">From: {ticket.sender}</h2>
        <div className="border-2 rounded m-2 mt-5 p-5">
          <p className="font-bold mb-2">Message:</p>
          <p className="">{ticket.description}</p>
        </div>
      </div>
    </main>
  );
}
