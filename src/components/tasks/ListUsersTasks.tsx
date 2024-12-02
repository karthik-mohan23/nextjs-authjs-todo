type ListUsersTasksProps = {
  id: string;
  title: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};

function ListUsersTasks({ usersTasks }: { usersTasks: ListUsersTasksProps[] }) {
  return (
    <section>
      <div>
        {usersTasks.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.updatedAt.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ListUsersTasks;
