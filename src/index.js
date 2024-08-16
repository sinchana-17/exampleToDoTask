function addTask()
{
  let taskInput=document.getElementById("taskInput")
  let textInput=taskInput.value.trim();

  if(taskInput)
  {
  let taskList=document.getElementById("taskList");
  let listItem=document.createElement('li');
  listItem.innerHTML= taskText + '<span onclick="removeTask()"> x </span>';
  taskList=append.childElement(listItem);
  taskText.value=" ";
  }
}
function removeTask(element)
{
  element.parentElement.remove();
}
document.getElementById('taskInput').addEventListener('click',function(event)
{
if(event.key == 'Enter')
{
  addTask();
}
});