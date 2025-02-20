import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild, ViewChildren } from '@angular/core';


import {ControlComponent} from '../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements, OnInit, AfterViewInit {


  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons

private form = viewChild<ElementRef<HTMLFormElement>>('form');

  add = output<{title: string, ticket: string}>();

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);

    this.add.emit({title, ticket: ticketText});

    this.form()?.nativeElement.reset();
  }

  ngOnInit(): void {
    console.log("ON INIT");
    console.log(this.form()?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT");
    console.log(this.form()?.nativeElement);
  }
}
