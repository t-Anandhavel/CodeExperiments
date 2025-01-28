namespace To_Do_List
{
    public class TodoListService
    {
        private readonly List<string> _listToDo = new();

        public bool AddToList(string item)
        {
            if (_listToDo.Contains(item, StringComparer.OrdinalIgnoreCase))
            {
                return false; // Duplicate item
            }
            _listToDo.Add(item);
            return true;
        }

        public void PrintList()
        {
            if (_listToDo.Count == 0)
            {
                Console.WriteLine("The to-do list is empty.");
                return;
            }

            Console.WriteLine("To-Do List:");
            for (int i = 0; i < _listToDo.Count; i++)
            {
                Console.WriteLine($"{i + 1}. {_listToDo[i]}");
            }
        }

        public bool RemoveFromList(int index)
        {
            if (index < 0 || index >= _listToDo.Count)
            {
                return false; // Invalid index
            }
            _listToDo.RemoveAt(index);
            return true;
        }

        public void ClearList()
        {
            _listToDo.Clear();
        }

        public bool ListIsEmpty()
        {
            return !_listToDo.Any();
        }
    }
}
