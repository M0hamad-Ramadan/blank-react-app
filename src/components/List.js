
const tasks = [
{id:'1', title:'doing my home work'},
{id:'2', title:'play with my dog'},
{id:'3', title:'reading onther book'},
{id:'4', title:'calling my brothers'}
]

const myTasks = tasks.map((task)=>{
  return <li key={task.id}>{task.title}</li>
})

const List = () => {
  return (
    <>
      <ul>
        {myTasks}
      </ul>
    </>
  );
};

export default List;
