import TodoHeader from "components/Headers/TodoHeader";
import { Container } from "reactstrap";

const TodoList = () => {
  return (
    <>
      <TodoHeader />
      {/* Page content */}
      <Container className="mt--5" fluid></Container>
    </>
  );
};

export default TodoList;
