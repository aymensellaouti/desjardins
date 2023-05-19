import { NgModule } from "@angular/core";
import { TodoRoutingModule } from "./todo.routing";
import { TodoComponent } from "./todo/todo.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TodoComponent],
  imports: [TodoRoutingModule, CommonModule, FormsModule],
})
export class TodoModule {}
