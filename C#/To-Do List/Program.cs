using To_Do_List;

Console.WriteLine("Welcome to the To-Do List Application!");
Console.WriteLine();

var todoListService = new TodoListService();
var todoListApp = new TodoListApp(todoListService);
todoListApp.Start();
