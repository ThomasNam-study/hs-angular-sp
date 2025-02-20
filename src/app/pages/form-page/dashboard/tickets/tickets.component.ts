import { Component, signal } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets = signal<Ticket[]>([]);

  onAdd(ticketData: {title: string, ticket: string}) {
      const ticket:Ticket = {
        id: Math.random().toString(),
        title: ticketData.title,
        request: ticketData.ticket,
        status: 'open'
      };

      this.tickets.update((v) => [...v, ticket]);
  }

  onCloseTicket(id: string) {
    this.tickets.update((v) => {
      return v.map((ticket) => {
        if (ticket.id === id) {
          return {...ticket, status: 'closed'};
        }
        return ticket;
      });
    })
  }
}
