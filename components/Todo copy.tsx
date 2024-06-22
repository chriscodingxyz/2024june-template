//this was an attempt to keep this as a SERVER COMPONENT, this would wrap everything that used to be a onClick with an input and form

// import { TTodo } from "@/lib/types";
// import React from "react";
// import { Button } from "./ui/button";
// import { deleteTodoAction, toggleTodoCheckboxAction } from "@/actions/actions";
// import { Input } from "./ui/input";

// type Props = {
//   todo: TTodo;
// };

// // function toggleCheckbox(id) {}

// console.log("inside of tododododododod");

// export default function Todo({ todo }: Props) {
//   return (
//     <li className="border border-red-500">
//       <div className="flex items-center justify-between">
//         <span>
//           <form>
//             <input
//               type="checkbox"
//               //   checked={todo.done}
//               name="id"
//               value={todo.id}
//               formAction={toggleTodoCheckboxAction}
//               //   onClick={() => toggleTodoCheckboxAction(todo.id)}
//             />
//           </form>
//           id: {todo.id}
//         </span>
//         <span>{todo.text}</span>
//         <span>{todo.done ? "✅" : "❌"}</span>
//         <form>
//           <Input type="hidden" name="id" value={todo.id} />
//           <Button
//             size={"sm"}
//             variant={"destructive"}
//             //   onClick={() => deleteTodoAction(todo.id)}
//             formAction={deleteTodoAction}
//           >
//             Deleteee
//           </Button>
//         </form>
//       </div>
//     </li>
//   );
// }
