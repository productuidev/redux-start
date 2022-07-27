// 위쪽으로 이동
// Props로 todos를 받아서 map
export default function TodoList({todos}) {
  return (
    <ul>
      {todos.map((todo)=>{
        return <li>{todo.text}</li>;
      })}
    </ul>
  );
}