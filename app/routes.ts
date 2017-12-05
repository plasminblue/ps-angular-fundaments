import { EventsListComponent } from "./events/events-list.component";

export const appRoutes = [
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent}
]